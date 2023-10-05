import {HOME_URL} from "../../web/components/utils/utilsFunction";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import config from "../../config";

export const breadcrumbsAbsences = [
    {
        link: HOME_URL,
        icon: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
        text: "Home",
    },
    {
        link: config.defaultPath,
        icon: <DashboardIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
        text: "Dashboard",
    },
    {
        text: "Absences",
    },
];

export const breadcrumbsProfil = [
    {
        link: HOME_URL,
        icon: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
        text: "Home",
    },
    {
        link: config.defaultPath,
        icon: <DashboardIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
        text: "Dashboard",
    },
    {
        text: "Profile",
    },
];

export const breadcrumbsLessons = [
    {
        link: HOME_URL,
        icon: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
        text: "Home",
    },
    {
        link: config.defaultPath,
        icon: <DashboardIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
        text: "Dashboard",
    },
    {
        text: "Cours",
    },
];