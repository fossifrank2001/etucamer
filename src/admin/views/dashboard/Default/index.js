import { useEffect, useState } from 'react';

// material-ui
import {Grid, Paper} from '@mui/material';

// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalLessonsPerSemester from './TotalOrderLineChartCard';
import TotalActivities from './TotalIncomeDarkCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from '../../../store/constant';
import {awaitSync} from "../../../utils";
import * as PropTypes from "prop-types";
import ProgressingLessonTable from "./ProgressingLessonTable";
import {progressionLessons} from "../../../utils/password-strength";

// ==============================|| DEFAULT DASHBOARD ||============================== //
const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    awaitSync(2000).then(() => {
      setLoading(false); // Une fois l'attente terminée, définir isLoading sur false
    });
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalLessonsPerSemester isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalActivities isLoading={isLoading} />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeLightCard isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={9} md={12} sm={12} xs={12}>
            <Paper elevation={0} sx={{borderRadius:'15px', paddingY:2}}>
              <ProgressingLessonTable isLoding={isLoading} data={progressionLessons} />
            </Paper>
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            calender
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
