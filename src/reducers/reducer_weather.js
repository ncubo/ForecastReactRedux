import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    // console.log('Action received ', action);
    switch (action.type) {
      case FETCH_WEATHER:
        // return state.contact([action.payload.data]); //use contact instead push, concat create a new array (a copy)
        // always return a new state( a copy), not the original state (I mean dont modify state)
        return [action.payload.data, ...state]; // both are same.. never use state.push
    }
    return state;
}
