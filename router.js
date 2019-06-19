import Login from '@src/container/login/login.js';
import Home from '@src/container/home/home.js';
import App from '@root/app.js';

const routeConfig = [{
    path: '/',
    component: App,
    key: 'root',
    routes: [
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
}
]
export default routeConfig  