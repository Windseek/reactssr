import React from 'react';
import ReactDom from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import routes from '@root/router.js';

ReactDom.hydrate(
    <BrowserRouter>
    {
        routes.map((route, i) => (<Route {...route}/>))
    }
    </BrowserRouter>, document.getElementById("root")
)