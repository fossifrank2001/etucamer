// assets
import { IconAlertTriangle} from '@tabler/icons';

// constant
const icons = { IconAlertTriangle };
// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const warning = {
    id: 'warning',
    type: 'group',
    children: [
        {
            id: 'warning',
            title: 'Avertissements',
            type: 'item',
            url: '/admin/warning',
            icon: icons.IconAlertTriangle,
            breadcrumbs: false
        }
    ]
};

export default warning;
