import Login from '@src/container/login/login.js';
import Home from '@src/container/home/home.js';

const routeConfig = [
    {
        path: '/',
        component: Login,
        exact: true
    },
    {
        path: '/login',
        component: Login,
        exact: true
    },
    {
        path: '/home',
        component: Home,
        exact: true
    }
]
export default routeConfig  