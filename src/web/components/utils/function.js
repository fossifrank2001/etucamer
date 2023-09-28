import {
    Button,
    Fade,
    FormControl, FormControlLabel, FormLabel,
    Grid,
    InputAdornment,
    MenuItem,
    Paper,
    Popper, Radio, RadioGroup,
    TextField,
    Typography
} from "@mui/material";
import * as PropTypes from "prop-types";
import {ErrorOutline} from "@mui/icons-material";
import uy1 from '../../assets/images/uy1.png'
import uy2 from  '../../assets/images/uy.png'
import ud1 from  '../../assets/images/ud1.jpg'
import ung from  '../../assets/images/ung.jpg'
import uds from  '../../assets/images/uds.png'
import ubu from  '../../assets/images/ub1.jpg'
import uba from  '../../assets/images/uba.jpg'
import uma from  '../../assets/images/uma.jpg'
import {Field, Form, Formik} from "formik";
import React, {useState} from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


/*
* @param {String} code
* @return String
*/
export function isoToEmoji(code) {
    return code.split('').map(letter => letter.charCodeAt(0)%32 + 0x1F1E5).map(n => String.fromCodePoint(n)).join('')
}

export function replaceSpacesWithUnderscores(inputString) {
    if (typeof inputString !== 'string') {
        return ''; // Si l'entrée n'est pas une chaîne de caractères, retourne une chaîne vide
    }

    // Utilisez la méthode replace avec une expression régulière pour remplacer les espaces par des underscores
    return inputString.replace(/\s+/g, '_');
}
export function greatingPeople() {
    const maintenant = new Date();
    const heure = maintenant.getHours();

    let salutation = "";

    if (heure >= 5 && heure < 12) {
        salutation = "Bonjour";
    } else if (heure >= 12 && heure < 18) {
        salutation = "Bon après-midi";
    } else {
        salutation = "Bonsoir";
    }

    return salutation;
}

export const BASE_URL= "http://localhost:8001/api/v1"

export const inputProps= (f)=>{
    return {
        endAdornment: <InputAdornment position='end'>
            <ErrorOutline sx={{color:"red"}} />
        </InputAdornment>
    }
}

