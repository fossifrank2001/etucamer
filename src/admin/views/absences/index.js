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
import { useTable, useFilters, useSortBy } from "react-table";
import { useTheme,styled  } from "@mui/material/styles";
import {absences, awaitSync, CustomizeBreadcrumbs, getChipStyles, lessonsOptions, statusOptions} from "../../utils";
import {Field, Form, Formik} from "formik";
import Pagination from '@mui/material/Pagination';
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
  text-align: left;
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
    const { chipSX, chipErrorSX, chipWarningSX, chipSuccessSX } = getChipStyles(theme);
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
                                    <Button
                                        component={Link} // Utilisez le composant Link comme base du bouton
                                        to={`/admin/absences/${row.original.id}/justify`}
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            textDecoration: "none",
                                            border:`1px solid  ${theme.palette.primary.main}`,
                                            color: `${theme.palette.primary.main}`
                                        }}
                                        variant='outlined'
                                    >
                                        <PendingActions />
                                        <Typography variant="span">Justifier</Typography>
                                    </Button>
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
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    },useFilters,useSortBy);
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
                                    <StyledTableRow>
                                        <StyledTableCell></StyledTableCell>
                                        <StyledTableCell>
                                            <Formik
                                                initialValues={{ lessons: '' }}
                                                onSubmit={handleSubmit}
                                            >
                                                {({ values, setFieldValue }) => (
                                                    <Form>
                                                        <Field
                                                            as={TextField}
                                                            select
                                                            name="lesson"
                                                            label="Filtrez par leçon"
                                                            variant="outlined"
                                                            value={values.lesson || ''}
                                                            onChange={(e) => {
                                                                setFieldValue("lesson", e.target.value);
                                                            }}
                                                            fullWidth
                                                            sx={{ height: '45px', '& .MuiInputBase-root ': {height: '45px'}}}
                                                        >
                                                            <MenuItem value=''>Filtrez par leçon</MenuItem>
                                                            {lessonsOptions.map((lesson, key) => (
                                                                <MenuItem key={key} value={lesson}>
                                                                    {lesson}
                                                                </MenuItem>
                                                            ))}
                                                        </Field>
                                                    </Form>
                                                )
                                                }
                                            </Formik>
                                        </StyledTableCell>
                                        <StyledTableCell></StyledTableCell>
                                        <StyledTableCell>
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
                                        </StyledTableCell>
                                        <StyledTableCell></StyledTableCell>
                                    </StyledTableRow>
                                    {rows.map((row) => {
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
                <Box sx={{margin:"24px auto"}}>
                    {!isLoading?
                        <Pagination count={2} color="primary"/>:
                        <Skeleton
                            className='skeleto-pagination'
                            animation="wave"
                            variant="rectangular"
                            width={200}
                            height={40}
                        />}
                </Box>
            </Paper>
        </MainCard>
    );
}
