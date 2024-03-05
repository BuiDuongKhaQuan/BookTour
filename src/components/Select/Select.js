import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Select.module.scss';
import Select, { components } from 'react-select';

const cx = classNames.bind(styles);

export default function Selected({ data, props }) {
    const Control = ({ children, ...props }) => (
        <components.Control {...props} className={cx('select')}>
            {data.icon}
            {children}
        </components.Control>
    );

    const [selectedOption, setSelectedOption] = useState(null);
    return (
        <Select
            {...props}
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={data.items}
            placeholder={data.title}
            components={{ Control }}
        />
    );
}
