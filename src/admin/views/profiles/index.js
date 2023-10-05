import React, {useRef} from 'react'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Avatar,
    Box,
    Chip,
    Grid,
    Paper,
    Typography
} from "@mui/material";
import SecondaryAction from "../../ui-component/cards/CardSecondaryAction";
import LinkIcon from "@mui/icons-material/Link";
import {gridSpacing} from "../../store/constant";
import MainCard from "../../ui-component/cards/MainCard";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {breadcrumbsProfil} from "../../utils/breadcrum";
import {CustomizeBreadcrumbs} from "../../utils";
import PasswordResetForm from "./PasswordResetForm";
import User1 from "../../assets/images/users/user-round.svg";
import {useTheme} from "@mui/material/styles";
import {ExpandMore} from "@mui/icons-material";


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ px: {xs:0, md:3}, py: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function InfoField({ label, text }) {
    return (
        <Box sx={{marginBottom:'16px'}}>
            <Typography variant="subtitle1" component="strong">
                {label}:
            </Typography>
            <Typography variant="body1">{text}</Typography>
        </Box>
    );
}

const  Profil = () => {
    const anchorRef = useRef(null);
    const theme = useTheme()
    const [value, setValue] = React.useState(0);
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeAcordion = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <MainCard
            title={<CustomizeBreadcrumbs paths={breadcrumbsProfil} />}
            secondary={<SecondaryAction icon={<LinkIcon fontSize="small" />} />}
            className='absences'
        >
            <Grid
                sx={{ display: "flex", justifyContent: "space-between" }}
                container
                spacing={gridSpacing}
                mb={3}
            >
                <Grid item xs={12} md={4}>
                    <Paper elevation={{xs:0, md:2}} sx={{borderRadius:"24px", p:{xs: 0, md: 2}}}>
                        <Avatar
                            src={User1}
                            sx={{
                                ...theme.typography.mediumAvatar,
                                margin: '8px auto!important',
                                cursor: 'pointer',
                                width: '200px',
                                borderRadius:'50%',
                                height:'200px'
                            }}
                            ref={anchorRef}
                            aria-haspopup="true"
                            color="inherit"
                        />
                        <Box sx={{justifyContent:'center', display:'flex', alignItems:"center", gap:'4px'}}>
                            <Chip
                                size="small"
                                label="Compte"
                                sx={{
                                    color: theme.palette.background.default,
                                    bgcolor: theme.palette.primary.dark
                                }}
                            />
                            <Typography variant='body2'>{'  '} Etudiant</Typography>
                        </Box>
                        <Box sx={{py:2}}>
                            <Accordion expanded={expanded === 'infos personnel'} onChange={handleChangeAcordion('infos personnel')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMore />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography sx={{ width: '100%', flexShrink: 0 }}>
                                        INFOS PERSONNEL
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <InfoField label="Nom" text="JOHN DOE" />
                                        <InfoField label="PreNom" text="Alphonse Tiny" />
                                        <InfoField label="Date et lieu de naissance" text='22/01/2003  à Douala' />
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'info universitaire'} onChange={handleChangeAcordion('info universitaire')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMore />}
                                    aria-controls="panel3bh-content"
                                    id="panel3bh-header"
                                >
                                    <Typography sx={{ width: '100%', flexShrink: 0 }}>
                                        INFO  UNIVERSITAIRE
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <InfoField label="Matricule" text="12473" />
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Paper elevation={{xs:0, md:2}} sx={{borderRadius:"24px", p:{xs: 0, md: 2}}}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value}
                                  onChange={handleChange}
                                  variant="scrollable"
                                  scrollButtons="auto"
                                  aria-label="scrollable auto tabs example">
                                <Tab label="Information du profile" {...a11yProps(0)} />
                                <Tab label="Mot de passe" {...a11yProps(1)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            Item One
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <PasswordResetForm />
                        </CustomTabPanel>
                    </Paper>
                </Grid>
            </Grid>
        </MainCard>
    )
}
export default  Profil;