// assets
import { IconClock } from '@tabler/icons';

// constant
const icons = { IconClock };
// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const absences = {
  id: 'absences',
  type: 'group',
  children: [
    {
      id: 'absences',
      title: 'Abscences',
      type: 'item',
      url: '/admin/absences',
      icon: icons.IconClock,
      breadcrumbs: false
    }
  ]
};

export default absences;
