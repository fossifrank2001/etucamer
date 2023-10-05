import React, {useState} from 'react'
import {Box, Button, MenuItem, TextField} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {inputProps} from "../../../web/components/utils/function";


export default function PasswordResetForm() {
    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .min(6, "Le mot de passe doit contenir au moins 06 caracteres")
            .required("Le mot de passe est requis"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Les mots de passe doivent etre semblables")
            .required("Le mot de passe de confirmation est requis"),
    });

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
        <Formik
            initialValues={{
                password: "",
                confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                console.log(values);
                resetForm();
            }}
        >
            <Form>
                <Box my={2}>
                    <Field name="password">
                        {(props)=>{
                            const {field, meta} =props
                            return <TextField
                                error={meta.touched && meta.error}
                                helperText={`${meta.touched && meta.error? meta.error : ''}`}
                                type='password'
                                label="Entrez le mot de passe"
                                {...field}
                                value={field.value}
                                fullWidth
                                InputProps={meta.touched && meta.error? inputProps(handleOpenPopper): {}}
                                required
                                size='small'
                                placeholder="Entrez votre mot de passe..."
                                id="Password"
                            />
                        }}
                    </Field>
                </Box>

                <Box my={2}>
                    <Field name="confirmPassword">
                        {(props)=>{
                            const {field, meta} =props
                            return <TextField
                                error={meta.touched && meta.error}
                                helperText={`${meta.touched && meta.error? meta.error : ''}`}
                                type='password'
                                label="Confirmez le mot de passe"
                                {...field}
                                value={field.value}
                                fullWidth
                                InputProps={meta.touched && meta.error? inputProps(handleOpenPopper): {}}
                                required
                                size='small'
                                placeholder="Confirmez votre mot de passe..."
                                id="confirmPassword"
                            />
                        }}
                    </Field>
                </Box>

                <Button type="submit" variant="contained" color="primary">
                    envoyer
                </Button>
            </Form>
        </Formik>
    )
}
