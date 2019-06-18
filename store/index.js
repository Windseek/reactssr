import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// const reducer = (state = {name: "yanglongfei"}, action) => {
//     return state;
// }
import { reducer as homeReducer } from "@src/container/home/store"
const reducer = combineReducers({
    home: homeReducer
})

export const getStore = () => {
    return createStore(reducer, applyMiddleware(thunk));
}

export const getClientStore = () => {
    const defaultStore = window.context;
    return createStore(reducer, defaultStore, applyMiddleware(thunk));
}