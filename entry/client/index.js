import React from 'react';
import ReactDom from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import routes from '@root/router.js';
import { Provider } from 'react-redux';
import { getClientStore } from '@root/store';

ReactDom.hydrate(
    <Provider store={getClientStore()}>
        <BrowserRouter>
            {
                routes.map((route, i) => (<Route {...route}/>))
            }
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
)