import React from 'react'
import {Box, Tooltip, Typography} from "@mui/material";
import {Facebook, GitHub, Instagram, LinkedIn, Twitter} from "@mui/icons-material";
import {Link} from "react-router-dom";
import  '../../assets/css/web/ourContact.css'
export default function OurContact() {
    return (
        <Box component='section' id='nos-contacts' position='relative' className='our-contact'>
            <Typography variant='h5'>Nos Contacts</Typography>
            <Box className='container' sx={{backgroundColor:"var(--secondary)", color:"var(--dark)"}}>
                <Typography data-aos="fade-down" data-aos-duration="1000" variant='body1'>Basee a Nyala - Bonne Fontaine</Typography>
                <Typography data-aos="fade-down" data-aos-duration="2000" variant='body1'>Douala - Cameroun</Typography>
                <Typography data-aos="fade-down" data-aos-duration="3000" variant='body1'>Telephone: 657 178 302 / 651 85 13 65 </Typography>
                <Box data-aos="fade-down" data-aos-duration="4000" className='social-medias'>
                    <Typography data-aos="fade-down" data-aos-duration="4500" variant='body1'>Suivez - nous sur nos pages</Typography>
                    <Typography data-aos="fade-down" data-aos-duration="5000"  sx={{display:'flex', alignItems:'center', justifyContent:'center'}} variant='body1'>
                        <Tooltip title='join us on Facebook'><Link to=''><Facebook /></Link></Tooltip>
                        <Tooltip title='join us on Twitter'><Link to=''><Twitter /></Link></Tooltip>
                        <Tooltip title='join us on Instagram'><Link to=''><Instagram /></Link></Tooltip>
                        <Tooltip title='join us on Linkedin'><Link to=''><LinkedIn /></Link></Tooltip>
                        <Tooltip title='join us on GitHub'><Link to=''><GitHub /></Link></Tooltip>
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}
