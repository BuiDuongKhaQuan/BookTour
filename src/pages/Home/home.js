import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import 'tippy.js/dist/tippy.css';
import images from '~/assets/images';
import Select from '~/components/Select';
import Button from '~/components/Button';
import {
    ArrowLeft,
    ArrowRight,
    CalendarBlank,
    CurrencyDollarSimple,
    MapPin,
    PersonSimpleBike,
} from '@phosphor-icons/react';
import SupTitle from '~/components/SupTitle';
import SliderCard from '~/components/SliderCard';

const cx = classNames.bind(styles);

function Home() {
    const DATA_SELECT = [
        {
            id: 1,
            title: 'Destination',
            icon: <MapPin size={20} weight="fill" color="#3cb371" />,
            items: [
                {
                    value: 'switzerland',
                    label: 'Switzerland',
                },
                {
                    value: 'barcelona',
                    label: 'Barcelona',
                },
                {
                    value: 'amsterdam',
                    label: 'Amsterdam',
                },
                {
                    value: 'budapestCity',
                    label: 'Budapest City',
                },
            ],
        },
        {
            id: 2,
            title: 'Activities',
            icon: <PersonSimpleBike size={20} weight="fill" color="#3cb371" />,
            items: [
                {
                    value: 'travel',
                    label: 'Travel',
                },
                {
                    value: 'hiking',
                    label: 'Hiking',
                },
                {
                    value: 'airBallon',
                    label: 'Air Ballon',
                },
                {
                    value: 'peakClimbing',
                    label: 'Peak Climbing',
                },
            ],
        },
        {
            id: 3,
            title: 'Duration',
            icon: <CalendarBlank size={20} weight="fill" color="#3cb371" />,
            items: [
                {
                    value: '3',
                    label: '0 - 3 Days',
                },
                {
                    value: '7',
                    label: '0 - 7 Days',
                },
                {
                    value: '8',
                    label: '3 - 8 Days',
                },
                {
                    value: '12',
                    label: '7 - 12 Days',
                },
            ],
        },
        {
            id: 4,
            title: 'Budget',
            icon: <CurrencyDollarSimple size={20} weight="fill" color="#3cb371" />,
            items: [
                {
                    value: '1',
                    label: '100$ - 300$',
                },
                {
                    value: '3',
                    label: '300$ - 700$',
                },
                {
                    value: '7',
                    label: '700 - 1000$',
                },
                {
                    value: '10',
                    label: '1000$ - 1500$',
                },
            ],
        },
    ];

    const DATA_SERVICE = {
        content:
            'Completely maintain parallel e-business without magnetic relationships. Mesh seamless web-readiness rather.',
        data: [
            { id: 1, img: images.feature_1_1, title: 'A Lot of Discount' },
            { id: 2, img: images.feature_1_2, title: 'Best Guide' },
            { id: 3, img: images.feature_1_3, title: '24/7 Support' },
            { id: 4, img: images.feature_1_4, title: 'Travel Management' },
        ],
    };

    const DATA_SLIDER = [
        {
            name: 'Adventure',
            trip: '12',
            img: images.cat_1_1,
        },
        {
            name: 'Beaches',
            trip: '22',
            img: images.cat_1_2,
        },
        {
            name: 'Boat Tour',
            trip: '30',
            img: images.cat_1_3,
        },
        {
            name: 'City Tour',
            trip: '13',
            img: images.cat_1_4,
        },
        {
            name: 'Hiking',
            trip: '32',
            img: images.cat_1_5,
        },
        {
            name: 'Resort',
            trip: '12',
            img: images.cat_1_6,
        },
        {
            name: 'Religious',
            trip: '07',
            img: images.cat_1_7,
        },
    ];

    const DATA_DESTINATION = [
        {
            name: 'Switzerland',
            trip: '6+',
            img: images.dest_2_1,
        },
        {
            name: 'Barcelona',
            trip: '8+',
            img: images.dest_2_2,
        },
        {
            name: 'Amsterdam',
            trip: '6+',
            img: images.dest_2_3,
        },
        {
            name: 'Budapest City',
            trip: '5+',
            img: images.dest_2_4,
        },
    ];

    const DATA_OFFERS = [
        {
            name: 'Switzerland',
            trip: '6+',
            img: images.tour_3_1,
            sell: '25% Off',
        },
        {
            name: 'Barcelona',
            trip: '8+',
            img: images.tour_3_2,
            sell: '25% Off',
        },
        {
            name: 'Amsterdam',
            trip: '6+',
            img: images.tour_3_3,
            sell: '25% Off',
        },
    ];

    const DATA_PROCESS = [
        {
            title: 'Find Ans Enjoy A Trip That Fits Your Lifestyle With Your Friends',
            number: '01',
            content:
                'Globally productize flexible potentialities via high-payoff markets. Proactively revolutionize parallel growth strategies.',
        },
        {
            title: 'Travel With More Confidence',
            number: '02',
            content:
                'Globally productize flexible potentialities via high-payoff markets. Proactively revolutionize parallel growth strategies.',
        },
        {
            title: 'See What You Really Get Form Us',
            number: '03',
            content:
                'Globally productize flexible potentialities via high-payoff markets. Proactively revolutionize parallel growth strategies.',
        },
    ];

    const ServiceItem = ({ data, content }) =>
        data.map((result, index) => (
            <div className={cx('container_service')} key={index}>
                <div className={cx('img_service')}>
                    <img src={result.img} alt="Service" />
                </div>
                <div className={cx('title_service')}>
                    <h3>{result.title}</h3>
                </div>
                <div className={cx('content_service')}>
                    <p>{content}</p>
                </div>
            </div>
        ));

    const ProcessItem = ({ data }) =>
        data.map((reslut, index) => (
            <div className={cx('process-list')} key={index}>
                <div className={cx('process-list__number')}>{reslut.number}</div>
                <div className={cx('media-body')}>
                    <h3 className={cx('process-list__title')}>{reslut.title}</h3>
                    <p className={cx('process-list__text')}>{reslut.content}</p>
                </div>
            </div>
        ));

    return (
        <div className={cx('warpper')}>
            <div className={cx('banner')}>
                <div className={cx('img_hello')}></div>
                <div className={cx('container')}>
                    <div className={cx('content')}>
                        <SupTitle primary right title={'Enjoy Every Good Moment'} />
                        <h1 className={cx('hero_title')}>Plan Your Trip With</h1>
                        <h1 className={cx('hero_title')}>Travel House.</h1>
                        <p className={cx('p_title')}>
                            We always make our customer happy by providing as many choices possible for customers in
                            traveling.
                        </p>
                    </div>
                </div>
                <div className={cx('tree_1')}>
                    <img src={images.tree_1} alt="tree" />
                </div>
                <div className={cx('tree_2')}>
                    <img src={images.tree_2} alt="tree" />
                </div>
                <div className={cx('cloud_1')}>
                    <img src={images.cloud_1} alt="cloud" />
                </div>
                <div className={cx('cloud_2')}>
                    <img src={images.cloud_2} alt="cloud" />
                </div>
                <div className={cx('cloud_3')}>
                    <img src={images.cloud_3} alt="cloud" />
                </div>
            </div>
            <div className={cx('search')}>
                <div className={cx('search_container')}>
                    <div className={cx('search_box')}>
                        <form action="mail.php" method="POST" className={cx('tour_search')}>
                            {DATA_SELECT.map((result) => (
                                <Select data={result} key={result.id} />
                            ))}
                            <Button large primary>
                                SEARCH
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
            <div className={cx('service')}>
                <ServiceItem data={DATA_SERVICE.data} content={DATA_SERVICE.content} />
            </div>
            <div className={cx('category')}>
                <SupTitle left right primary small title={'Categories'} />
                <h2>Browse By Destination Category</h2>
                <div className={cx('category_row')}>
                    <SliderCard window slides={DATA_SLIDER} />
                </div>
            </div>
            <div className={cx('aboutus')}>
                <div className={cx('about_left')}>
                    <div className={cx('about_left_top')}>
                        <SupTitle right small primary title={'About Us'} />
                        <h2>The Perfect Travel Place For You & Your Family</h2>
                        <p>
                            Progressively impact multidisciplinary leadership skills via e-business leadership skills.
                            Holisticly repurpose multifunctional data before turnkey information. Globally restore
                            client-focused potentialities before scalable core competencies.
                        </p>
                    </div>
                    <div className={cx('about_left_bottom')}>
                        <div className={cx('left_bottom_item')}>
                            <h2>25+</h2>
                            <p>Years Of Experiences</p>
                        </div>
                        <div className={cx('left_bottom_item')}>
                            <h2>15+</h2>
                            <p>Years Of Experiences</p>
                        </div>
                        <div className={cx('left_bottom_item')}>
                            <h2>35+</h2>
                            <p>Years Of Experiences</p>
                        </div>
                    </div>
                </div>
                <div className={cx('about_right')}>
                    <div className={cx('right_img1')}>
                        <img src={images.about_2_1} alt="Img" />
                    </div>
                    <div className={cx('right_img2')}>
                        <img src={images.about_2_2} alt="Img" />
                    </div>
                    <div className={cx('right_img3')}>
                        <img src={images.about_shape_2} alt="Img" />
                    </div>
                </div>
            </div>
            <div className={cx('destination', 'category')}>
                <SupTitle left right primary small title={'Top Destinations'} />
                <h2>Popular Destinations</h2>
                <div className={cx('destination_row')}>
                    <SliderCard
                        large
                        tripSmall
                        iconLeftName={<MapPin size={30} weight="fill" color="#3cb371" />}
                        slides={DATA_DESTINATION}
                    />
                </div>
            </div>
            <div className={cx('offers')}>
                <div className={cx('offers_background')} style={{ backgroundImage: `url(${images.pattern_bg_2})` }}>
                    <div className={cx('offers_left')} style={{ backgroundImage: `url(${images.pattern_bg_3})` }}>
                        <img src={images.offer_1} alt="Img" />
                        <ul className={cx('offers_countdown')}>
                            <li>
                                <div className={cx('count_number')}>00</div>
                                <span>Days</span>
                            </li>
                            <li>
                                <div className={cx('count_number')}>00</div>
                                <span>Housr</span>
                            </li>
                            <li>
                                <div className={cx('count_number')}>00</div>
                                <span>Minutes</span>
                            </li>
                            <li>
                                <div className={cx('count_number')}>00</div>
                                <span>Senconds</span>
                            </li>
                        </ul>
                    </div>

                    <div className={cx('offers_right')}>
                        <div className={cx('offers_header')}>
                            <div className={cx('header_title')}>
                                <SupTitle right small title={'Deals & Offers'} />
                                <h2>Last Minute Amazing Deals</h2>
                            </div>
                            <div className={cx('arrow_list')}>
                                <Button
                                    className={cx('arrow_button')}
                                    circle
                                    leftIcon={<ArrowLeft size={22} weight="bold" />}
                                />
                                <Button
                                    className={cx('arrow_button')}
                                    circle
                                    leftIcon={<ArrowRight size={22} weight="bold" />}
                                />
                            </div>
                        </div>
                        <div className={cx('offers_list')}>
                            <SliderCard large textInImg sellOff slides={DATA_OFFERS} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('map', 'destination', 'category')}>
                <SupTitle left right primary small title={'Top Destinations'} />
                <h2>Explore the World For Yourself</h2>
                <div className={cx('map_row')}>
                    <div className={cx('process_list_wrap')}>
                        <ProcessItem data={DATA_PROCESS} />
                    </div>
                    <div className={cx('map_mask')}>
                        <div className={cx('map_mask_img')} style={{ maskImage: `url(${images.map_mask_1})` }}>
                            <img src={images.map_1} alt="Img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('featured')}></div>
            <div className={cx('team')}></div>
            <div className={cx('from')}></div>
            <div className={cx('new')}></div>
        </div>
    );
}

export default Home;
