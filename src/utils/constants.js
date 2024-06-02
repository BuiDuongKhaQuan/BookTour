import images from '~/assets/images';

const notification = {
    title: 'Wonderful!',
    message: 'Configurable',
    type: 'success',
    insert: 'top',
    container: 'top-right',
    dismiss: {
        duration: 3000,
        onScreen: true,
        pauseOnHover: true,
        showIcon: true,
    },
    animationIn: ['animate__animated animate__bounceIn'], // `animate.css v4` classes
    animationOut: ['animate__animated animate__flipOutX'], // `animate.css v4` classes
};
const initialOptions = {
    'client-id': 'AR1QUPTEt9oj4C3raLjQOGYEGcrFzgWLqHISnrWaX5vFSpT6Vt0sXsndBIqPrEfLuktbyT_rexxOnGO-',
    'enable-funding': 'venmo',
    'disable-funding': '',
    currency: 'USD',
    'data-page-type': 'product-details',
    components: 'buttons',
    'data-sdk-integration-source': 'developer-studio',
};
const DATA_CATE = [
    {
        title: 'Hill Tracking(8)',
        to: '/index',
    },
    {
        title: 'Adventure(5)',
        to: '/index',
    },
    {
        title: 'Village Beauty(6)',
        to: '/index',
    },
    {
        title: 'Night View(8)',
        to: '/index',
    },
    {
        title: 'Religious Place(7)',
        to: '/index',
    },
    {
        title: 'Lake View(3)',
        to: '/index',
    },
    {
        title: 'Sea Area(5)',
        to: '/index',
    },
    {
        title: 'Resourt(4)',
        to: '/index',
    },
];
const DATA_DEAL = [
    { title: 'Brooklyn Christmas Lights', img: images.cat_1_1, price: 250 },
    { title: 'Brooklyn Christmas Lights', img: images.cat_1_1, price: 250 },
    { title: 'Brooklyn Christmas Lights', img: images.cat_1_1, price: 250 },
];
const DATA_SELECT = [
    {
        id: 1,
        title: 'Ticket Types',
        items: [
            {
                value: '1',
                label: 'Basic Ticket',
            },
            {
                value: '2',
                label: 'Standard Ticket (+30%)',
            },
            {
                value: '3',
                label: 'Vip Ticket (+60%)',
            },
        ],
    },
    {
        id: 2,
        title: 'Adult',
        items: [
            {
                value: '1',
                label: '1 Adult',
            },
            {
                value: '2',
                label: '2 Adult',
            },
            {
                value: '3',
                label: '3 Adult',
            },
        ],
    },
    {
        id: 3,
        title: 'Child',
        items: [
            {
                value: '0',
                label: '0 Child',
            },
            {
                value: '1',
                label: '1 Child',
            },
            {
                value: '2',
                label: '2 Child',
            },
            {
                value: '3',
                label: '3 Child',
            },
        ],
    },
];
const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
    [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
    [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
    [{ direction: 'rtl' }], // text direction

    [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ['clean'], // remove formatting button
];

const modulesQuill = {
    toolbar: toolbarOptions,
};

export { notification, initialOptions, DATA_CATE, DATA_DEAL, DATA_SELECT, modulesQuill };
