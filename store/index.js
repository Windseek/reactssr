import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// const reducer = (state = {name: "yanglongfei"}, action) => {
//     return state;
// }
import { reducer as homeReducer } from "@src/container/home/store"
const reducer = combineReducers({
    home: homeReducer
})

const getStore = () => {
    return createStore(reducer, applyMiddleware(thunk));
}

export default getStore