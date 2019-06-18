import Login from '@src/container/login/login.js';
import Home from '@src/container/home/home.js';

const routeConfig = [
    {
        path: '/',
        component: Login,
        exact: true,
        key: 'root'
    },
    {
        path: '/login',
        component: Login,
        exact: true,
        key: 'login'
    },
    {
        path: '/home',
        component: Home,
        exact: true,
        key: 'home',
        loadData: Home.loadData
    }
]
export default routeConfig  