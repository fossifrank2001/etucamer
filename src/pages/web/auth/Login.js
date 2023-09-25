import React, {useEffect, useState} from 'react'
import {Box, Button, Fade, Grid, InputAdornment, Paper, Popper, TextField, Typography} from "@mui/material";
import '../../../assets/css/web/login.css'
import logo from '../../../assets/images/logo1.png'
import {Field, Form, Formik} from "formik";
import {inputProps, isoToEmoji} from "../../../components/utils/function";
import * as Yup from "yup";
import InputCheckBox from "../../../components/utils/InputCheckBox";
import {Link} from "react-router-dom";
import {HOME_URL} from "../../../components/utils/utilsFunction";
import {ArrowBack} from "@mui/icons-material";
export default function Login() {
    useEffect(()=>{
        document.title = 'EDUCAMER | Login'
    }, [])
    const initialValues = {
        email: '',
        password: ''
    };
    const validationSchema = Yup.object({
        email: Yup.string().email('email invalid').required("L' email est requis"),
        password: Yup.string().matches(/^[a-zA-Z0-9\s]+$/, 'mot de passe invalid').required('Le mot passe est requis'),
    });
    const handleSubmit = (values, {resetForm}) =>{
        console.log(values)
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
            <Grid className='wrapper-login'>
                <Grid className='grid' container>
                    <Grid className='first_section' item xs={12} md={6}>
                        <Box><img src={logo} alt='logo' /></Box>
                        <Typography variant='body1' mt={1}>🎓 Bienvenue sur l'application <strong>ETUCAMER</strong> !</Typography>
                        <Typography variant='body1' mt={3} style={{fontWeight:'lighter'}}>
                            Bienvenue dans notre communauté éducative. Que vous soyez étudiant, enseignant ou membre du personnel, notre application vous simplifie votre expérience universitaire.
                        </Typography>
                        <Typography variant='body1' mt={1}><strong>Pourquoi pas vous connecter dès maintenant ? 📚</strong></Typography>
                    </Grid>
                    <Grid className='second_section' item xs={12} md={4}>
                        <Typography variant='h5' my={3}>Login</Typography>
                        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', color:"var(--primary)"}}>
                            <ArrowBack />
                            <Link to={HOME_URL} style={{textAlign:'center!important', marginLeft:'10px', color:"var(--primary)"}}>HomePage</Link>
                        </Box>
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
                                                {(props)=>{
                                                    const {field, meta } =props
                                                    return <TextField
                                                        error={meta.touched && meta.error}
                                                        helperText={`${meta.touched && meta.error? meta.error : ''}`}
                                                        sx={{ borderRadius: '30px' }}
                                                        label="Mot de passe"
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
                                        <Grid item className='remember_me' xs={12} sx={{display:'flex', alignItems:'center', justifyContent:"space-between"}}>
                                            <Box>
                                                <InputCheckBox name="remenber_me" />
                                            </Box>
                                            <Box>
                                                <Link to='/auth/forgot-password' style={{color:'var(--primary)', textDecoration:'underline'}}>Mot de passe oublié?</Link>
                                            </Box>
                                        </Grid>
                                        <Grid display="flex" justifyContent="flex-end" item xs={12} md={12}>
                                            <Button type='submit'  style={{backgroundColor:'var(--primary)', width:'100%'}} variant="outlined">Connecter Vous</Button>
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
