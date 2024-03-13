import Home from '~/pages/Home';
import config from '~/config';
import Login from '~/pages/Login';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Contact from '~/pages/Contact';
import About from '~/pages/AboutUs';
import Blog, { BlogDetail } from '~/pages/Blog';
import Gallery from '~/pages/Gallery';
import Team from '~/pages/Team';
import Tour, { TourDetail } from '~/pages/Tour';
import Destination, { DestinationDetail } from '~/pages/Destination';

const publicRouters = [
    { path: config.routes.home, component: Home },
    { path: config.routes.login, component: Login },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.about_us, component: About },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.blog_detail, component: BlogDetail },
    { path: config.routes.destination, component: Destination },
    { path: config.routes.destination_detail, component: DestinationDetail },
    { path: config.routes.gallery, component: Gallery },
    { path: config.routes.team, component: Team },
    { path: config.routes.team_detail, component: Team },
    { path: config.routes.tour, component: Tour },
    { path: config.routes.tour_detail, component: TourDetail },
];

const privateRoutes = [];

export { publicRouters, privateRoutes };
