// assets
import { IconActivity } from '@tabler/icons';

// constant
const icons = { IconActivity };
// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const activity = {
  id: 'activity',
  type: 'group',
  children: [
    {
      id: 'activity',
      title: 'Activitées',
      type: 'item',
      url: '/admin/activities',
      icon: icons.IconActivity,
      breadcrumbs: false
    }
  ]
};

export default activity;
