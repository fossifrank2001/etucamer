import React from 'react';
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "../../assets/css/web/testimony.css";
import p1 from '../../assets/images/p1.png';
import p2 from '../../assets/images/p2.png';
import p3 from '../../assets/images/p3.png';

// Declare PrevArrow and NextArrow functions before using them
const PrevArrow = (props) => (
    <IconButton className="slick-arrow slick-prev" onClick={props.onClick}>
        <FaArrowCircleLeft />
    </IconButton>
);

const NextArrow = (props) => (
    <IconButton className="slick-arrow slick-next" onClick={props.onClick}>
        <FaArrowCircleRight />
    </IconButton>
);

export default function Testimony() {
    const peoplesTestimony = [
        {
            image: p1,
            description: "Depuis que j'ai créé mon compte EDUCAMER ma vie d'étudiant est devenue agréable",
            author: "Joel UNJI"
        },
        {
            image: p2,
            description: "Cette plateforme a comblé tous mes besoins universitaires. Merci EDUCAMER !",
            author: "Aisha SIEGO"
        },
        {
            image: p3,
            description: "C'est la seule et unique plateforme qui a compris réellement les besoins des étudiants et a apporté une solution complète qui facilite désormais mon parcours académique. Merci infiniment EDUCAMER!",
            author: "Peniel MBAMI"
        },

        {
            image: p3,
            description: "C'est la seule et unique plateforme qui a compris réellement les besoins des étudiants et a apporté une solution complète qui facilite désormais mon parcours académique. Merci infiniment EDUCAMER!",
            author: "Peniel MBAMI"
        },
    ];

    const items = peoplesTestimony.map((testimony, key) => (
        <Card className='card-testimony' sx={{ padding: '0px', margin: '0 10px', height: '100%' }} key={key}>
            <Box sx={{ height: '200px' }}>
                <img style={{ height: '100%', width: '100%' }} src={testimony.image} alt='test' />
            </Box>
            <CardContent sx={{ padding: '0!important' }}>
                <Typography variant='body1'>{`"${testimony.description}"`}</Typography>
                <Typography variant='h6' sx={{ textAlign: 'right', padding: '18px' }}>- {testimony.author}</Typography>
            </CardContent>
        </Card>
    ));

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 5000,
        pauseOnHover: true,
        cssEase: 'linear',
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        dots: true,
    };

    return (
        <Box component='section' position='relative' className='our-testimony'>
            <Typography variant='h5'>Témoignages</Typography>
            <Box className='container' sx={{ backgroundColor: "var(--secondary)", color: "var(--dark)" }}>
                <Typography className='notice' variant='body1' sx={{ textAlign: 'end' }}>Ils en parlent !</Typography>
                <Box className='Box-slider' >
                    <Slider {...settings}>
                        {items}
                    </Slider>
                </Box>
            </Box>
        </Box>
    )
}
