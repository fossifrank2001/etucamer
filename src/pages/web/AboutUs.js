import React from 'react'
import '../../assets/css/web/aboutUs.css'
import {Box, Container, Typography} from "@mui/material";
export default function AboutUs() {
    return (
        <Box  component='section' id='A-propos-de-nous' position='relative' className='about-us'>
            <Typography variant='h5'>A propos de nous</Typography>
            <Box className='container' sx={{backgroundColor:"var(--secondary)", color:"var(--dark)"}}>
                <Box data-aos="flip-left"
                     data-aos-easing="ease-out-cubic"
                     data-aos-duration="4000"  className='wrapper-about-us'>
                    <span style={{fontSize: '24px', color:'var(--standard)'}}>ETUCAMER </span> est une platfrome digital inovante concue dans le but
                    pour faciliter et ameliorer la vie des etudiants au Cameroun. Elle offre la fonctionnalites uniqueset des services essentielles
                    pour les etudiants ce qui rend leur vie beaucoup plus simple et fluide.
                </Box>
            </Box>
        </Box>
    )
}