export const niveaux=[
    {
        id:1,
        label: 'License 1'
    },
    {
        id:2,
        label: 'License 2'
    },
    {
        id:3,
        label: 'License 3'
    },
    {
        id:4,
        label: 'Master 1'
    },
    {
        id:5,
        label: 'Master 2'
    },
    {
        id:6,
        label: 'Doctorat'
    },
]
export const trainingType = [
    {
        id: 1,
        libelle:'Formation Candidat libre'
    },
    {
        id: 2,
        libelle:'Formation initial (fondamentaux)'
    },
    {
        id: 3,
        libelle:'Formation Professionnel'
    },
]
export const diplomes = [
    {
        id: 1,
        libelle: "BEPC (Brevet d'Études du Premier Cycle)"
    },
    {
        id: 2,
        libelle: "Baccalauréat"
    },
    {
        id: 3,
        libelle: "CAP (Certificat d'Aptitude Professionnelle)"
    },
    {
        id: 4,
        libelle: "Brevet de Technicien"
    },
    {
        id: 5,
        libelle: "Certificat de Fin d'Études Secondaires (CFES)"
    },
    {
        id: 6,
        libelle: "DUT (Diplome Universitaire de Technologie)"
    },
    {
        id: 7,
        libelle: "BTS (Brevet de Technicien Superieur)"
    },
]
export const universites = [
    {
        id: 1,
        picture: uy1,
        libelle: 'Université de Yaoundé I',
        sousTutelle: [
            {
                id: 1,
                libelle: 'Institut des Sciences Informatiques',
                field: ['Informatique', 'Cybersécurité']
            },
            {
                id: 2,
                libelle: 'Faculté des Sciences Économiques',
                field: ['Économie', 'Gestion']
            },
            {
                id: 3,
                libelle: 'Faculté de Médecine',
                field: ['Médecine', 'Pharmacie']
            }
        ]
    },
    {
        id: 2,
        picture: uy2,
        libelle: 'Université de Yaoundé II',
        sousTutelle: [
            {
                id: 1,
                libelle: 'Faculté de Droit',
                field: ['Droit', 'Justice']
            },
            {
                id: 2,
                libelle: 'Faculté de Langues Étrangères',
                field: ['Langues', 'Traduction']
            },
            {
                id: 3,
                libelle: 'Faculté de Gestion',
                field: ['Gestion', 'Comptabilité']
            }
        ]
    },
    {
        id: 3,
        picture: ud1,
        libelle: 'Université de Douala',
        sousTutelle: [
            {
                id: 1,
                libelle: 'Institut de Génie Civil',
                field: ['Génie Civil', 'Architecture']
            },
            {
                id: 2,
                libelle: 'Institut des Sciences Économiques et de Gestion',
                field: ['Économie', 'Gestion']
            }
        ]
    },
    {
        id: 4,
        picture: ung,
        libelle: 'Université de Ngaoundéré',
        sousTutelle: [
            {
                id: 1,
                libelle: 'Faculté des Sciences',
                field: ['Mathématiques', 'Biologie']
            },
            {
                id: 2,
                libelle: 'Faculté de Droit et des Sciences Politiques',
                field: ['Droit', 'Sciences Politiques']
            }
        ]
    },
    {
        id: 5,
        picture: uds,
        libelle: 'Université de Dschang',
        sousTutelle: [
            {
                id: 1,
                libelle: 'Faculté d\'Agriculture',
                field: ['Agriculture', 'Agroalimentaire']
            },
            {
                id: 2,
                libelle: 'Faculté des Sciences Humaines et Sociales',
                field: ['Sciences Politiques', 'Histoire']
            }
        ]
    },
    {
        id: 6,
        picture: ubu,
        libelle: 'Université de Buea',
        sousTutelle: [
            {
                id: 1,
                libelle: 'Faculté d\'Informatique et de Sciences de l\'Information',
                field: ['Informatique', 'Cybersécurité']
            },
            {
                id: 2,
                libelle: 'Faculté de Gestion des Affaires',
                field: ['Gestion des Affaires', 'Comptabilité']
            }
        ]
    },
    {
        id: 7,
        picture: uba,
        libelle: 'Université de Bamenda',
        sousTutelle: [
            {
                id: 1,
                libelle: 'Faculté d\'Informatique',
                field: ['Informatique', 'Systèmes d\'Information']
            },
            {
                id: 2,
                libelle: 'Faculté de Sciences Économiques et de Gestion',
                field: ['Sciences Économiques', 'Gestion']
            }
        ]
    },
    {
        id: 8,
        picture: uma,
        libelle: 'Université de Maroua',
        sousTutelle: [
            {
                id: 1,
                libelle: 'Faculté des Sciences et des Technologies',
                field: ['Géographie', 'Physique', 'Informatique']
            }
        ]
    }
]
export const StepOne =({next, handleOpenPopper, validationOneSchema, data, open, anchorEl, placement}) =>{
    const handleSubmit = (values)=>{
        console.log(values)
        next(values)
    }
    return <Formik
        initialValues={data}
        validationSchema={validationOneSchema}
        onSubmit={handleSubmit}
    >
        {
            ({values, setFieldValue}) => {
                return <Form >
                    <Grid container spacing={2} className='first-step'>
                        <Grid item xs={12} md={6} mt={1}>
                            <Field name="first_name">
                                {(props)=>{
                                    const {field, meta } =props
                                    return <TextField
                                        error={meta.touched && meta.error}
                                        helperText={`${meta.touched && meta.error? meta.error : ''}`}
                                        sx={{ borderRadius: '30px' }}
                                        label="Nom"
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
                        <Grid item xs={12} md={6} mt={1}>
                            <Field name="last_name">
                                {(props)=>{
                                    const {field, meta} =props
                                    return <TextField
                                        error={meta.touched && meta.error}
                                        helperText={`${meta.touched && meta.error? meta.error : ''}`}
                                        type='text'
                                        label="Prenom"
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
                        <Grid item xs={12} md={4} mt={1}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Date de naissance"
                                    value={values.birth_day} // Bind value to form values
                                    onChange={(date) => setFieldValue('birth_day', date)} // Update birth_day field in form values
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} md={4} mt={1}>
                            <Field name="birth_place">
                                {(props)=>{
                                    const {field, meta} =props
                                    return <TextField
                                        error={meta.touched && meta.error}
                                        helperText={`${meta.touched && meta.error? meta.error : ''}`}
                                        type='text'
                                        label="Lieu de naissance"
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
                        <Grid item xs={12} md={4} mt={1}>
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
                        <Grid item xs={12} md={6} mt={1}>
                            <Field name="cni_number">
                                {(props)=>{
                                    const {field, meta} =props
                                    return <TextField
                                        error={meta.touched && meta.error}
                                        helperText={`${meta.touched && meta.error? meta.error : ''}`}
                                        type='text'
                                        label="CNI number"
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
                        <Grid item xs={12} md={6} mt={1}>
                            <>
                                <Field name="phone">
                                    {(props)=>{
                                        const {field, meta} =props
                                        return <TextField
                                            error={meta.touched && meta.error}
                                            helperText={`${meta.touched && meta.error? meta.error : ''}`}
                                            type='text'
                                            value={field.value}
                                            {...field}
                                            label="Numéro de téléphone"
                                            InputProps={{
                                                startAdornment: <InputAdornment position='start'>
                                                  <span aria-describedby='popper' type="button" onClick={(e) => handleOpenPopper(e, 'bottom-start')}>
                                                    {isoToEmoji('cm')}
                                                  </span>
                                                </InputAdornment>
                                            }}
                                            fullWidth
                                            required
                                            size='small'
                                        />
                                    }}
                                </Field>
                                <Popper id='popper' open={open} anchorEl={anchorEl} placement={placement || 'bottom-start'} transition>
                                    {({ TransitionProps }) => (
                                        <Fade {...TransitionProps} timeout={350}>
                                            <Paper style={{backgroundColor: "rgba(233, 233, 233)"}}>
                                                <Typography variant='body1' style={{padding:"8px", fontSize: '12px!important'}}>{`${isoToEmoji('cm')} +237`}</Typography>
                                            </Paper>
                                        </Fade>
                                    )}
                                </Popper>
                            </>
                        </Grid>
                        <Grid display="flex" justifyContent="flex-end" item xs={12} md={12}>
                            <Button type='submit' variant="outlined">Next</Button>
                        </Grid>
                    </Grid>
                </Form>
            }
        }
    </Formik>
}

export const StepTwo = ({ next, prev, handleOpenPopper, validationTwoSchema, data, datas, isNew, diplomes, levels, trainings }) => {
    const handleSubmit = (values) => {
        next(values, true);
    };

    return (
        <Formik
            initialValues={data}
            validationSchema={validationTwoSchema}
            onSubmit={handleSubmit}
        >
            {({ values, setFieldValue }) => (
                <Form>
                    <Grid container spacing={2} className='two-step'>
                        {!isNew && (
                            <Grid item xs={12} md={4} mt={1}>
                                <Field name="matricule">
                                    {(props) => {
                                        const { field, meta } = props;
                                        return (
                                            <TextField
                                                error={meta.touched && meta.error}
                                                helperText={`${meta.touched && meta.error ? meta.error : ''}`}
                                                type='text'
                                                label="Matricule"
                                                {...field}
                                                value={field.value}
                                                fullWidth
                                                InputProps={meta.touched && meta.error ? inputProps(handleOpenPopper) : {}}
                                                required
                                                size='small'
                                            />
                                        );
                                    }}
                                </Field>
                            </Grid>
                        )}
                        <Grid item xs={12} md={4} mt={1}>
                            <Field
                                as={TextField}
                                select
                                name="level"
                                label="Classe LMD (Niveau)"
                                variant="outlined"
                                value={values.level || ''}
                                onChange={(e) => {
                                    setFieldValue('level', e.target.value);
                                }}
                            >
                                <MenuItem value="">Classe LMD (Niveau)</MenuItem>
                                {levels.map((level, key) => (
                                    <MenuItem key={key} value={level.id}>
                                        {level.label}
                                    </MenuItem>
                                ))}
                            </Field>
                        </Grid>
                        <Grid item xs={12} md={4} mt={1}>
                            <Field
                                as={TextField}
                                select
                                name="field"
                                label="Choisir votre filière"
                                variant="outlined"
                                value={values.field || ''}
                                onChange={(e) => {
                                    setFieldValue('field', e.target.value);
                                }}
                            >
                                <MenuItem value="">Sélectionnez votre filière</MenuItem>
                                {datas.map((data, key) => (
                                    <MenuItem key={key} value={data}>
                                        {data}
                                    </MenuItem>
                                ))}
                            </Field>
                        </Grid>
                        <Grid item xs={12} md={6} mt={1}>
                            <Field
                                as={TextField}
                                select
                                name="diplome"
                                label="Choisir votre diplôme d'admission"
                                variant="outlined"
                                value={values.diplome || ''}
                                onChange={(e) => {
                                    setFieldValue('diplome', e.target.value);
                                }}
                            >
                                <MenuItem value="">Sélectionnez votre diplôme d'admission</MenuItem>
                                {diplomes.map((diplome, key) => (
                                    <MenuItem key={key} value={diplome.id}>
                                        {diplome.libelle}
                                    </MenuItem>
                                ))}
                            </Field>
                        </Grid>
                        <Grid item xs={12} md={6} mt={1}>
                            <Field
                                as={TextField}
                                select
                                name="training"
                                label="Choisir le type de formation"
                                variant="outlined"
                                value={values.training || ''}
                                onChange={(e) => {
                                    setFieldValue('training', e.target.value);
                                }}
                            >
                                <MenuItem value="">Choisir le type de formation</MenuItem>
                                {trainings.map((training, key) => (
                                    <MenuItem key={key} value={training.id}>
                                        {training.libelle}
                                    </MenuItem>
                                ))}
                            </Field>
                        </Grid>
                        <Grid display="flex" justifyContent="end" item xs={12} md={12}>
                            <Button type='button' onClick={() => prev(values)} variant="outlined">
                                prev
                            </Button>
                            <Button type='submit' sx={{ backgroundColor: 'var(--primary)', marginLeft: '16px' }} variant="contained">
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Form>
            )}
        </Formik>
    );
};