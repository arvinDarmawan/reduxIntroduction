import {
    INCREMENT,
    DECREMENT
  } from '../actions/action'



const INITIAL_STATE = {
    count:0
}

export function reducer(state=INITIAL_STATE, action) {
    switch(action.type){
        case 'INCREMENT':
        return {
            count:state.count + 1
        };
        case 'DECREMENT':
        return {
            count:state.count - 1
        };
        default:
            return state;
    }
    return state;
}