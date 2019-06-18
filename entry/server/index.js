import express from 'express';
import send from './template';
import { getStore } from '@root/store';
import routes from '@root/router.js';
import { matchRoutes } from 'react-router-config';

const app = express()
app.use(express.static('public'));


app.get('*', (req, res) => {
    const store = getStore();
    const promises = [];
    const matchedRoutes = matchRoutes(routes, req.path);
    /**
     *  执行loadData方法
     * */
    matchedRoutes.map((item) => {
        promises.push(item.route.loadData(store));
    });
    Promise.all(promises).then(()=> {
        send(req, res, routes, store)
    })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))