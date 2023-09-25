import React, {useRef} from 'react';
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import "../../assets/css/web/testimony.css";
import p1 from '../../assets/images/p1.png';
import p2 from '../../assets/images/p2.png';
import p3 from '../../assets/images/p3.png';
import {ChevronLeft, ChevronRight} from "@mui/icons-material";

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
    const swiperRef = useRef(null);
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
            description: "nts et a apporté une solution complète qui facilite désormais mon parcours académique. Merci infiniment EDUCAMER!",
            author: "Peniel MBAMI"
        },
    ];

    const items = peoplesTestimony.map((testimony, key) => (
        <SwiperSlide key={key}>
            <Card className='card-testimony' sx={{ padding: '0px', margin: '0 10px', height: '100%' }} key={key}>
            <Box sx={{ height: '200px' }}>
                <img style={{ height: '100%', width: '100%' }} src={testimony.image} alt='test' />
            </Box>
            <CardContent sx={{ padding: '0!important' }}>
                <Typography variant='body1'>{`"${testimony.description}"`}</Typography>
                <Typography variant='h6' sx={{ textAlign: 'right', padding: '18px', fontWeight:'bolder' }}>- {testimony.author}</Typography>
            </CardContent>
        </Card>
        </SwiperSlide>
    ));
    const goPrev = () => {
        if (swiperRef.current) {
            const currentIndex = swiperRef.current.activeIndex;
            const prevIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : 0;
            swiperRef.current.slideTo(prevIndex);
        }
    };

    const goNext = () => {
        if (swiperRef.current) {
            const currentIndex = swiperRef.current.activeIndex;
            const nextIndex = currentIndex + 1 < peoplesTestimony.length ? currentIndex + 1 : peoplesTestimony.length - 1;
            swiperRef.current.slideTo(nextIndex);
        }
    };
    const handleSwiper = (swiper) => {

        swiperRef.current = swiper;
        // Attachez un gestionnaire d'événements slideChange au Swiper
        swiper.on('slideChange', () => {
            const slides = swiper.slides;

            slides.forEach((slide) => {
                slide.style.transition = ''; // Réinitialiser les transitions pour tous les slides
                slide.style.transform = ''; // Réinitialiser les transformations pour tous les slides
            });

            const activeSlide = slides[swiper.activeIndex];
            activeSlide.style.transition = 'transform 0.5s ease'; // Ajouter une transition au slide actif
            activeSlide.style.transform = 'scale(1.05)'; // Appliquer l'effet d'échelle au slide actif
        });
    };
    return (
        <Box component='section' id='temoignages' position='relative' className='our-testimony'>
            <Typography variant='h5'>Témoignages</Typography>
            <Box className='container' sx={{ backgroundColor: "var(--secondary)", color: "var(--dark)" }}>
                <Typography className='notice' variant='body1' sx={{ textAlign: 'end' }}>Ils en parlent !</Typography>
                <Box className='Box-slider' >
                    <Box  className='wrapper-testimony'>
                        <Swiper
                            onSwiper={handleSwiper}
                            modules={[Autoplay, Navigation, Pagination]}
                            className="mySwiper"
                            spaceBetween={30} // Espace entre les slides
                            slidesPerView={3} // Nombre de slides par vue
                            centeredSlides={true} // Slide actif centré
                            slidesPerGroup={1} // Défiler un slide à la fois
                            loop={true} // Activez la boucle infinie
                            navigation={false}
                            autoplay={{ // Configurez l'autoplay
                                delay: 3000, // Délai entre les diapositives en millisecondes (par exemple, 3 secondes)
                                disableOnInteraction: false, // L'autoplay continue même après l'interaction de l'utilisateur
                            }}
                            pagination={{
                                dynamicBullets: true,
                            }}
                        >
                            {items}
                        </Swiper>

                        <div className="custom-navigation">
                            <ChevronLeft className="custom-button custom-prev" onClick={goPrev}/>
                            <ChevronRight className="custom-button custom-next" onClick={goNext}  />
                        </div>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
