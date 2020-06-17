import {FETCH_DATA_SUCCESS, FETCH_DATA_START, FETCH_DATA_ERROR} from './../actions.js/gameAction'
    const initialState = {
        isLoading: false,
    data: null,
    error : null
}

export function highlightsReducer (state = initialState, action){ 
    switch(action.type){
        case FETCH_DATA_START:
            return{
                ...state,
                isLoading: true
            }
        case FETCH_DATA_SUCCESS:
            return{
                ...state,
                isLoading: false,
                data: action.payload,
            }
        case FETCH_DATA_ERROR:
            return{
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state
    }
}   