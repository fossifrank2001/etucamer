import React, {useEffect} from 'react'
import {Box, Grid, Typography} from "@mui/material";
import '../../../assets/css/web/footer.css'
import {Article, Assignment, Book, EventRepeat, Help, LibraryBooks, Payment, Warning} from "@mui/icons-material";
import AOS from "aos";
import 'aos/dist/aos.css';
export default function Footer() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Specify the animation duration in milliseconds
        });
    }, []);
    return (
        <Box component='footer' id='nos-services' position='relative' className='our-services'>
            <Typography variant='h5'>Nos Services</Typography>
            <Box className='container' sx={{backgroundColor:"var(--secondary)", color:"var(--dark)"}}>
                <Box  className='wrapper-services'>
                <Box className='grid-wrapper' container  spacing={3}>
                    <Box data-aos="fade-right" data-aos-duration="1000" item className='item'>
                        <Box className='big-title'>
                            <Article className='icon'/>
                            <Typography variant='h4'>Actualités</Typography>
                        </Box>
                        <Typography variant='body1' >
                            Vous recevrez en temps réel toutes les
                            informations liées à votre filière, votre
                            niveau et votre université en général.
                        </Typography>
                    </Box>
                    <Box data-aos="fade-left" data-aos-duration="1000" item className='item'>
                        <Box className='big-title'>
                            <Book className='icon'/>
                            <Typography variant='h4'>Résultats d'examen</Typography>
                        </Box>
                        <Typography variant='body1' >
                            Vous recevrez vos résultats personnels
                            directement sur votre compte
                            ETUCAMER sans vous déplacer.
                        </Typography>
                    </Box>
                    <Box data-aos="fade-right" data-aos-duration="1000" item className='item'>
                        <Box className='big-title'>
                            <EventRepeat className='icon'/>
                            <Typography variant='h4'>Programmes</Typography>
                        </Box>
                        <Typography variant='body1' >
                            Tous vos programmes de cour et salles ratachée sont disponible dans votre espace personnel ETUCAMER.
                            Avec un rappel quotidien de ceux ci sur votre ecran en temps réel.
                        </Typography>
                    </Box>
                    <Box data-aos="fade-left" data-aos-duration="1000" item className='item'>
                        <Box className='big-title'>
                            <Warning className='icon'/>
                            <Typography variant='h4'>Avertissements</Typography>
                        </Box>
                        <Typography variant='body1' >
                            Soyez avisé en cas d'absence, ou manque d'un enseignant et gagner en temps, em argent et en energie.
                        </Typography>
                    </Box>
                    <Box data-aos="fade-right" data-aos-duration="1000" item className='item'>
                        <Box className='big-title'>
                            <LibraryBooks className='icon'/>
                            <Typography variant='h4'>Support de cours</Typography>
                        </Box>
                        <Typography variant='body1' >
                            Tous les étudiants ont la possibilité de
                            télécharger les supports de cours en format
                            numérique fournis par les professeurs
                            directement sur leur tableau de bord.
                        </Typography>
                    </Box>
                    <Box data-aos="fade-left" data-aos-duration="1000" item className='item'>
                        <Box className='big-title'>
                            <Help className='icon'/>
                            <Typography variant='h4'>Aide au requetes</Typography>
                        </Box>
                        <Typography variant='body1' >
                            Bénéficiez de nos modèles
                            téléchargeables des différentes
                            requetes des étudiants que vous
                            pouvez personnaliser.
                        </Typography>
                    </Box>
                    <Box data-aos="fade-right" data-aos-duration="1000" item className='item'>
                        <Box className='big-title'>
                            <Assignment className='icon'/>
                            <Typography variant='h4'>Anciens sujets corrigés</Typography>
                        </Box>
                        <Typography variant='body1' >
                            Les étudiants peuvent télécharger
                            les anciens sujets corrigés de chaque
                            matière en format image.
                        </Typography>
                    </Box>
                    <Box data-aos="fade-left" data-aos-duration="1000" item className='item'>
                        <Box className='big-title'>
                            <Payment className='icon'/>
                            <Typography variant='h4'>Paiement</Typography>
                        </Box>
                        <Typography variant='body1' >
                            L'étudiant pourra payer ses quitus
                            ou frais universitaires de façon rapide,
                            simple et sécurisée sans se déplacer.
                        </Typography>
                    </Box>
                </Box>
                </Box>
            </Box>
        </Box>
    )
}
