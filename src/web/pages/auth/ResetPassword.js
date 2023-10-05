import {Alert, Box, Button, InputAdornment, Paper, TextField, Typography} from '@mui/material'
import React, {useEffect, useState} from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import MailIcon from '@mui/icons-material/Mail';
import logo from '../../assets/images/logo1.png'
import {Link, useNavigate} from 'react-router-dom';
import {LoadingButton} from "@mui/lab";
import '../../assets/css/web/resetPassword.css'
import {inputProps, universites} from "../../components/utils/function";
import {HOME_URL} from "../../components/utils/utilsFunction";
import AnimateButton from "../../../admin/ui-component/extended/AnimateButton";
export default function ResetPassword() {
    const navigate = useNavigate()
    useEffect(()=>{
        document.title = 'SnapU | Réinitialisation du mot de passe'
    }, [])
    //Handle Popper functionnalities
    const [open, setOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const [placement, setPlacement] = useState('');
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const [isLoading, setIsloading] = useState(false);
    const handleOpenPopper = (event, placement) => {
        setAnchorEl(event.currentTarget);
        setOpen(state => !state);
        setPlacement(placement);
    }
    const initialValues = {
        email: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Email invalid').required('email est requis'),
    });
    const handleSubmit = async  (values, { resetForm }) => {
        console.log(values);
        resetForm()
    };


    return (
        <Box sx={{width:"100vw", height:"100vh"}} display="flex" justifyContent="center" alignItems="center">
            <Box className='reset-password'>
                <Box sx={{padding:"16px 24px", width:"100%"}}>
                    <Box width="100%" display='flex' justifyContent="center" onClick={()=> navigate(HOME_URL)} style={{cursor:"pointer"}}>
                        <img style={{height:"100px", objectFit:"cover", objectPosition:"center"}} src={logo} alt='logo'/>
                    </Box>
                    <Paper elevation={0} sx={{padding:"16px 24px", width:"100%", borderRadius:"15px", margin:'24PX'}}>
                        {message ?
                            <Box marginBottom="24px">
                                <Alert severity="info" py={2}>{message}</Alert>
                            </Box>:
                            <>
                                <Box pb={1}>
                                    <h2 style={{textAlign:"center", color:"var(--primary)", marginBottom:"0px"}}>Reinitialisez le mot de passe</h2>
                                    <Typography variant='body1' sx={{fontWeight:"lighter", fontSize:'14px!important', my:"16px"}}>Quel est le mot de passe associé à votre compte?</Typography>
                                </Box>
                                {error && <Box marginBottom="24px">
                                    <Alert severity="error">{error}</Alert>
                                </Box>
                                }
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    {({values}) => {
                                        return <Form>
                                            <Field name="email">
                                                {(props)=>{
                                                    const {field, meta } =props
                                                    return <TextField
                                                        error={meta.touched && meta.error}
                                                        helperText={`${meta.touched && meta.error? meta.error : ''}`}
                                                        sx={{ borderRadius: '30px' }}
                                                        label="Email"
                                                        {...field}
                                                        value={field.value}
                                                        fullWidth
                                                        InputProps={{
                                                            startAdornment: (
                                                                <>
                                                                    <InputAdornment position="start">
                                                                        <MailIcon sx={{color:'var(--primary)'}} />
                                                                    </InputAdornment>
                                                                    <span
                                                                        style={{
                                                                            borderRight: '1px solid #ccc',
                                                                            height: 24,
                                                                            margin: '0 8px',
                                                                        }}
                                                                    ></span>
                                                                </>
                                                            ),
                                                            ...(meta.touched && meta.error
                                                                ? { ...inputProps(handleOpenPopper) }
                                                                : {}),
                                                        }}
                                                        required
                                                    />
                                                }}
                                            </Field>
                                            <Box display='flex' justifyContent="flex-end">
                                                {!isLoading? <AnimateButton>
                                                        <Button type='submit' sx={{backgroundColor:'var(--primary)', textTransform:"initial", margin:"12px 0"}} variant="contained">Envoyez</Button>
                                                    </AnimateButton>
                                                    :<LoadingButton loading type='submit' sx={{backgroundColor:'var(--primary)', textTransform:"initial", margin:"12px 0"}} variant="contained">Envoyez</LoadingButton>
                                                }
                                            </Box>
                                            <Box display='flex' justifyContent="flex-end"> <Link style={{textDecoration:"underline", textAlign:"end"}} to="/auth/login" type='button'>Connectez-vous</Link></Box>
                                        </Form>}
                                    }
                                </Formik>
                            </>
                        }
                    </Paper>
                </Box>
            </Box>
        </Box>
    )
}
