import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button, Container,
  Divider,
  Drawer,
  Fab,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  Slider,
  Tooltip,
  Typography
} from "@mui/material";
import { IconSettings } from '@tabler/icons';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import SubCard from '../../ui-component/cards/SubCard';
import AnimateButton from '../../ui-component/extended/AnimateButton';
import { gridSpacing } from '../../store/constant';
import { Info } from "@mui/icons-material";


// ==============================|| LIVE CUSTOMIZATION ||============================== //

const Customization = () => {
  const theme = useTheme();
  const isHourForLesson=false
  // drawer on/off
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      {/* toggle button */}
      <Tooltip title="Live Customize">
        <Fab
          component="div"
          onClick={handleToggle}
          size="medium"
          variant="circular"
          color="secondary"
          sx={{
            borderRadius: 0,
            borderTopLeftRadius: '50%',
            borderBottomLeftRadius: '50%',
            borderTopRightRadius: '50%',
            borderBottomRightRadius: '4px',
            top: '25%',
            position: 'fixed',
            right: 10,
            zIndex: theme.zIndex.speedDial
          }}
        >
          <AnimateButton type="rotate">
            <IconButton color="inherit" size="large" disableRipple>
              <Info />
            </IconButton>
          </AnimateButton>
        </Fab>
      </Tooltip>

      <Drawer
        anchor="right"
        onClose={handleToggle}
        open={open}
        PaperProps={{
          sx: {
            width: 280
          }
        }}
      >
        <PerfectScrollbar style={{height:"100%" }} component="div">
          <Grid container spacing={gridSpacing} sx={{ pt: 3, px: 1, height:"100%" }}>
            <Grid item xs={12}>
              <SubCard title="Cours d'aujourd'hui!">
                <Grid item xs={12} container spacing={2} alignItems="center" >
                  <Grid item xs={12} mb={2}>
                    <Typography variant="h5" color="secondary">Analyse I</Typography>
                    <Typography variant="body1" textAlign="end">8h15 - 11h40</Typography>
                    <span style={{fontWeight:"lighter", opacity:'.4'}}>Pause(30min)</span>
                  </Grid>
                  <Divider orientation="horizontal" />
                  <Grid item xs={12} mb={2}>
                    <Typography variant="h5" color="secondary">Gestion acoustique</Typography>
                    <Typography variant="body1" textAlign="end">12h10 - 13h30</Typography>
                    <span style={{fontWeight:"lighter", opacity:'.4'}}>Pause(1h30min)</span>
                  </Grid>
                  <Divider orientation="horizontal" />
                  <Grid item xs={12} mb={2}>
                    <Typography variant="h5" color="secondary">Gestion acoustique</Typography>
                    <Typography variant="body1" textAlign="end">15h00 - 16h45</Typography>
                  </Grid>
                  <Divider orientation="horizontal" />
                </Grid>
              </SubCard>
            </Grid>
            <Grid item xs={12} mt='auto'>
              <Container sx={{borderRadius:"16px", p:2, bgcolor:`${theme.palette.secondary.dark}`}}>
                <Box py={2}>
                  <Typography variant='h5' textAlign='center' color='white'>Aucun cour dispense actuellement.</Typography>
                </Box>
                <Button
                  disabled={!isHourForLesson}
                  fullWidth
                  variant='outlined'
                  sx={{
                    color:`${theme.palette.primary.dark}`,
                    bgcolor:`var(--standard)!important`,
                    '&:hover':{
                      bgcolor:`var(--standard)!important`,
                      color:`${theme.palette.primary.dark}`,
                    }
                  }}>Participer au cour</Button>
              </Container>
            </Grid>
          </Grid>
        </PerfectScrollbar>
      </Drawer>
    </>
  );
};

export default Customization;
