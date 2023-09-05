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
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true, // Active l'autoplay
        autoplaySpeed: 2000, // Définissez la vitesse de l'autoplay en millisecondes
        speed: 5000, // Définissez la vitesse de défilement
        pauseOnHover: true, // Mettez en pause le défilement lorsque survolé par la souris
        cssEase: 'linear', // Utilisez 'linear' pour un défilement uniforme
    };
    return (
        <Box component='section' position='relative' className='our-partner'>
            <Typography variant='h5'>Nos Partenaires</Typography>
            <Box className='container' sx={{backgroundColor:"var(--secondary)", color:"var(--dark)"}}>
                <Box className='Box-slider' >
                    <Typography variant='body1'>Decouvrez nos partenaires exclusifs.Ils nous ont fait confiance !</Typography>

                    <Slider {...settings}>
                        <Box>
                            <img src={ud} alt="Image 1" />
                        </Box>
                        <Box>
                            <img src={uy} alt="Image 2" />
                        </Box>
                        <Box>
                            <img src={iuc} alt="Image 3" />
                        </Box>
                        <Box>
                            <img src={iug} alt="Image 3" />
                        </Box>
                        <Box>
                            <img src={uy} alt="Image 3" />
                        </Box>
                    </Slider>
                </Box>
            </Box>
        </Box>
    )
}
