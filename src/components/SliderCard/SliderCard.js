import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import Slider from 'react-slick/lib/slider';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import CardItem from './CardItem';

const SliderCard = forwardRef(({ slides, slidesToShow = 1, sliderProps, children, ...passProps }, ref) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: 'linear',
        pauseOnHover: true,
        autoplaySpeed: 7000,
        arrows: false,
        swipeToSlide: true,
    };

    let sliderRef = useRef(null);

    useImperativeHandle(ref, () => ({
        slickNext: () => {
            sliderRef.current.slickNext();
        },
        slickPrev: () => {
            sliderRef.current.slickPrev();
        },
    }));

    return (
        <Slider ref={sliderRef} {...settings} {...sliderProps}>
            {children || slides.map((reslut, index) => <CardItem {...passProps} data={reslut} key={index} />)}
        </Slider>
    );
});

export default SliderCard;
