import { lazy } from 'react';

// project imports
import Loadable from '../ui-component/Loadable';
import WebLayout from "../../web/layouts/WebLayout";
import {Home} from "@mui/icons-material";

// login option 3 routing
const HomePage = Loadable(lazy(() => import('../../web/pages/Home')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const WebRoutes = {
    path: '/',
    element: <WebLayout />,
    children: [
        {
            path: '/',
            element: <HomePage/>
        },
    ]
};

export default WebRoutes;