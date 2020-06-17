export const FETCH_HIGHLIGHT = 'FETCH_HIGHLIGHT';

export function highLightAction (item){
    return {
        type: FETCH_HIGHLIGHT,
        payload: item
    }
}