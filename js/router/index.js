import Home from '../views/home.js';
import About from '../views/about.js';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
];
const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes
});
export default router;