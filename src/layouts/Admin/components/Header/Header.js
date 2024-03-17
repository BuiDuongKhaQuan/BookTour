import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Image from '~/components/Image';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import { Airplane, BellRinging, BookBookmark, House, MapPin, SignOut } from '@phosphor-icons/react';

const cx = classNames.bind(styles);

export default function Header() {
    const MENU = [
        {
            title: 'Dashboard',
            icon: <House weight="bold" />,
            to: '/admin',
        },
        {
            title: 'Destination',
            icon: <Airplane weight="bold" />,
            to: '/admin-destination',
        },
        {
            title: 'Tour',
            icon: <MapPin weight="bold" />,
            to: '/admin-tour',
        },

        {
            title: 'Blog',
            icon: <BookBookmark weight="bold" />,
            to: '/admin-blog',
        },
        {
            title: 'Contact',
            icon: <BellRinging weight="bold" />,
            to: '/admin-contact',
        },
        {
            title: 'Logout',
            icon: <SignOut weight="bold" />,
            to: '/logout',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <Image src={images.logo} width={'200px'} />
            <div className={cx('menu-list')}>
                {MENU.map((result, index) => (
                    <Link to={result.to} className={cx('menu_item')} key={index}>
                        <span>{result.icon}</span>
                        <h6>{result.title}</h6>
                    </Link>
                ))}
            </div>
        </div>
    );
}
