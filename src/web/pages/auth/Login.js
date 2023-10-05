import React, {useEffect, useState} from 'react'
import {
    Box,
    Button, CssBaseline,
    FormControlLabel,
    Grid,
    IconButton, Snackbar,
    Switch,
    TextField,
    Typography
} from "@mui/material";
import '../../assets/css/web/login.css'
import logo from '../../assets/images/logo1.png'
import {Field, Form, Formik} from "formik";
import {inputProps, isoToEmoji} from "../../components/utils/function";
import * as Yup from "yup";
import InputCheckBox from "../../components/utils/InputCheckBox";
import {Link, useNavigate} from "react-router-dom";
import {HOME_URL} from "../../components/utils/utilsFunction";
import {ArrowBack, Visibility, VisibilityOff} from "@mui/icons-material";
import {Alert} from "@mui/lab";
import {useTheme} from "@mui/material/styles";
import config from "../../../config";
import {CustomizeSnackBar} from "../../../admin/utils";
import {useDispatch, useSelector} from "react-redux";
import {SNACKBAR_OPEN} from "../../../admin/store/actions";
import AnimateButton from "../../../admin/ui-component/extended/AnimateButton";
export default function Login() {
    const theme = useTheme()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const {snackbarIsOpened, customization} = useSelector((state) => state.customization);
    useEffect(()=>{
        document.title = 'SnapU | Connexion'
        console.log(snackbarIsOpened, customization)
    }, [])
    const initialValues = {
        email: '',
        password: '',
        remember_me:false
    };
    const validationSchema = Yup.object({
        email: Yup.string().email('email invalid').required("L' email est requis"),
        password: Yup.string().matches(/^[a-zA-Z0-9\s\-_.@]+$/, 'mot de passe invalid').required('Le mot passe est requis'),
        remember_me:Yup.boolean()
    });
    const handleSubmit = (values, {resetForm}) =>{
        dispatch({type: SNACKBAR_OPEN, snackbarIsOpened:true})
        navigate(config.defaultPath)
        resetForm()
    }

    //Handle Popper functionnalities
    const [open, setOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const [placement, setPlacement] = useState('');
    const handleOpenPopper = (event, placement) => {
        setAnchorEl(event.currentTarget);
        setOpen(state => !state);
        setPlacement(placement);
    }
    return (
        <Box className='login'>
            <CustomizeSnackBar
                type='success'
                open={snackbarIsOpened}
                message='successfully logged out'
                position={{ vertical: 'top', horizontal: 'right' }}
            />
            <CssBaseline />
            <Grid className='wrapper-login'>
                <Grid className='grid' container>
                    <Grid className='first_section' item xs={12} md={6}>
                        <Box onClick={()=> navigate(HOME_URL)} style={{cursor:"pointer"}} className='login-logo'><img src={logo} alt='logo' /></Box>
                        <Typography variant='body1' mt={1}>🎓 Bienvenue sur l'application <strong>ETUCAMER</strong> !</Typography>
                        <Typography variant='body1' mt={3} style={{fontWeight:'lighter'}}>
                            Bienvenue dans notre communauté éducative. Que vous soyez étudiant, enseignant ou membre du personnel, notre application vous simplifie votre expérience universitaire.
                        </Typography>
                        <Typography variant='body1' mt={1}><strong>Pourquoi pas vous connecter dès maintenant ? 📚</strong></Typography>
                    </Grid>
                    <Grid className='second_section' item xs={12} lg={4} md={5}>
                        <Box className='login-logo-mobile' width="100%" display='flex' justifyContent="center" onClick={()=> navigate(HOME_URL)} style={{cursor:"pointer"}}>
                            <img style={{height:"100px", objectFit:"cover", objectPosition:"center"}} src={logo} alt='logo'/>
                        </Box>
                        <Typography variant='h5' my={3} >Inscription</Typography>
                        <Box className='login-redirect' sx={{display:'flex', alignItems:'center', justifyContent:'center', color:"var(--primary)"}}>
                            <ArrowBack />
                            <Link  to={HOME_URL} style={{textAlign:'center!important', marginLeft:'10px', color:"var(--primary)"}}>Retournez a la page d'acceuil</Link>
                        </Box>
                        <Alert severity="error" style={{margin: "12px  0"}}>
                            This is an error alert — <strong>check it out!</strong>
                        </Alert>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({values }) => {
                                return <Form>
                                    <Grid container spacing={2} className=''>
                                        <Grid item xs={12} md={12} mt={1}>
                                            <Field name="email">
                                                {(props)=>{
                                                    const {field, meta} =props
                                                    return <TextField
                                                        error={meta.touched && meta.error}
                                                        helperText={`${meta.touched && meta.error? meta.error : ''}`}
                                                        type='email'
                                                        label="Adresse Email"
                                                        {...field}
                                                        value={field.value}
                                                        fullWidth
                                                        InputProps={meta.touched && meta.error? inputProps(handleOpenPopper): {}}
                                                        required
                                                        size='small'
                                                    />
                                                }}
                                            </Field>
                                        </Grid>
                                        <Grid item xs={12} md={12} mt={1}>
                                            <Field name="password">
                                                {(props) => {
                                                    const { field, meta } = props;
                                                    return (
                                                        <TextField
                                                            error={meta.touched && meta.error}
                                                            helperText={`${meta.touched && meta.error ? meta.error : ''}`}
                                                            sx={{ borderRadius: '30px' }}
                                                            label="Mot de passe"
                                                            type={showPassword ? 'text' : 'password'} // Toggle between text and password
                                                            {...field}
                                                            value={field.value}
                                                            fullWidth
                                                            required
                                                            size='small'
                                                            InputProps={{
                                                                endAdornment: (
                                                                    <IconButton
                                                                        onClick={() => setShowPassword(!showPassword)}
                                                                        edge="end"
                                                                    >
                                                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                                                    </IconButton>
                                                                ),
                                                            }}
                                                        />
                                                    );
                                                }}
                                            </Field>
                                        </Grid>
                                        <Grid item className='remember_me' xs={12} sx={{display:'flex', alignItems:'center', justifyContent:"space-between"}}>
                                            <Field type="checkbox" name="remember_me">
                                                {({ field }) => (
                                                    <FormControlLabel
                                                        control={<Switch {...field} />}
                                                        label="Se souvenir de moi"
                                                    />
                                                )}
                                            </Field>

                                            <Box>
                                                <Link to='/auth/forgot-password' style={{color:'var(--primary)', textDecoration:'underline'}}>Mot de passe oublié?</Link>
                                            </Box>
                                        </Grid>
                                        <Grid display="flex" justifyContent="flex-end" item xs={12} md={12}>
                                            <AnimateButton sx={{width:'100%'}}>
                                                <Button type='submit'  style={{backgroundColor:'var(--primary)', width:'100%'}} variant="outlined">Connecter Vous</Button>
                                            </AnimateButton>
                                        </Grid>
                                        <Grid display="flex" justifyContent="flex-end" item xs={12} md={12}>
                                            <Typography mt={1} className='handle-login'>Vous n'avez pas de compte? <Link to='/auth/registration'>Crée un compte</Link> </Typography>
                                        </Grid>
                                    </Grid>
                                </Form>
                            }
                            }
                        </Formik>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
