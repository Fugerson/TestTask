import { combineReducers } from "redux";
import { itemReducer } from './item/redusers';
import { popupReducer } from './Showpopup/redusers';

export default combineReducers({
    item: itemReducer,
    popup: popupReducer 
})