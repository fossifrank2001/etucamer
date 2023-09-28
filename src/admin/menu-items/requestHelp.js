// assets
import { IconBrandGoogleBigQuery } from '@tabler/icons';

// constant
const icons = { IconBrandGoogleBigQuery };
// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const requestHelp = {
    id: 'requestHelp',
    type: 'group',
    children: [
        {
            id: 'requestHelp',
            title: 'Aide aux requêtes',
            type: 'item',
            url: '/admin/query-help',
            icon: icons.IconBrandGoogleBigQuery,
            breadcrumbs: false
        }
    ]
};

export default requestHelp;
