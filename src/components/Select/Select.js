import React from 'react';
import classNames from 'classnames/bind';
import styles from './Select.module.scss';
import Select, { components } from 'react-select';

const cx = classNames.bind(styles);

export default function Selected({ data, className, classNameSelect, defaultValue, onChange, placeholder, ...props }) {
    const Control = ({ children, ...props }) => (
        <components.Control {...props} className={cx('select', classNameSelect)}>
            {data.icon && data.icon}
            {children}
        </components.Control>
    );

    return (
        <Select
            {...props}
            defaultValue={defaultValue}
            onChange={onChange}
            options={data.items}
            placeholder={placeholder ? placeholder : data.title}
            components={{ Control }}
            className={className}
        />
    );
}
