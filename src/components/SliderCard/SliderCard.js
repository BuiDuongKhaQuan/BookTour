import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import Slider from 'react-slick/lib/slider';
import classNames from 'classnames/bind';
import styles from './SliderCard.module.scss';
import Image from '../Image';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const cx = classNames.bind(styles);

const SliderCard = forwardRef(
    (
        {
            slides,
            large,
            window,
            iconLeftName,
            className,
            tripSmall,
            textInImg = false,
            sellOff = false,
            animation,
            slidesToShow = 1,
            sliderProps,
            children,
        },
        ref,
    ) => {
        const classes = cx('ssss_item', {
            [className]: className,
            window,
            large,
        });

        const settings = {
            infinite: true,
            speed: 1000,
            slidesToShow: slidesToShow,
            slidesToScroll: 1,
            autoplay: true,
            cssEase: 'linear',
            pauseOnHover: true,
            autoplaySpeed: 7000,
            arrows: false,
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
                {children ||
                    slides.map((reslut, index) => (
                        <div className={classes} key={index}>
                            <div className={cx('_wrap')}>
                                <div className={cx('img_box')}>
                                    {sellOff && <span className={cx('dell')}>{reslut.sell}</span>}
                                    <Image
                                        animation={animation}
                                        src={reslut.img}
                                        alt={reslut.name}
                                        className={cx(
                                            window ? 'item_img' : 'item_img_square',
                                            textInImg && 'backgrond_linear',
                                        )}
                                    />
                                </div>
                                <div className={cx('bottom_img', large && 'transparent', textInImg && 'in_img')}>
                                    <div className={cx('bottom_left')}>
                                        {iconLeftName && <div className={cx('item_icon')}>{iconLeftName}</div>}
                                        <h3 className={cx('item_name')}>{reslut.name}</h3>
                                    </div>
                                    <h4
                                        className={cx(
                                            'item_trip',
                                            tripSmall && 'item_trip_small',
                                            sellOff && 'sell_off',
                                        )}
                                    >
                                        {reslut.trip} {sellOff || 'Trips'}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    ))}
            </Slider>
        );
    },
);

export default SliderCard;
