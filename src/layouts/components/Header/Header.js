import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/asstes/images';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import {
    CoinsIcon,
    DarkModeIcon,
    FavoritesIcon,
    FeedbackIcon,
    InboxIcon,
    KeyboardIcon,
    LanguageIcon,
    LiveHubIcon,
    LogOutIcon,
    MessageIcon,
    PlusIcon,
    SetttingIcon,
    UserIcon,
} from '~/components/Icons';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '../Search';
import config from '~/config';
import { ArrowDown, CaretDown, List, MagnifyingGlass } from '@phosphor-icons/react';

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
                },
                {
                    title: 'Team',
                },
                {
                    title: 'Gallery',
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
        <h2 className={cx('warpper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="logo" className={cx('logo_image')} />
                </Link>

                <div className={cx('center')}>
                    {/* <Menu items={MENU}>
                        <div className={cx('menu_item')}>
                            <h6>s</h6>
                            <CaretDown size={20} weight="light" />
                        </div>
                    </Menu> */}
                    {MENU.map((result) =>
                        result.children ? (
                            <Menu items={result.children ? result.children.data : []}>
                                <div className={cx('menu_item')}>
                                    <h6>{result.title}</h6>
                                    <CaretDown size={20} weight="light" />
                                </div>
                            </Menu>
                        ) : (
                            <div className={cx('menu_item')}>
                                <h6>{result.title}</h6>
                            </div>
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
        </h2>
    );
}

export default Header;
