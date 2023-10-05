import {
    Box,
    Breadcrumbs,
    CircularProgress,
    IconButton,
    MenuItem,
    Select,
    Snackbar,
    TextField,
    Typography
} from "@mui/material";
import React from "react";
import {FirstPage, LastPage, NavigateBefore, NavigateNext} from "@mui/icons-material";
import {Alert} from "@mui/lab";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {SNACKBAR_OPEN} from "../store/actions";
import { Link } from "react-router-dom";
export const getChipStyles = (theme) => {
    const chipSX = {
        height: 24,
        padding: '0 6px'
    };

    const chipErrorSX = {
        ...chipSX,
        color: theme.palette.error.dark,
        backgroundColor: theme.palette.error.light,
        marginRight: '5px'
    };

    const chipWarningSX = {
        ...chipSX,
        color: theme.palette.warning.dark,
        backgroundColor: theme.palette.warning.light
    };

    const chipSuccessSX = {
        ...chipSX,
        color: theme.palette.success.dark,
        backgroundColor: theme.palette.success.light,
        height: 28
    };

    return { chipSX, chipErrorSX, chipWarningSX, chipSuccessSX };
};
// Fonction pour simuler une attente asynchrone de 5 secondes
export async function awaitSync(ms = 5000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}
export function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex', margin:'0 auto' }}>
            <CircularProgress color={`${props.value>=50?'success':'warning'}`} variant="determinate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    color="text.secondary"
                >{props.value} %</Typography>
            </Box>
        </Box>
    );
}

export const GlobalSearchInputTable = ({ filter, setFilter }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant='span'>Search: </Typography>
            <TextField
                id="outlined-basic"
                placeholder="Search..."
                variant="outlined"
                value={filter || ''}
                onChange={(e) => setFilter(e.target.value)}
                sx={{ marginLeft: '12px', '& input': { height: '10px' } }} // Définir la hauteur du champ d'entrée
            />
        </Box>
    );
};

export const SortableSelectTable = ({ sizes, pageSize, setPageSize }) => {
    const defaultPageSize = sizes.length > 0 ? sizes[0] : '';
    const selectedPageSize = pageSize !== '' ? pageSize : defaultPageSize;
    return (
        <Select
            value={selectedPageSize}
            variant="outlined"
            sx={{ height: '45px', width:{xs:'100%', md:"fit-content"}, '& fieldset': { height: '45px' } }}
            onChange={(e) => setPageSize(Number(e.target.value))}
        >
            {sizes.map((page) => (
                <MenuItem key={page} value={page}>
                    Show {page}
                </MenuItem>
            ))}
        </Select>
    );
};

function FirstPageIcon() {
    return null;
}

export const Pagination = ({
           canPreviousPage,
           previousPage,
           nextPage,
           gotoPage,
           pageCount,
            canNextPage,
       }) => {
    return (
        <Box>
            <IconButton
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
                aria-label="First Page"
            >
                <FirstPage />
            </IconButton>
            <IconButton onClick={previousPage} disabled={!canPreviousPage} aria-label="Previous Page">
                <NavigateBefore/>
            </IconButton>
            <IconButton onClick={nextPage} disabled={!canNextPage} aria-label="Next Page">
                <NavigateNext/>
            </IconButton>
            <IconButton
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
                aria-label="Last Page"
            >
                <LastPage />
            </IconButton>
        </Box>
    );
};

export const CustomizeSnackBar = ({ type, open, message, position }) => {
    const theme = useTheme();
    const dispatch = useDispatch()
    const getPaletteColor = () => {
        switch (type) {
            case "success":
                return theme.palette.success.dark;
            case "info":
                return theme.palette.info.dark;
            case "warning":
                return theme.palette.warning.dark;
            case "error":
                return theme.palette.error.dark;
            default:
                return theme.palette.primary.dark;
        }
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch({type: SNACKBAR_OPEN, snackbarIsOpened: false});
    };
    return (
        <Snackbar
            anchorOrigin={position}
            sx={{ borderRadius: "10px" }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
        >
            <Alert
                onClose={handleClose}
                severity={type}
                sx={{
                    width: "100%",
                    backgroundColor: getPaletteColor(),
                    color: "white",
                }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
};
// Définissez les PropTypes pour votre composant
CustomizeSnackBar.propTypes = {
    type: PropTypes.oneOf(["success", "info", "warning", "error"]),
    open: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    position: PropTypes.shape({
        vertical: PropTypes.oneOf(["top", "bottom"]),
        horizontal: PropTypes.oneOf(["left", "center", "right"]),
    }).isRequired,
};

export const CustomizeBreadcrumbs = ({ paths }) => {
    // `paths` prop should be an array of objects, each representing a breadcrumb link
    return (
        <Breadcrumbs aria-label="breadcrumb">
            {paths.map((path, index) => (
                <Box key={index}>
                    {path.link ? (
                        <Link
                            underline="hover"
                            color="inherit"
                            to={path.link}
                            sx={{ display: "flex", alignItems: "center" }}
                        >
                            {path.icon}
                            <Typography variant="span">{path.text}</Typography>
                        </Link>
                    ) : (
                        <Typography
                            sx={{ fontSize: "16px", color: "text.primary" }}
                            key={index}
                        >
                            {path.text}
                        </Typography>
                    )}
                </Box>
            ))}
        </Breadcrumbs>
    );
};

export const lessonsOptions = [
    "Mathematics",
    "Science",
    "History",
    "English",
    "Physics",
    "Chemistry",
    "Biology",
];
export const statusOptions = ["justified", "not-justified"];
export const absences = Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    lessons: lessonsOptions[i],
    hours: Math.floor(Math.random() * 15) + 1,
    status: (i === 2 || i ===6)?statusOptions[1]: statusOptions[0],
}));