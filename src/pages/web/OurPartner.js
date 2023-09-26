import React from 'react'
import '../../assets/css/web/ourPartner.css'
import {Box, Typography} from "@mui/material";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ud from '../../assets/images/ud.png'
import uy from '../../assets/images/uy.png'
import iuc from '../../assets/images/iuc.png'
import iug from '../../assets/images/iug.png'
export default function OurPartner() {
    const settings = {
        infinite: true,
        slidesToShow: 4, // Afficher 4 slides par défaut
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 5000,
        pauseOnHover: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 768, // Définissez une limite de largeur d'écran pour les appareils mobiles
                settings: {
                    slidesToShow: 2, // Afficher 2 slides sur les appareils mobiles
                },
            },
        ],
    };
    return (
        <Box component='section' id='nos-partenaires' position='relative' className='our-partner'>
            <Typography variant='h5'>Nos Partenaires</Typography>
            <Box className='container' sx={{backgroundColor:"var(--secondary)", color:"var(--dark)"}}>
                <Box className='Box-slider' >
                    <Box  className='wrapper-patner'>
                        <Typography variant='body1'>Decouvrez nos partenaires exclusifs.Ils nous ont fait confiance !</Typography>

                        <Slider {...settings}>
                            <Box data-aos="fade-left">
                                <img src={ud} alt="Image 1" />
                            </Box>
                            <Box data-aos="fade-left">
                                <img src={uy} alt="Image 2" />
                            </Box>
                            <Box data-aos="fade-left">
                                <img src={iuc} alt="Image 3" />
                            </Box>
                        </Slider>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
