import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    // console.log('Action received ', action);
    switch (action.type) {
      case FETCH_WEATHER:
        // return state.contact([action.payload.data]); //use contact instead push
        return [action.payload.data, ...state]; // both are same.. never use state.push
    }
    return state;
}
