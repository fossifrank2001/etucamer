import React, { useEffect, useRef, useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Grid,
    Typography,
} from '@mui/material';
import '../../assets/css/web/home.css';
import img1 from '../../assets/images/banner1.jpg';
import img2 from '../../assets/images/banner2.jpg';
import promoteur from '../../assets/images/promoteur.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AboutUs from './AboutUs';
import OurContact from './OurContact';
import OurPartner from './OurPartner';
import Testimony from './Testimony';
import { useNavigate } from 'react-router-dom';
import { REGISTER_URL } from '../../components/utils/utilsFunction';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const texts = [
    "Tous les services de ton université sur EDUCAMER pour une vie académique plus facile.",
    "Fais de tes études une expérience simplifiée avec EDUCAMER.",
    "EDUCAMER, ta clé pour une vie académique plus fluide.",
    "Découvre un monde d'opportunités académiques sur EDUCAMER.",
];

export default function Home() {
    const animationRef = useRef(null);
    const navigate = useNavigate();
    const [currentText, setCurrentText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const delay = isDeleting ? 75 : 100; // Adjust the typing and deleting speed here

        const text = texts[textIndex];
        const textLength = currentText.length;

        if (!isDeleting && textLength === text.length) {
            // Start deleting
            setIsDeleting(true);
        } else if (isDeleting && textLength === 0) {
            // Move to the next text
            setIsDeleting(false);
            setTextIndex((textIndex + 1) % texts.length);
        }

        const timer = setTimeout(() => {
            setCurrentText((prevText) => {
                return isDeleting
                    ? prevText.slice(0, -1)
                    : text.slice(0, prevText.length + 1);
            });
        }, delay);

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, textIndex]);

    useEffect(() => {
        document.title = 'ETUCAMER | Home';
        AOS.init({
            duration: 1000, // Specify the animation duration in milliseconds
        });
    }, []);


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true, // Enable fade effect
        cssEase: 'linear', // Use 'linear' for a uniform fade
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000,
    };

    const handleClick = () => {
        navigate(REGISTER_URL);
    };

    return (
        <Box component="main" ref={animationRef}>
            <Box component="section" position="relative" className="baniere">
                <Grid container className="container">
                    <Grid item xs={12} md={4} className="box-1"></Grid>
                    <Grid item xs={0} md={8} className="box-2">
                        <Slider {...settings}>
                            <div>
                                <img
                                    src={img1}
                                    alt="carousel-image"
                                    style={{
                                        objectFit: 'cover',
                                        objectPosition: 'center',
                                        width: '100%',
                                        height: '100%',
                                    }}
                                />
                            </div>
                            <div>
                                <img
                                    src={img2}
                                    alt="carousel-image"
                                    style={{
                                        objectFit: 'cover',
                                        objectPosition: 'center',
                                        width: '100%',
                                        height: '100%',
                                    }}
                                />
                            </div>
                        </Slider>
                    </Grid>
                </Grid>

                <Grid container className="wrapper">
                    <Grid
                        display="flex"
                        flexDirection="column"
                        item
                        xs={12}
                        md={8}
                        position="absolute"
                        top="0"
                        left="0"
                        width="100%"
                        height="100%"
                        className="wrapper-carousel-text"
                    >
                        <Typography
                            className="remark"
                            color="var(--standard)"
                            component="span"

                            data-aos="zoom-in-up"
                            data-aos-duration="8000"
                        >
                            La plateforme par excellence de l'étudiant Camerounais !
                        </Typography>
                        <Grid container className="">
                            <Grid className="" item xs={12} md={10}>
                                <Box className="container-box">
                                    <Typography
                                        className="high-text"
                                        color="var(--standard)"
                                        variant="h5"

                                        data-aos="zoom-in-up"
                                        data-aos-duration="8000"
                                    >
                                        {currentText}
                                    </Typography>
                                    <Box
                                        className="low-text"
                                        color="var(--standard)"
                                        component="div"

                                        data-aos="zoom-in-up"
                                        data-aos-duration="8000"
                                    >
                                        Nous digitalisons les services des universités d'État et
                                        privées au Cameroun afin d'améliorer la vie des étudiants.
                                    </Box>
                                    <Button
                                        onClick={handleClick}
                                        sx={{ textTransform: 'initial' }}
                                        className="register-btn"
                                    >
                                        S'inscrire
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box className="promoteur-infos">
                <Card className="card" sx={{ height: 'fit-content' }}>
                    <CardHeader
                        title="Mot de bienvenue du promoteur"
                        sx={{ textAlign: 'center' }}
                        className="card-header"
                    />
                    <CardContent sx={{ padding: '0!important' }}>
                        <Grid container>
                            <Grid xs={12} md={5} item>
                                <Box
                                    style={{
                                        width: '100%',
                                        height: '89.25%',
                                    }}
                                >
                                    <img
                                        src={promoteur}
                                        alt="promteur-img"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'center',
                                        }}
                                    />
                                </Box>
                                <Box
                                    className="promoteur"
                                    sx={{
                                        textAlign: 'center',
                                        fontWeight: 'bolder',
                                        lineHeight: '1.2em',
                                        fontSize: '24px',
                                    }}
                                >
                                    Samuel DIMOU
                                </Box>
                            </Grid>
                            <Grid xs={12} md={7} item className="wrapper-image-promoteur">
                                <Box>
                                    <Typography variant="body2" color="var(--standard)">
                                        Bienvenue aux étudiants du Cameroun sur EDUCAMER, votre
                                        plateforme numérique qui simplifie la vie des étudiants! Nous
                                        sommes honorés de vous offrir des services qui comblent vos
                                        besoins tout au long de votre parcours.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Box>
            <AboutUs />
            <Testimony />
            <OurPartner />
            <OurContact />
        </Box>
    );
}
