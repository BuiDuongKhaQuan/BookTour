import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './DestinationDetail.module.scss';
import Breadcumb from '~/components/Breadcumb';
import { MapPin } from '@phosphor-icons/react';
import images from '~/assets/images';
import SliderCard, { TourCardItem } from '~/components/SliderCard';
import { useParams } from 'react-router-dom';
import { findAllTourByColumn, findDestinationById } from '~/utils/httpRequest';

const cx = classNames.bind(styles);

export default function DestinationDetail() {
    const { id } = useParams();
    const [destination, setDestinations] = useState({});
    const [tours, setTours] = useState([]);

    useEffect(() => {
        getTourByDestinationID(id);
        getDestinationID(id);
    }, [id]);

    const getDestinationID = async (id) => {
        try {
            const response = await findDestinationById(id);
            setDestinations(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const getTourByDestinationID = async (id) => {
        try {
            const response = await findAllTourByColumn('destinationId', id);
            setTours(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={cx('des_detail_wrapper')}>
            <Breadcumb breadcumb_wrapper={'Home'} />
            <div className={cx('des_detail_container')}>
                <div className={cx('des_detail_top')}>
                    <h2>
                        <MapPin weight="fill" color="#3cb371" />
                        {destination.name}
                    </h2>
                    <div className={cx('destination_content')}>
                        <div className="ql-snow">
                            <div className="ql-editor" dangerouslySetInnerHTML={{ __html: destination.information }} />
                        </div>
                    </div>
                </div>
                {tours.length !== 0 && (
                    <div className={cx('tour_list')}>
                        <SliderCard slidesToShow={3}>
                            {tours.map((result, index) => (
                                <TourCardItem data={result} key={index} />
                            ))}
                        </SliderCard>
                    </div>
                )}
            </div>
        </div>
    );
}
