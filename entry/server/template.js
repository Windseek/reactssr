import Home from  '@src/container/home/home.js';
import React from 'react';
import {renderToString} from 'react-dom/server';
import { Route, StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from '@root/router.js';
import getScore from '@root/store';

const getTemplate = function(req){
  
    const content = renderToString(
        <Provider store={getScore()}>
            <StaticRouter location={req.path} context={{}}>
                {routes.map((route, i) => (<Route {...route}/>))}
            </StaticRouter>
        </Provider>
    );

    return `<html><head><head><body><div id="root">${content}</div><script src="./bundle.js"></script><body></html>`
}
export default getTemplate;