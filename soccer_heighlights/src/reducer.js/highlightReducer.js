
import {FETCH_HIGHLIGHT} from './../actions.js/highLightAction';

const intState = {
    data: []
}
export function highlightReducer(state = intState, action){
    switch(action.type){
        case FETCH_HIGHLIGHT:
            console.log(action)
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
} 