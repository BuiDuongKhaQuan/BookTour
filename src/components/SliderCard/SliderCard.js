import React from 'react';
import classNames from 'classnames/bind';
import styles from './SliderCard.module.scss';

const cx = classNames.bind(styles);

export default function SliderCard({ slides, large, window, iconLeftName, className, tripSmall, textInImg, sellOff }) {
    const classes = cx('slider_item', {
        [className]: className,
        window,
        large,
    });

    return slides.map((reslut, index) => (
        <div className={classes} key={index}>
            <div className={cx('img_box')}>
                {sellOff && <span className={cx('dell')}>{reslut.sell}</span>}
                <div className={cx(window ? 'item_img' : 'item_img_square', textInImg && 'backgrond_linear')}>
                    <img src={reslut.img} alt={reslut.name} />
                </div>
            </div>
            <div className={cx('bottom_img', large && 'transparent', textInImg && 'in_img')}>
                <div className={cx('bottom_left')}>
                    {iconLeftName && <div className={cx('item_icon')}>{iconLeftName}</div>}
                    <h3 className={cx('item_name')}>{reslut.name}</h3>
                </div>
                <h4 className={cx('item_trip', tripSmall && 'item_trip_small', sellOff && 'sell_off')}>
                    {reslut.trip} {sellOff || 'Trips'}
                </h4>
            </div>
        </div>
    ));
}
