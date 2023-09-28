import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';

// project imports
import MainCard from '../../ui-component/cards/MainCard';
import SecondaryAction from '../../ui-component/cards/CardSecondaryAction';

// assets
import LinkIcon from '@mui/icons-material/Link';


// =============================|| TABLER ICONS ||============================= //

const Activities = () => (
    <MainCard title="Tabler Icons" secondary={<SecondaryAction icon={<LinkIcon fontSize="small" />} link="https://tablericons.com/" />}>
        <Card sx={{ overflow: 'hidden' }}>
            SECTION ACTIVITES
        </Card>
    </MainCard>
);

export default Activities;
