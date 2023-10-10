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
const AbsencesComponent = Loadable(lazy(() => import('../views/absences')))
const ProfilComponent = Loadable(lazy(() => import('../views/profiles')))

//Dynamiques routes
const ReadLessonComponent = Loadable(lazy(() => import('../views/programs/ReadLesson')))
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
        },
        {
          path: 'semester/:semester/lessons/:id', // Use a route parameter :semester
          element: <ReadLessonComponent />
        },

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
    {
      path: 'absences',
      children: [
        {
          path: '',
          element: <AbsencesComponent />
        }
      ]
    },,
    {
      path: 'profil',
      children: [
        {
          path: '',
          element: <ProfilComponent />
        }
      ]
    },
  ]
};

export default AdminRoutes;
