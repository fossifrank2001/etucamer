// assets
import { IconBroadcast} from '@tabler/icons';

// constant
const icons = { IconBroadcast };
// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const liveLessons = {
    id: 'liveLessons',
    type: 'group',
    children: [
        {
            id: 'liveLessons',
            title: 'Cours en direct',
            type: 'item',
            url: '/admin/live-lessons',
            icon: icons.IconBroadcast,
            breadcrumbs: false
        }
    ]
};

export default liveLessons;
