import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import {AppBar, Box, CssBaseline, Stack, Toolbar, Typography, useMediaQuery} from '@mui/material';
import Breadcrumbs from '../../ui-component/extended/Breadcrumbs';
import Header from './Header';
import Sidebar from './Sidebar';
import Customization from '../Customization';
import navigation from '../../menu-items';
import { drawerWidth } from '../../store/constant';
import { SET_MENU } from '../../store/actions';
import { IconChevronRight } from '@tabler/icons';
import {useEffect, useState} from "react";
import {CustomizeSnackBar} from "../../utils";

// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  ...theme.typography.mainContent,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
    marginTop:'120px',
  transition: theme.transitions.create(
    'margin',
    open
      ? {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen
        }
      : {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }
  ),
  [theme.breakpoints.up('md')]: {
      marginTop:'120px',
    marginLeft: open ? 0 : -(drawerWidth - 20),
    width: `calc(100% - ${drawerWidth}px)`
  },
  [theme.breakpoints.down('md')]: {
      marginTop:'120px',
    marginLeft: '20px',
    width: `calc(100% - ${drawerWidth}px)`,
    padding: '16px'
  },
  [theme.breakpoints.down('sm')]: {
      marginTop:'175px',
    marginLeft: '10px',
    width: `calc(100% - ${drawerWidth}px)`,
    padding: '16px',
    marginRight: '10px'
  }
}));

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
    useEffect(()=>{
        document.title = 'SnapU | Administrateur'
    }, [])
  const theme = useTheme();
    const {opened, snackbarIsOpened} = useSelector((state) => state.customization);
    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
    const [openSnack, setOpenSnack] = useState(false);
  const leftDrawerOpened = opened
  const dispatch = useDispatch();
  const handleLeftDrawerToggle = () => {
    dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
  };

  return (
    <Box sx={{ display: 'flex' }}>
        <CustomizeSnackBar
            type='success'
            open={snackbarIsOpened}
            message='successfully logged in'
            position={{ vertical: 'top', horizontal: 'right' }}
        />
      <CssBaseline />
      {/* header */}
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.default,
          transition: leftDrawerOpened ? theme.transitions.create('width') : 'none',

        }}
      >
          <Toolbar sx={{
              marginLeft: leftDrawerOpened ? `${drawerWidth}px` : '0px',
              transition: theme.transitions.create(
                  'margin',
                  leftDrawerOpened
                      ? {
                          easing: theme.transitions.easing.easeOut,
                          duration: theme.transitions.duration.enteringScreen
                      }
                      : {
                          easing: theme.transitions.easing.sharp,
                          duration: theme.transitions.duration.leavingScreen
                      }
              ),
              [theme.breakpoints.down('md')]: {
                  marginLeft: '20px',
                  width: `calc(100% - ${20}px)`,
                  padding: '16px 16px 16px 0'
              },
              [theme.breakpoints.down('sm')]: {
                  marginLeft: '10',
                  width: `calc(100% - ${20}px)`,
                  padding: '16px 20px 16px 0',
                  marginRight: '10px'
              }
          }}>
              <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
          </Toolbar>
          <Box
              sx={{
                  marginLeft: leftDrawerOpened ? `${drawerWidth}px` : '0px',
                  transition: theme.transitions.create(
                      'margin',
                      leftDrawerOpened
                          ? {
                              easing: theme.transitions.easing.easeOut,
                              duration: theme.transitions.duration.enteringScreen
                          }
                          : {
                              easing: theme.transitions.easing.sharp,
                              duration: theme.transitions.duration.leavingScreen
                          }
                  ),
                  [theme.breakpoints.down('md')]: {
                      marginLeft: '0px',
                      width: `calc(100% - ${0}px)`,
                      padding: '0 16px 0px 0'
                  },
                  [theme.breakpoints.down('sm')]: {
                      marginLeft: '0',
                      width: `calc(100% - ${0}px)`,
                      padding: '0 20px 0px 0',
                      marginRight: '0px'
                  }
              }}
          >
              <Stack direction={{xs:'column', sm:'row', md:"row"}} sx={{justifyContent:'space-between', display:'flex', padding:{xs:"0 12px", md:"0 24px"}}} >
                  <Typography sx={{lineHeight:'40px'}} variant='div'>
                      <span>Id: <strong style={{color:"var(--primary)"}}>12473</strong></span>
                      <span> ➡️ Classe: <strong style={{color:"var(--primary)"}}>SECO 1</strong></span>
                  </Typography>
                  <Typography sx={{lineHeight:'40px'}} variant='div'>Bienvenue <strong style={{color:"var(--primary)"}}>JOHN DOE Alphonse Tiny</strong></Typography>
              </Stack>
          </Box>
      </AppBar>

      {/* drawer */}
      <Sidebar drawerOpen={!matchDownMd ? leftDrawerOpened : !leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />

      {/* main content */}
      <Main theme={theme} open={leftDrawerOpened}>
        {/* breadcrumb */}
        <Breadcrumbs separator={IconChevronRight} navigation={navigation} icon title rightAlign />
        <Outlet />
      </Main>
      <Customization />
    </Box>
  );
};

export default MainLayout;
