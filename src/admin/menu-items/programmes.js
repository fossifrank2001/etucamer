// assets
import { IconScript } from '@tabler/icons';

// constant
const icons = { IconScript };
// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const program = {
    id: 'program',
    type: 'group',
    children: [
        {
            id: 'programs',
            title: 'Programmes',
            type: 'collapse',
            icon: icons.IconScript,
            children: [
                {
                    id: 'cour',
                    title: 'Cours',
                    type: 'item',
                    url: '/admin/programs/lessons',
                    target: false
                },
                {
                    id: 'cc',
                    title: 'Controle continu',
                    type: 'item',
                    url: '/admin/programs/cc',
                    target: false
                },
                {
                    id: 'exams',
                    title: 'Examens',
                    type: 'item',
                    url: '/admin/programs/exams',
                    target: false
                }
            ]
        }
    ]
};

export default program;
