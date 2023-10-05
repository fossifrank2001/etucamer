import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import {Avatar, Box, Grid, Menu, MenuItem, Tooltip, Typography} from '@mui/material';

// project imports
import MainCard from '../../../ui-component/cards/MainCard';
import SkeletonEarningCard from '../../../ui-component/cards/Skeleton/EarningCard';

// assets
import ClockIcon from '../../../assets/images/icons/earning.svg';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {ABSENCE_URL} from "../../../../web/components/utils/utilsFunction";
import {useNavigate} from "react-router-dom";

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  color: '#fff',
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: theme.palette.secondary[800],
    borderRadius: '50%',
    top: -85,
    right: -95,
    [theme.breakpoints.down('sm')]: {
      top: -105,
      right: -140
    }
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: theme.palette.secondary[800],
    borderRadius: '50%',
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down('sm')]: {
      top: -155,
      right: -70
    }
  }
}));

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const EarningCard = ({ isLoading }) => {
  const theme = useTheme();
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event, redirectPath) => {
    setAnchorEl(event.currentTarget);
    handleClose(redirectPath)
  };

  /**
   *
   * @param {String} redirectPath
   */
  const handleClose = (redirectPath='') => {
    setAnchorEl(null);
    if(redirectPath !== ''){
      navigate(redirectPath)
    }
  };

  return (
    <>
      {isLoading ? (
        <SkeletonEarningCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Avatar
                      variant="rounded"
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.largeAvatar,
                        backgroundColor: theme.palette.secondary[800],
                        mt: 1
                      }}
                    >
                      <img src={ClockIcon} alt="Notification" />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Tooltip sx={{width: '100%'}} title='Plus de détails'>
                      <Avatar
                          variant="rounded"
                          sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.mediumAvatar,
                            backgroundColor: theme.palette.secondary.dark,
                            color: theme.palette.secondary[200],
                            zIndex: 1,
                            width: '100%'
                          }}
                          aria-controls="menu-earning-card"
                          aria-haspopup="true"
                          onClick={(e) => handleClick(e, ABSENCE_URL)}
                      >
                        <Box sx={{display:'flex', p:2, alignItems:'center'}}>
                          <Typography sx={{ms:1, fontSize:"12px"}} variant='span'>Voir plus</Typography>
                        </Box>
                      </Avatar>
                    </Tooltip>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container alignItems="center">
                  <Grid item>
                    <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>50 heures</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 1.25 }}>
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: theme.palette.secondary[200]
                  }}
                >
                  Total Heures d'absences.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

EarningCard.propTypes = {
  isLoading: PropTypes.bool
};

export default EarningCard;
