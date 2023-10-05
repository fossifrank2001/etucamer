import { lazy } from 'react';

// project imports
import Loadable from '../ui-component/Loadable';
import WebLayout from "../../web/layouts/WebLayout";
import {Home} from "@mui/icons-material";

const NotFoundPage = Loadable(lazy(() => import('../../web/components/utils/NotFound')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const NotFoundRoutes = {
    path: '*',
    element: <NotFoundPage /> // Remplacez NotFound par le composant de votre page 404
};

export default NotFoundRoutes;