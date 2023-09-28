import { lazy } from 'react';

// project imports
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('../views/dashboard/Default')));
const ActivitiesComponent = Loadable(lazy(() => import('../views/actualities')));
const LessonsComponent = Loadable(lazy(() => import('../views/programs/Lessons')));
const CcComponent = Loadable(lazy(() => import('../views/programs/ContinuousMonitoring')));
const ExamsComponent = Loadable(lazy(() => import('../views/programs/Exams')));

// ==============================|| ADMIN ROUTING ||============================== //
const AdminRoutes = {
  path: '/admin',
  element: <MainLayout />,
  children: [
    {
      path: '/admin',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: '',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'programs',
      children: [
        {
          path: 'lessons',
          element: <LessonsComponent />
        }
      ]
    },
    {
      path: 'programs',
      children: [
        {
          path: 'cc',
          element: <CcComponent />
        }
      ]
    },
    {
      path: 'programs',
      children: [
        {
          path: 'exams',
          element: <ExamsComponent />
        }
      ]
    },
    {
      path: 'activities',
      children: [
        {
          path: '',
          element: <ActivitiesComponent />
        }
      ]
    },
  ]
};

export default AdminRoutes;
