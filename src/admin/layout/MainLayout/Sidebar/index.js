import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import {Box, Chip, Drawer, MenuItem, Stack, TextField, useMediaQuery} from '@mui/material';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';
import { BrowserView, MobileView } from 'react-device-detect';

// project imports
import MenuList from './MenuList';
import LogoSection from '../LogoSection';
import { drawerWidth } from '../../../store/constant';
import * as Yup from "yup";
import {Field, Form, Formik} from "formik";
import React, {useEffect, useState} from "react";

// ==============================|| SIDEBAR DRAWER ||============================== //
const languages = [
    { value: 'fr-FR', label: 'Français' },
    { value: 'en-EN', label: 'Anglais' },
];
const Sidebar = ({ drawerOpen, drawerToggle, window }) => {
    const [initialLanguage, setInitialLanguage] = useState("fr-FR");
    const validationSchema = Yup.object({
        language: Yup.string()
            .required("La langue est requise")
            .notOneOf([""], "La langue ne peut pas être vide"), // Ajoutez cette validation
    });
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const handleSubmit = (values) => {
        console.log(values)
    };
    useEffect(() => {
        // Appeler handleSubmit lorsque la langue change
        handleSubmit({ language: initialLanguage });
    }, [initialLanguage]);
    const drawer = (
    <>
      <BrowserView>
          <Box className='header-aside' sx={{position:'fixed',boxShadow:"0 1px 5px lightgray", width:drawerWidth, zIndex:'10', backgroundColor:'white'}}>
              <Box sx={{ display: { xs: 'block', md: 'block' } }}>
                  <Box sx={{ display: 'flex', p: 2, mx: 'auto' }}>
                      <LogoSection />
                  </Box>
              </Box>
              <Box sx={{p: 2, mx: 'auto', width:'100%' }}>
                  <Formik
                      initialValues={{ language: initialLanguage }}
                      validationSchema={validationSchema}
                      onSubmit={handleSubmit}
                  >
                      {({ values, setFieldValue }) => (
                          <Form>
                              <Field
                                  as={TextField}
                                  select
                                  name="language"
                                  label="Sélectionnez votre langue:"
                                  variant="outlined"
                                  value={values.language || ''}
                                  onChange={(e) => {
                                      setInitialLanguage(e.target.value);
                                      setFieldValue("language", e.target.value);
                                  }}
                                  fullWidth
                              >
                                  <MenuItem value=''>Sélectionnez votre langue</MenuItem>
                                  {languages.map((language, key) => (
                                      <MenuItem key={key} value={language.value}>
                                          {language.label}
                                      </MenuItem>
                                  ))}
                              </Field>
                          </Form>
                      )
                      }
                  </Formik>
              </Box>
          </Box>
        <PerfectScrollbar
          component="div"
          style={{
            height: !matchUpMd ? 'calc(100vh - 56px)' : 'calc(100vh - 215px)',
            paddingLeft: '16px',
            paddingRight: '16px',
            transform:"translateY(215px)"
          }}
        >
          <MenuList />
          <Stack direction="row" justifyContent="center" sx={{ mb: 2 }}>
            <Chip label={process.env.REACT_APP_VERSION} disabled chipcolor="secondary" size="small" sx={{ cursor: 'pointer' }} />
          </Stack>
        </PerfectScrollbar>
      </BrowserView>
      <MobileView>
        <Box sx={{ px: 2 }}>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <Box sx={{ display: 'flex', p: 2, mx: 'auto' }}>
                    <LogoSection />
                </Box>
            </Box>
          <MenuList />
          <Stack direction="row" justifyContent="center" sx={{ mb: 2 }}>
            <Chip label={process.env.REACT_APP_VERSION} disabled chipcolor="secondary" size="small" sx={{ cursor: 'pointer' }} />
          </Stack>
        </Box>
      </MobileView>
    </>
  );

  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : 'auto' }} aria-label="mailbox folders">
      <Drawer
        container={container}
        variant={matchUpMd ? 'persistent' : 'temporary'}
        anchor="left"
        open={drawerOpen}
        onClose={drawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            borderRight: 'none',
            [theme.breakpoints.up('md')]: {
              top: '0px'
            }
          }
        }}
        ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

Sidebar.propTypes = {
  drawerOpen: PropTypes.bool,
  drawerToggle: PropTypes.func,
  window: PropTypes.object
};

export default Sidebar;
