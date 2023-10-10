import React, { useEffect, useMemo, useState } from "react";
import {
    Box,
    Grid,
    Typography,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    Tooltip,
    Chip, Button, TextField, MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import MainCard from "../../ui-component/cards/MainCard";
import SecondaryAction from "../../ui-component/cards/CardSecondaryAction";
import LinkIcon from "@mui/icons-material/Link";
import {PendingActions} from "@mui/icons-material";
import { gridSpacing } from "../../store/constant";
import TotalJustifiedAbsence from "./TotalJustifiedAbsence";
import TotalNotJustifiedAbsence from "./TotalNotJustifiedAbsence";
import { useFilters, useSortBy, useTable, useGlobalFilter,usePagination } from "react-table";
import { useTheme,styled  } from "@mui/material/styles";
import {
    absences,
    awaitSync,
    CustomizeBreadcrumbs,
    getChipStyles, GlobalSearchInputTable, Pagination,
    SortableSelectTable,
    statusOptions
} from "../../utils";
import {Field, Form, Formik} from "formik";
import '../../assets/css/absences.css'
import Skeleton from "@mui/material/Skeleton";
import {breadcrumbsAbsences} from "../../utils/breadcrum";
// =============================|| STYLING TABLE ||============================= //
// Créez un composant stylisé pour la table
const StyledTable = styled(Table)`
  width: 100%;
  border-collapse: collapse;
  min-width: 650px;
`
const StyledHeaderCell = styled(TableCell)`
  color: #696868;
  font-weight: bold;
`
const StyledTableRow = styled(TableRow)`
  &:hover {
    background-color: lightgray;
  }
`
const StyledTableCell = styled(TableCell)`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: center;
`
const TableContainer = styled("div")`
  width: 100%;
  overflow-x: auto;
  margin: 0 auto;
`;
// =============================|| TABLE ICONS ||============================= //
export default function Absences() {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        awaitSync(2000).then(() => {
            setLoading(false); // Une fois l'attente terminée, définir isLoading sur false
        });
    }, []);
    const theme = useTheme();
    const { chipErrorSX, chipSuccessSX } = getChipStyles(theme);
    const columns = useMemo(
        () => [
            {
                Header: "ID",
                accessor: "id",
            },
            {
                Header: "Leçons",
                accessor: "lessons",
            },
            {
                Header: "Heures",
                accessor: "hours",
            },
            {
                Header: "Statut",
                accessor: "status",
                Cell: ({ row }) => {
                    return (
                        <Chip
                            label={row.original.status}
                            sx={row.original.status === "not-justified" ? chipErrorSX : chipSuccessSX}
                        />
                    );
                },
            },
            {
                Header: "Actions",
                Cell: ({ row }) => {
                    if (row.original.status === "not-justified") {
                        return (
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Tooltip title={<Typography>Je justifie mes absences</Typography>}>
                                        <PendingActions
                                          style={{color: `${theme.palette.primary.main}`, cursor:'pointer'}}
                                        />
                                </Tooltip>
                            </div>
                        );
                    } else {
                        return null; // Retourne null si le statut est différent de 'not-justified'
                    }
                },
            },
        ],
        []
    );

    const data = useMemo(() => absences || [], []);
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
          data: data, // Utilisez "data" au lieu de "datas"
      },
      useFilters,
      useGlobalFilter,
      useSortBy,
      usePagination
    );
    const {globalFilter, pageIndex, pageSize} = state
    const handleSubmit = (values) =>{
        console.log(values)
    }
    return (
        <MainCard
            title={
                <CustomizeBreadcrumbs paths={breadcrumbsAbsences} />
            }
            secondary={<SecondaryAction icon={<LinkIcon fontSize="small" />} />}
            className='absences'
        >
            <Grid
                sx={{ display: "flex", justifyContent: "space-evenly" }}
                container
                spacing={gridSpacing}
                mb={3}
            >
                <Grid item sm={6} xs={12} md={4} lg={4}>
                    <TotalJustifiedAbsence isLoading={isLoading} />
                </Grid>
                <Grid item sm={6} xs={12} md={4} lg={4}>
                    <TotalNotJustifiedAbsence isLoading={isLoading} />
                </Grid>
            </Grid>
            <Paper elevation={1} style={{padding: '24px'}}>
                <Box sx={{display:'flex',flexDirection:{xs:'column', md:'row'},gap:{xs:"8px", md:"16px"}, alignItems:'center', justifyContent:'space-between'}}>
                    <SortableSelectTable sizes={[10,15,20]} pageSize={pageSize} setPageSize={setPageSize} />
                    <Box sx={{width:{xs:"100%",md:"250px"}, marginRight: "auto"}}>
                        <Formik
                          initialValues={{ statut: '' }}
                          onSubmit={handleSubmit}

                        >
                            {({ values, setFieldValue }) => (
                              <Form>
                                  <Field
                                    as={TextField}
                                    select
                                    name="statut"
                                    label="Filtez par statut"
                                    variant="outlined"
                                    value={values.statut || ''}
                                    onChange={(e) => {
                                        setFieldValue("statut", e.target.value);
                                    }}
                                    fullWidth
                                    sx={{ height: '45px', '& .MuiInputBase-root ': {height: '45px'}}}
                                  >
                                      <MenuItem value=''>Filtez par statut</MenuItem>
                                      {statusOptions.map((statut, key) => (
                                        <MenuItem key={key} value={statut}>
                                            {statut}
                                        </MenuItem>
                                      ))}
                                  </Field>
                              </Form>
                            )
                            }
                        </Formik>
                    </Box>
                    <GlobalSearchInputTable filter={globalFilter} setFilter={setGlobalFilter} />
                </Box>
                <TableContainer>
                    <StyledTable {...getTableProps()} className="table">
                        <TableHead>
                            {headerGroups.map((headerGroup) => (
                                <StyledTableRow {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <StyledHeaderCell {...column.getHeaderProps(column.getSortByToggleProps())}>
                                            <Typography variant='span'>{column.render('Header')}</Typography>
                                            <Typography variant='span' style={{marginLeft:'auto'}}>
                                                {column.isSorted ? (column.isSortedDesc ? ' ⬆️' : ' ⬇️') : ''}
                                            </Typography>
                                        </StyledHeaderCell>
                                    ))}
                                </StyledTableRow>
                            ))}
                        </TableHead>
                        <TableBody {...getTableBodyProps()}>
                            {!isLoading ? (
                                <>
                                    {page.map((row) => {
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
                                    })}
                                </>
                            ) : (
                                // Render Skeletons here when data is loading or no data available
                                <StyledTableRow>
                                    <StyledTableCell colSpan={6}>
                                        <Skeleton animation="wave" height={50} />
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
            </Paper>
        </MainCard>
    );
}
