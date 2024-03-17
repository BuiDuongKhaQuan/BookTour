import React from 'react';
import classNames from 'classnames/bind';
import styles from './Tour.module.scss';

const cx = classNames.bind(styles);

export default function Tour() {
    return <div className={cx('wrapper')}>Tour</div>;
}