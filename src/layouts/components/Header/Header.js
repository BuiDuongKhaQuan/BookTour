import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import config from '~/config';
import { CaretDown, List, MagnifyingGlass } from '@phosphor-icons/react';

const cx = classNames.bind(styles);

const MENU = [
    {
        title: 'HOME',
        to: '/',
    },
    {
        title: 'DESTINATION',
        to: '/destination',
    },
    {
        title: 'TOUR',
        to: '/tour',
    },
    {
        title: 'PAGES',
        children: {
            data: [
                {
                    title: 'About us',
                    to: '/about-us',
                },
                {
                    title: 'Team',
                    to: '/team',
                },
                {
                    title: 'Gallery',
                    to: '/gallery',
                },
            ],
        },
    },
    {
        title: 'BLOG',
        to: '/blog',
    },
    {
        title: 'CONTACT US',
        to: '/contact',
    },
];

function Header() {
    return (
        <div className={cx('warpper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="logo" className={cx('logo_image')} />
                </Link>

                <div className={cx('center')}>
                    {MENU.map((result, index) =>
                        result.children ? (
                            <Menu items={result.children ? result.children.data : []} key={index}>
                                <Link to={result.to} className={cx('menu_item')}>
                                    <h6>{result.title}</h6>
                                    <CaretDown size={20} weight="light" />
                                </Link>
                            </Menu>
                        ) : (
                            <Link to={result.to} className={cx('menu_item')} key={index}>
                                <h6>{result.title}</h6>
                            </Link>
                        ),
                    )}
                </div>

                <div className={cx('right')}>
                    <Button circle leftIcon={<MagnifyingGlass size={20} className={cx('icon')} />} />
                    <Button circle leftIcon={<List size={20} className={cx('icon')} />} />
                    <Button primary large className={cx('button')}>
                        BOOK YOUR STAY
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Header;
