import React from 'react';
import {renderToString} from 'react-dom/server';
import { Route, StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

const getTemplate = (req, res, routes, store, content) => {
    return `<html>
                <head>
                </head>
                <body>
                    <div id="root">${content}</div>
                    <script>
                        window.context = ${JSON.stringify(store.getState())};
                    </script>
                    <script src="./bundle.js"></script>
                <body>
            </html>`
}

const send = function(req, res, routes, store){
        const content = renderToString(
            <Provider store={store} >
                <StaticRouter location={req.path} context={{}}>
                    {renderRoutes(routes)}
                </StaticRouter>
            </Provider>
        );
        res.send(getTemplate(req, res, routes, store, content));
}

export default send;