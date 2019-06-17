import { PAGELIST } from './constants.js'

const defaultState = {
    list: [],
    name: 'dell'
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case PAGELIST: 
            const currentState = {
                ...state,
                list: action.list
            }
            return currentState;
        default: 
            return state;
    }
}