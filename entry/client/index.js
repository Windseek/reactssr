import React from 'react';
import ReactDom from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import routes from '@root/router.js';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const reducer = (state = {name: "yanglongfei"}, action) => {
    return state;
}

const store = createStore(reducer, applyMiddleware(thunk));

ReactDom.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            {
                routes.map((route, i) => (<Route {...route}/>))
            }
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
)