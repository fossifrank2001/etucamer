import React, {useEffect} from 'react'
import {Box, Button, Card, CardContent, CardHeader, Grid, Typography} from "@mui/material";
import  '../../assets/css/web/home.css'
import img1 from '../../assets/images/koki.jpeg'
import img2 from '../../assets/images/fufu eru.jpeg'
import promoteur from '../../assets/images/promoteur.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AboutUs from "./AboutUs";
import OurContact from "./OurContact";
import OurPartner from "./OurPartner";
import Testimony from "./Testimony";

export default function Home() {
    useEffect(() => {
        document.title = 'EDUCAMER | Home'
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true, // Activez l'effet de fondu
        cssEase: 'linear', // Utilisez 'linear' pour un fondu uniforme
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000,
    };
    const handleClick = ()=>{
        console.log('registration');
    }
    return (
        <Box component='main'>
            <Box component='section' position='relative' className='baniere'>
                <Grid container className='container' width='100%'>
                    <Grid item md={4} className='box-1'></Grid>
                    <Grid item md={7} className='box-2'>
                        {/*<img src={img1} alt='car0usel-image' style={{objectFit:"cover", objectPosition:'center', width:'100%', height:'100%'}}/>*/}
                        <Slider  {...settings}>
                            <div >
                                <img src={img1} alt='car0usel-image' style={{objectFit:"cover", objectPosition:'center', width:'100%', height:'100%'}}/>
                            </div>
                            <div >
                                <img src={img2} alt='car0usel-image' style={{objectFit:"cover", objectPosition:'center', width:'100%', height:'100%'}}/>
                            </div>
                        </Slider>
                    </Grid>
                </Grid>

                 <Grid container>
                     <Grid display='flex' flexDirection='column' item xs={12} md={6} position='absolute' top='0' left='0' width='100%' height='100%' className='wrapper-carousel-text'>
                         <Typography className='remark' color='var(--standard)' composant='span'>La platforme par excellence de l'etudiant Camerounais !</Typography>
                         <Grid container>
                             <Grid item xs={12} md={8}>
                                 <Box className='container-box'>
                                     <Typography className='high-text' color='var(--standard)' variant='h5'>
                                        Tout les services de ton universite sur EDUCAMER pour une vie academique plus facilitee.
                                    </Typography>
                                    <Box className='low-text' color='var(--standard)'  component='div'>
                                        Nous digitalisons les services des universite d' Etat et privees au Cameroun afin d'ameliorer la vie des etudiants
                                    </Box>
                                    <Button onClick={handleClick} sx={{textTransform:"initial"}} className='register-btn'>S'incrire</Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box className='promoteur-infos'>
                <Card className='card' sx={{hight:"fit-content"}}>
                    <CardHeader
                        title="Mot de bienvenue du promoteur"
                        sx={{textAlign:"center"}}
                        className='card-header'
                    />
                    <CardContent sx={{padding:'0!important'}}>
                        <Grid  container>
                            <Grid xs={12} md={5} item>
                                <Box style={{width:"100%", height:'89.25%'}}><img src={promoteur} alt='promteur-img' style={{width:"100%", height:'100%', objectFit:"cover", objectPosition:'center'}} /></Box>
                                <Box sx={{textAlign:"center", fontWeight:"bolder", lineHeight:"1.2em", fontSize:'24px'}}>Samuel DIMOU</Box>
                            </Grid>
                            <Grid xs={12} md={7} item className='wrapper-image-promoteur'>
                                <Box>
                                    <Typography variant="body2" color="var(--standard)">
                                        Bienvenue au etudiants du cameroun a EDUCAMER, votre platform numerique qui simplifie la vie de etudiants! Nous sommes honore de vous offrir des services qui comblent vos besoins
                                        tout au long de votre parcour academique.Nous sommes convaicus qu nos services ameliorent votre esperiance universitaire et nous sommes impatient de vous accompagner sur
                                        ce voyage vers  un avenir lumineux.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Box>
            <AboutUs/>
            <Testimony />
            <OurPartner />
            <OurContact />
        </Box>
    )
}
