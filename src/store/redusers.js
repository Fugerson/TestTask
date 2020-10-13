import { combineReducers } from "redux";
import { itemReducer } from './item/redusers';

export default combineReducers({
    item: itemReducer 
})