import React, {useEffect, useState} from 'react'
import {
    Box,
    Typography,
    FormControl,
    MenuItem,
    Select,
    Button,
    List,
    SwipeableDrawer,
    ListItemButton, ListItemIcon, ListItemText, ListItem, Divider, Popover, TextField
} from "@mui/material";
import {ArrowDropDown, Close, Dialpad, KeyboardArrowDown, Mail, Phone, Segment} from "@mui/icons-material";
import '../../../assets/css/web/navbar.css'
import logo from "../../../assets/images/logo1.png"
import {Link} from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';
import {LOGIN_URL} from "../../utils/utilsFunction";
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import AnimateButton from "../../../../admin/ui-component/extended/AnimateButton";


const menuOptions = [
    { value: 'fr-FR', label: 'FR' },
    { value: 'en-EN', label: 'EN' },
];
export default function NavBar() {
    const navigate = useNavigate(); // Obtenir l'objet history de React Router si vous l'utilisez
    const [value, setValue] = React.useState(0);
    const [selectedValue, setSelectedValue] = useState('fr-FR');
    const [open, setOpen] = useState(false);
    const [selectedContact, setSelectedContact] = useState('');
    const [initialLanguage, setInitialLanguage] = useState("fr-FR");
    const validationSchema = Yup.object({
        language: Yup.string()
            .required("La langue est requise")
            .notOneOf([""], "La langue ne peut pas être vide"), // Ajoutez cette validation
    });
    const handleContactChange = (event) => {
        setSelectedContact(event.target.value);
    };

    const contacts = [
        { label: 'contact@etucaner.net', value: 'contact@etucaner.net' },
        { label: '655-178-302', value: '655-178-302' },
    ];
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const handleClick = ()=>{
        navigate(LOGIN_URL)
    }
    const handleChangeSection = (event, newValue) => {
        setValue(newValue);
        // Vous pouvez mettre à jour l'URL ici
        switch (newValue) {
            case 0:
                navigate('#A-propos-de-nous');
                break;
            case 1:
                navigate('#nos-services');
                break;
            case 2:
                navigate('#temoignages');
                break;
            case 3:
                navigate('#nos-partenaires');
                break;
            case 4:
                navigate('#nos-contacts');
                break;
            default:
                break;
        }
    };
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: '250px' }}
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
            className='over-lap'
        >
            <Button className='btn-close' onClick={toggleDrawer(anchor, false)} sx={{ margin: '16px' }}>
                <Close />
            </Button>
            <List>
                {['A propos de nous', 'Nos services', 'Temoignages', 'Nos partenaires', 'Nos contacts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemText><Link to='' className={`link ${index ===0 ?'active':''}`} onClick={toggleDrawer(anchor, false)}>{text}</Link></ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
                <Button variant="standard" onClick={handleClick} sx={{textTransform:"initial"}} className='login-btn'>Connexion</Button>

            </List>
        </Box>
    );
    const handleSubmit = (values) => {
        console.log(values)
    };
    useEffect(() => {
        // Appeler handleSubmit lorsque la langue change
        handleSubmit({ language: initialLanguage });
    }, [initialLanguage]);
    return (
        <Box component='navbar'>
            <Box component='div' className='first_bloc_nav'>
                <Box className='wrapper-first-nav'>
                    <Box className='flex-one'>
                        <PopupState className='popper-contact' variant="popover" popupId="demo-popup-popover">
                            {(popupState) => (
                                <div>
                                    <Dialpad className='dial-pad'  {...bindTrigger(popupState)}/>
                                    <Popover
                                        {...bindPopover(popupState)}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'center',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'center',
                                        }}
                                    >
                                        <Box className='sub-flex-one'>
                                            <Mail className='contacts-icon'/>
                                            <Typography component='span' className='contacts' style={{marginLeft:"18px"}}>contact@etucaner.net</Typography>
                                        </Box>
                                        <Divider />
                                        <Box className='sub-flex-two'>
                                            <Phone className='contacts-icon'/>
                                            <Typography component="span" className='contacts' style={{marginLeft:"18px"}}>655-178-302</Typography>
                                        </Box>
                                    </Popover>
                                </div>
                            )}
                        </PopupState>
                        <Box className='sub-flex_ sub-flex-one'>
                            <Mail className='contacts-icon'/>
                            <Typography component='span' className='contacts' style={{marginLeft:"18px"}}>contact@etucaner.net</Typography>
                        </Box>
                        <Box className='sub-flex_ sub-flex-two'>
                            <Phone className='contacts-icon'/>
                            <Typography component="span" className='contacts' style={{marginLeft:"18px"}}>655-178-302</Typography>
                        </Box>
                    </Box>
                    <Box className='flex-two'>
                        <Box className='sub-flex'>
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
                                            variant="outlined"
                                            value={values.language || ''}
                                            onChange={(e) => {
                                                setInitialLanguage(e.target.value);
                                                setFieldValue("language", e.target.value);
                                            }}
                                            fullWidth
                                        >
                                            {menuOptions.map((language, key) => (
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
                </Box>
            </Box>
            <Box component='div' className='second_bloc_nav'>
                <Box className='wrapper-second-nav'>
                    <Box className="logo">
                        <img src={logo} alt='logo-etucamer' style={{objectFit:'cover', objectPosition:"center", width:"auto", height:"100%"}}/>
                    </Box>
                    <Box className='links'>
                        <Tabs
                            value={value}
                            onChange={handleChangeSection}
                            variant="scrollable"
                            scrollButtons="auto"
                        >
                            <Tab label="A propos de nous" className='link active'></Tab>
                            <Tab label="Nos services" className='link' />
                            <Tab label="Temoignages" className='link' />
                            <Tab label="Nos partenaires" className='link' />
                            <Tab label="Nos contacts" className='link' />
                        </Tabs>
                        <AnimateButton>
                            <Button variant="standard" onClick={handleClick} sx={{textTransform:"initial"}} className='login-btn'>Connexion</Button>
                        </AnimateButton>
                    </Box>
                    <Box className='links-burger'>
                        {['left'].map((anchor) => (
                            <React.Fragment key={anchor}>
                                <Button onClick={toggleDrawer(anchor, true)}><Segment /></Button>
                                <SwipeableDrawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                    onOpen={toggleDrawer(anchor, true)}
                                >
                                    {list(anchor)}
                                </SwipeableDrawer>
                            </React.Fragment>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
