import { POPUP_CHANGE_STATE } from "./action"


let DEFSTATE = {
    statePopup: false
}




 function popupReducer(state = DEFSTATE, action) {
    switch (action.type) {
        case POPUP_CHANGE_STATE:

            return {
                
                ...state,
                statePopup: action.payload
            };
        default: return state;
    }
} 

export {popupReducer}