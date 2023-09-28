import { lazy } from 'react';

// project imports
import Loadable from '../ui-component/Loadable';
// import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const AuthLogin = Loadable(lazy(() => import('../../web/pages/auth/Login')));
const AuthRegister = Loadable(lazy(() => import('../../web/pages/auth/Registration')));
const AuthResetPassword = Loadable(lazy(() => import('../../web/pages/auth/ResetPassword')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/auth',
  children: [
    {
      path: 'login',
      element: <AuthLogin />
    },
    {
      path: 'Registration',
      element: <AuthRegister />
    },
    {
      path: 'forgot-password',
      element: <AuthResetPassword />
    }
  ]
};

export default AuthenticationRoutes;