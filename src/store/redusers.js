import { combineReducers } from "redux";
import { itemReducer } from './item/redusers';
import { popupReducer } from './Showpopup/redusers';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    item: itemReducer,
    popup: popupReducer,
    form: formReducer
})