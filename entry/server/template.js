import Home from  '@src/container/home/home.js';
import React from 'react';
import {renderToString} from 'react-dom/server';
import { Route, StaticRouter } from 'react-router-dom';

import routes from '@root/router.js';

const getTemplate = function(req){
    const content = renderToString(
        <StaticRouter location={req.path} context={{}}>
            <div>
                {routes.map((route, i) => (<Route {...route}/>))}
            </div>
        </StaticRouter>
    );

    return `<html><head><head><body><div id="root"> ${content}</div>
    <script src="./bundle.js"></script>
    <body></html>`
}
export default getTemplate;