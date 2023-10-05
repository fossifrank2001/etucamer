import React, {useEffect, useMemo, useState} from 'react'
import {Box, Button, Grid, TableBody, TableHead, Tooltip, Typography} from "@mui/material";
import {gridSpacing} from "../../store/constant";
import {
    awaitSync,
    CircularProgressWithLabel,
    CustomizeBreadcrumbs,
    GlobalSearchInputTable, Pagination,
    SortableSelectTable
} from "../../utils";
import {breadcrumbsLessons} from "../../utils/breadcrum";
import SecondaryAction from "../../ui-component/cards/CardSecondaryAction";
import LinkIcon from "@mui/icons-material/Link";
import MainCard from "../../ui-component/cards/MainCard";
import {levels} from "../../utils/password-strength";
import {useNavigate} from "react-router-dom";
import {IconEye} from "@tabler/icons";
import {useFilters, useGlobalFilter, usePagination, useSortBy, useTable} from "react-table";
import {useTheme} from "@mui/material/styles";
import Skeleton from "@mui/material/Skeleton";
import {
    StyledHeaderCell,
    StyledTable, StyledTableCell,
    StyledTableRow,
    TableContainer
} from "../dashboard/Default/ProgressingLessonTable";


const  Lessons = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        awaitSync(5000).then(() => {
            setLoading(false); // Une fois l'attente terminée, définir isLoading sur false
        });
    }, []);
    const theme = useTheme();
    const navigate = useNavigate();
    const [subjects, setSubjects] =useState(null);
    /**
     * @param {Object} subjects_
     */
    const navigateThroughtLesson = (subjects_)=>{
        setSubjects(subjects_)
    }
    const columns = useMemo(
        () => [
            {
                Header: "ID",
                accessor: "id",
            },
            {
                Header: "Cour",
                accessor: "lesson",
            },
            {
                Header: "Date de début",
                accessor: "beginDate",
            },
            {
                Header: "Progression",
                accessor: "progression",
                Cell: ({ row }) => {
                    return (
                        <CircularProgressWithLabel value={row.original.progression} />
                    );
                },
            },
            {
                Header: "Heures",
                accessor: "hours",
            },
            {
                Header: "Actions",
                Cell: ({ row }) => {
                    return (
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Tooltip title={<Typography>Plus de détails sur ce cour.</Typography>}>
                                <Box>
                                    <IconEye
                                        onClick={() => navigate(`/admin/lesson/${row.original.id}/view`)}
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            textDecoration: "none",
                                            cursor: 'pointer',
                                            color: `${theme.palette.primary.main}`,
                                        }}
                                    />
                                </Box>
                            </Tooltip>
                        </div>
                    );
                },
            },
        ],
        []
    );

    const datas = useMemo(() => subjects || [], [subjects]);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        previousPage,
        nextPage,
        prepareRow,
        state,
        setGlobalFilter,
        gotoPage,
        pageCount,
        canPreviousPage,
        canNextPage,
        pageOptions,
        setPageSize

    } = useTable(
        {
            columns,
            data: datas, // Utilisez "data" au lieu de "datas"
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    const {globalFilter, pageIndex, pageSize} = state
    return (
        <MainCard
            title={
                <CustomizeBreadcrumbs paths={breadcrumbsLessons} />
            }
            secondary={<SecondaryAction icon={<LinkIcon fontSize="small" />} />}
            className='absences'
        >
            <Typography
                variant='h1'
                sx={{textAlign:'center', fontSize:{xs:"16px", md:"18px"}, fontWeight:'lighter', my:2}}
            >
                Pour consulter les cours qui vous sont assignés veillez selectionner le semestre en cour.
            </Typography>
            <Grid
                sx={{ display: "flex", justifyContent: "space-evenly", flexWrap:"wrap" }}
                container
                spacing={gridSpacing}
                mb={3}
            >
                {
                    levels.map(level => {
                        return level.semesters.map((semester, index) => {
                            return (
                                <Grid key={index} item xs={6} md={3} lg={2}>
                                    <Button
                                        sx={{
                                            width:'100%',
                                            borderRadius:"10px",
                                            border:"1px solid var(--primary)",
                                            height:"75px"
                                        }}
                                        variant='outlined'
                                        onClick={() => navigateThroughtLesson(semester.subjects)}
                                    >Semetre{' '}{semester.number}</Button>
                                </Grid>
                            )
                        })
                    })
                }
            </Grid>
            {subjects &&
                <>
                  <Box sx={{display:'flex',flexDirection:{xs:'column', md:'row'}, alignItems:'center', justifyContent:'space-between'}}>
                    <SortableSelectTable sizes={[10,15,20]} pageSize={pageSize} setPageSize={setPageSize} />
                    <GlobalSearchInputTable filter={globalFilter} setFilter={setGlobalFilter} />
                  </Box>
                    <TableContainer
                        sx={{ width: { xs: '100%', md: '98%' }, margin: '0 auto' }}
                    >
                        <StyledTable {...getTableProps()} className="table">
                            <TableHead>
                                {headerGroups.map((headerGroup) => (
                                    <StyledTableRow {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map((column) => (
                                            <StyledHeaderCell {...column.getHeaderProps(column.getSortByToggleProps())}>
                                                <Typography variant="span">{column.render("Header")}</Typography>
                                                <Typography variant="span" style={{ marginLeft: "auto" }}>
                                                    {column.isSorted ? (column.isSortedDesc ? " ⬆️" : " ⬇️") : ""}
                                                </Typography>
                                            </StyledHeaderCell>
                                        ))}
                                    </StyledTableRow>
                                ))}
                            </TableHead>
                            <TableBody {...getTableBodyProps()}>
                                {!isLoading ? (
                                    page.map((row) => {
                                        prepareRow(row);
                                        return (
                                            <StyledTableRow {...row.getRowProps()}>
                                                {row.cells.map((cell) => {
                                                    return (
                                                        <StyledTableCell {...cell.getCellProps()}>
                                                            {cell.render("Cell")}
                                                        </StyledTableCell>
                                                    );
                                                })}
                                            </StyledTableRow>
                                        );
                                    })
                                ) : (
                                    // Render Skeletons here when data is loading or no data available
                                    <StyledTableRow>
                                        <StyledTableCell colSpan={6}>
                                            <Skeleton animation="wave" height={50} />
                                            <Skeleton animation="wave" height={50} />
                                        </StyledTableCell>
                                    </StyledTableRow>
                                )}
                            </TableBody>
                        </StyledTable>
                    </TableContainer>
                  <Box  sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                    <Box>
                      Page{' '}
                      <strong>
                        {pageIndex + 1} of {pageOptions.length}
                      </strong>{' '}
                    </Box>
                    <Pagination
                      canPreviousPage={canPreviousPage}
                      canNextPage={canNextPage}
                      previousPage={previousPage}
                      nextPage={nextPage}
                      pageCount={pageCount}
                      gotoPage={gotoPage}
                    />
                  </Box>
                </>
            }
        </MainCard>
    )
}
export default  Lessons;