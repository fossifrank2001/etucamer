import React, {useEffect, useRef, useState} from 'react'
import {
    Box,
    Button, Chip, Divider,
    Grid,
    Paper,Stack,
    Step,
    StepLabel,
    Stepper, Tooltip,
    Typography
} from "@mui/material";
import * as Yup from "yup";
import {Field, Form, Formik} from "formik";
import InputField from "../../../components/utils/InputField";
import {
    diplomes,
    niveaux,
    replaceSpacesWithUnderscores,
    StepOne,
    StepTwo, trainingType,
    universites
} from "../../../components/utils/function";
import '../../../assets/css/web/registration.css'
import InputSelect from "../../../components/utils/InputSelect";
import {Alert, AlertTitle} from "@mui/lab";
import {Link, useNavigate} from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import {Navigation } from 'swiper/modules';
import {ChevronLeft, FileCopy, HelpCenter, Warning} from "@mui/icons-material";
import InputCheckBox from "../../../components/utils/InputCheckBox";
import {HOME_URL, LOGIN_URL} from "../../../components/utils/utilsFunction";
import logo from "../../../assets/images/logo1.png";

export default function Registration() {
    const navigate = useNavigate()
    useEffect(()=>{
        document.title = 'ETUCAMER | Registration'
        setDataUniv(universites)
    }, [])
    const [isClick, setIsClick]= useState(false);
    const swiperRef = useRef(null);
    const [dataUniv, setDataUniv] = useState([]);
    const [selectedUniversity, setSelectedUniversity] =useState({});
    const [selectedInstitute, setSelectedInstitute] =useState({});
    const [currentStep, setCurrentStep]= useState(0)
    const [isNew, setIsNew] = useState(true);
    const initialValues = {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        cni_number:'',
        matricule:'',
        training:'',
        level:'',
        field:'',
        diplome:'',
        birth_day:null,
        birth_place:'',
    }
    const [data, setData] = useState(initialValues)
    const validationOneSchema = Yup.object({
        first_name: Yup.string()
            .matches(/^[a-zA-Z\s]+$/, 'Nom invalide')
            .min(3, 'Le nom doit contenir au moins trois(03) caractères')
            .required('Le nom est requis'),
        last_name: Yup.string()
            .matches(/^[a-zA-Z\s]+$/, 'Prénom invalide')
            .min(3, 'Le prénom doit contenir au moins trois(03) caractères')
            .required('Le prénom est requis'),
        email: Yup.string().email("Adresse email invalide").required("L'email est requis"),
        phone: Yup.string()
            .matches(/^[0-9]+$/, 'Numéro de téléphone invalide')
            .max(9, 'Doit avoir 9 chiffres')
            .required('Numéro de téléphone requis'),
        cni_number: Yup.string()
            .matches(/^[0-9\s]+$/, 'Numéro de CNI invalide')
            .max(8, 'Doit contenir 8 caractères')
            .required('Le numéro de la CNI est requis'),
        birth_day: Yup.date()
            .required('La date de naissance est requis'),
        birth_place: Yup.string()
            .required('Le lieu de naissance est requis'),
    });
    const validationTwoSchema = Yup.object({
        matricule: Yup.string().required('le matricule est requis'),
        field: Yup.string().required('La filliere est requis'),
        level: Yup.string().required('Le niveau d\'admission est requis'),
        diplome: Yup.string().required('Veillez choisir le diplome d\'admission'),
        training: Yup.string().required('Veillez choisir le type de formation'),
    });

    //Handle Popper functionnalities
    const [open, setOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const [placement, setPlacement] = useState('');

    //Toggle content's popper
    const handleOpenPopper = (event, placement) => {
        setAnchorEl(event.currentTarget);
        setOpen(state => !state);
        setPlacement(placement);
    }
    const goPrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };
    const goNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };
    const handleSwiper = (swiper) => {
        swiperRef.current = swiper;
    };
    const handleSelectedUniversities = (id) =>{
        goNext()
        const selectedUniv = dataUniv.find(university => (university.id === id))
        setSelectedUniversity(prev => ({...prev, ...selectedUniv}))
    }
    const handleSelectedInstitute = (id) =>{
        goNext()
        const selectedInst = selectedUniversity?.sousTutelle.find(institute => (institute.id === id))
        setSelectedInstitute(prev => ({...prev, ...selectedInst}))
    }
    //Handle step to go next or back
    const handleNextStep = (newData, final = false)=>{
        setData(prev => ({...prev, ...newData}))
        if(final){
            console.log(data)
            return
        }
        setCurrentStep(prev => prev + 1)
    }
    const handlePrevStep = (newData)=>{
        setData(prev => ({...prev, ...newData}))
        setCurrentStep(prev => prev - 1)
    }
    const steps = [
        <StepOne
            next={handleNextStep}
            handleOpenPopper={handleOpenPopper}
            validationOneSchema={validationOneSchema}
            data={data}
            open={open}
            anchorEl={anchorEl}
            placement={placement}
        />,
        <StepTwo
            next={handleNextStep}
            prev={handlePrevStep}
            handleOpenPopper={handleOpenPopper}
            validationTwoSchema={validationTwoSchema}
            data={data}
            datas={selectedInstitute?.field || []}
            isNew={isNew}
            diplomes={diplomes}
            levels={niveaux}
            trainings={trainingType}
        />
    ]
    const handleFormSubmit = (values, { resetForm }) => {
        console.log(values);
        resetForm();
    };
    return (
        <Box className='registration'>
            <Grid container className='wrapper-registration'>
                <Box width='100%'>
                    <Box className='register-logo-mobile' width="100%" display='flex' justifyContent="center" onClick={()=> navigate(HOME_URL)} style={{cursor:"pointer"}}>
                        <img style={{height:"100px", objectFit:"cover", objectPosition:"center"}} src={logo} alt='logo'/>
                    </Box>
                    <Typography variant='h5'>Inscription</Typography>
                    <Typography variant='body1' className='handle-salutation' style={{margin:'16px 0 0 0'}}>
                        Déverrouillez un monde de possibilités ! <strong>Rejoignez-nous dès aujourd'hui !</strong>
                    </Typography>
                    <Typography variant='body1' className='handle-connexion' textAlign='center'>Vous avez un compte? <Link to='/auth/login'>connectez-vous</Link></Typography>
                    <Swiper
                        onSwiper={handleSwiper}
                        grabCursUniversities
                        effect={'creative'}
                        className="mySwiper"
                        modules={[Navigation]}
                        navigation={true}
                        pagination={false}
                        touchEventsTarget="wrapper"
                        allowTouchMove={false} // Désactiver complètement la navigation tactile
                    >
                        <SwiperSlide className='slide'>
                            <Typography variant='body1' style={{margin:'16px 0 0 0', color:'var(--primary)', textAlign:"left"}}>
                                Choisissez votre Universitée.
                            </Typography>
                            <Grid container className='wrapper-list-institute'>
                                {
                                    dataUniv.map((university, key) => {
                                        return (<Button item key={key} onClick={() => handleSelectedUniversities(university.id)}   className='institute'>
                                                <Box className='wrapper-img'><img src={university.picture} alt='img-1' style={{objectFit:"cover", objectPosition:"center", width:'100%', height:'100%'}} /></Box>
                                                <Typography variant='body' textAlign='center'>{university.libelle}</Typography>
                                            </Button>
                                        )
                                    })
                                }
                            </Grid>
                        </SwiperSlide>
                        <SwiperSlide className='slide'>
                            {selectedUniversity && (
                                <>
                                    <Typography variant='body1' style={{textAlign:'center', textTransform:'uppercase'}}>{selectedUniversity.libelle}</Typography>
                                    <Typography className='handle-text' variant='body1' style={{margin: '16px 0 0 0', color: 'var(--primary)'}}>
                                        <Tooltip title='Retournez à la liste des universités.'>
                                            <span className='icon'><ChevronLeft onClick={goPrev} style={{color:'var(--standard)'}}/></span>
                                        </Tooltip>
                                        <span>Choisissez votre Institut de formation.</span>
                                    </Typography>
                                </>
                            )}
                            <Grid container className='wrapper-list-institute'>
                                {selectedUniversity?.sousTutelle?.map((institute, key) => {
                                    return (
                                        <Button item key={key} onClick={() => handleSelectedInstitute(institute.id)} className='institute'>
                                            {/*<Box className='wrapper-img'><img src={institute.picture} alt='img-1' style={{objectFit:"cover", objectPosition:"center", width:'100%', height:'100%'}} /></Box>*/}
                                            <Typography variant='body' textAlign='center'>{institute.libelle}</Typography>
                                        </Button>
                                    );
                                })}
                            </Grid>
                        </SwiperSlide>
                        <SwiperSlide className='slide'>
                            {(selectedUniversity && selectedInstitute) && (
                                <>
                                    <Typography variant='body1' style={{textAlign:'center', textTransform:'uppercase'}}><strong>{selectedUniversity.libelle}</strong> - <Chip label={selectedInstitute.libelle} sx={{color:'var(--standard)', backgroundColor:'var(--primary)', textTransform:"lowercase"}} /></Typography>
                                    <Typography className='handle-text' variant='body1' style={{margin: '16px 0 0 0', color: 'var(--primary)', textAlign: "center"}}>
                                        <Tooltip title='Retournez à la liste des universités.'>
                                            <span className='icon'><ChevronLeft onClick={goPrev} style={{color:'var(--standard)'}}/></span>
                                        </Tooltip>
                                        <span>Etes vous un ancien ou nouveau étudiant?.</span>
                                    </Typography>
                                </>
                            )}
                            <Grid container className='wrapper-list-institute last-slide'>
                                <Box className='btn-questions'>
                                    <Button variant='outlined' className='btn' onClick={() => {
                                        setIsNew(true)
                                        setIsClick(true)
                                    }}>Nouveau</Button>
                                    <Button variant='outlined' className='btn' onClick={() => {
                                        setIsNew(false)
                                        setIsClick(true)
                                    }}>Ancien</Button>
                                </Box>
                                {isClick &&
                                    <Grid item xs={12} md={11} margin='0 auto' style={{
                                        justifyContent: 'center',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}>
                                        <Paper elevation={2} style={{padding: '24px', boxShadow:"none"}}>
                                        <Box>
                                            {isNew &&
                                                <Stack
                                                    direction="row"
                                                    divider={<Divider orientation="vertical" flexItem/>}
                                                    spacing={2}
                                                    className='btn-new-student'
                                                >
                                                    <Button item className='button'>
                                                        <Box className='icon'><HelpCenter/></Box>
                                                        <Typography variant='body1' textAlign='center'>Le processus complet
                                                            de préinscription se trouve ici.</Typography>
                                                    </Button>
                                                    <Button item className='button'>
                                                        <Box className='icon'><FileCopy/></Box>
                                                        <Typography variant='body1' textAlign='center'>Constitution du
                                                            dossier de préinscription ici</Typography>
                                                    </Button>
                                                    <Button item className='button'>
                                                        <Box className='icon'><HelpCenter/></Box>
                                                        <Typography variant='body1' textAlign='center'>Téléchargez le guide
                                                            de l'étudiant ici</Typography>
                                                    </Button>
                                                </Stack>
                                            }
                                            <div>
                                                <Stepper
                                                    activeStep={currentStep}
                                                    alternativeLabel
                                                    sx={{ pt: 3 }}
                                                    style={{ margin: "0 auto" }}
                                                >
                                                    <Step>
                                                        <StepLabel>
                                                            {currentStep === 0 && "Infos personnelles"}
                                                        </StepLabel>
                                                    </Step>
                                                    <Step>
                                                        <StepLabel>
                                                            {currentStep === 1 && "Infos Universitaires"}
                                                        </StepLabel>
                                                    </Step>
                                                    <Step>
                                                        <StepLabel>{currentStep === 2 && "Mot de passe"}</StepLabel>
                                                    </Step>
                                                </Stepper>


                                                <Alert severity="warning" sx={{marginBottom:'18px'}}>
                                                    <AlertTitle>Attention</AlertTitle>
                                                    Evitez de faire plusieurs préinscriptions.
                                                    Si vous voulez modifier votre préinscription, veuillez vous connecter à votre espace privé.
                                                    <Link to={LOGIN_URL}>Cliquer ici pour vous connecter</Link>. En cas de difficulté, bien vouloir envoyer un mail au support technique (<Link to=''>{`support.etucamer@univ-${replaceSpacesWithUnderscores(selectedInstitute.libelle)}.org`}</Link>).
                                                </Alert>
                                            </div>
                                            {steps[currentStep]}
                                        </Box>
                                    </Paper>
                                    </Grid>
                                }
                            </Grid>
                        </SwiperSlide>
                    </Swiper>
                </Box>
            </Grid>
        </Box>
    )
}
