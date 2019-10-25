import axios from 'axios';

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

export function getGameData (){
    return dispatch => {
        dispatch({type : FETCH_DATA_START });
        axios.get('https://www.scorebat.com/video-api/v1/')
        .then(res=>{
            dispatch({
                type: FETCH_DATA_SUCCESS, 
                payload: res.data
            })
        })
        .catch(err=> dispatch({
            type: FETCH_DATA_ERROR,
            payload: err.response, 
            }))
    }
}

