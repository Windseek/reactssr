import React from 'react';
import ReactDom from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import routes from '@root/router.js';
import { Provider } from 'react-redux';
import { getClientStore } from '@root/store';
import { renderRoutes } from 'react-router-config';

ReactDom.hydrate(
    <Provider store={getClientStore()}>
        <BrowserRouter>
            {renderRoutes(routes)}
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
)