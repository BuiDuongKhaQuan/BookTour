import config from '~/config';
import { AdminHome, AdminTour } from '~/pages/Admin';
import {
    AboutUs,
    Blog,
    BlogDetail,
    Contact,
    Destination,
    DestinationDetail,
    Error404,
    Home,
    Profile,
    Tour,
    TourDetail,
} from '~/pages/User';

const publicRouters = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.about_us, component: AboutUs },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.blog_detail, component: BlogDetail },
    { path: config.routes.destination, component: Destination },
    { path: config.routes.destination_detail, component: DestinationDetail },
    { path: config.routes.tour, component: Tour },
    { path: config.routes.tour_detail, component: TourDetail },
    { path: config.routes.error_404, component: Error404 },
];

const privateRoutes = [
    { path: config.routes.admin, component: AdminHome },
    { path: config.routes.admin_tour, component: AdminTour },
    { path: config.routes.admin_tour_detail, component: AdminHome },
    { path: config.routes.admin_destination, component: AdminHome },
    { path: config.routes.admin_destination_detail, component: AdminHome },
];

export { publicRouters, privateRoutes };
