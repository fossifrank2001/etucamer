import {useRoutes} from 'react-router-dom';

// routes
import AdminRoutes from './AdminRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import WebRoutes from "./WebRoutes";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([
    AdminRoutes,
    AuthenticationRoutes,
    WebRoutes
  ]);
}
