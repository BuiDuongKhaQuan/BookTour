import Home from '~/pages/Home';

import { HeaderOnly } from '~/layouts';
import config from '~/config';
import Login from '~/pages/Login';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Contact from '~/pages/Contact';
import About from '~/pages/AboutUs';
import Blog from '~/pages/Blog';
import Destination from '~/pages/Destination';
import Gallery from '~/pages/Gallery';
import Team from '~/pages/Team';
import Tour from '~/pages/Tour';

const publicRouters = [
    { path: config.routes.home, component: Home },
    { path: config.routes.login, component: Login },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.contact, component: Contact, layout: HeaderOnly },
    { path: config.routes.about_us, component: About },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.blog_detail, component: Blog },
    { path: config.routes.destination, component: Destination },
    { path: config.routes.destination_detail, component: Destination },
    { path: config.routes.gallery, component: Gallery },
    { path: config.routes.team, component: Team },
    { path: config.routes.team_detail, component: Team },
    { path: config.routes.tour, component: Tour },
    { path: config.routes.tour_detail, component: Tour },
];

const privateRoutes = [];

export { publicRouters, privateRoutes };
