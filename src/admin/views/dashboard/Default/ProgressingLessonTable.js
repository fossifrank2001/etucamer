import * as PropTypes from "prop-types";
import { useTheme, styled } from "@mui/material/styles";
import MainCard from "../../../ui-component/cards/MainCard";
import React, { useMemo } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tooltip,
    Typography,
    CircularProgress,
    Box,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFilters, useSortBy, useTable, useGlobalFilter,usePagination } from "react-table";
import { IconEye } from "@tabler/icons";
import {
    CircularProgressWithLabel,
    getChipStyles,
    GlobalSearchInputTable,
    Pagination,
    SortableSelectTable
} from "../../../utils";
import Skeleton from "@mui/material/Skeleton";

const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    color: "#fff",
    overflow: "hidden",
    position: "relative",
    "&>div": {
        position: "relative",
        zIndex: 5,
    },
}));

export const StyledTable = styled(Table)`
  width: 100%;
  border-collapse: collapse;
  min-width: 650px;
`;

export const StyledHeaderCell = styled(TableCell)`
  color: #7c7a7a;
  font-weight: bold;
  text-align: center;
`;

export const StyledTableRow = styled(TableRow)`
  &:hover {
    background-color: lightgray;
  }
`;

export const StyledTableCell = styled(TableCell)`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: center;
`;

export const TableContainer = styled("div")`
  width: 100%;
  overflow-x: auto;
  margin: 0 auto;
`;

export default function ProgressingLessonTable({ data, isLoading }) {
    const theme = useTheme();
    const navigate = useNavigate();
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

    const datas = useMemo(() => data || [], []);
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
        <>
            <TableContainer
                sx={{ width: { xs: '100%', md: '98%' }, margin: '0 auto' }}
            >
                <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                    <SortableSelectTable sizes={[10,15,20]} pageSize={pageSize} setPageSize={setPageSize} />
                    <GlobalSearchInputTable filter={globalFilter} setFilter={setGlobalFilter} />
                </Box>
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
            </TableContainer>
        </>
    );
}

ProgressingLessonTable.propTypes = {
    data: PropTypes.array,
    isLoading: PropTypes.bool,
};
