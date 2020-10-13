import { ITEM_CHANGE_IMG} from "./action"
import { ITEM_CHANGE_NAME } from "./action"
import { ITEM_CHANGE_PRICE} from "./action"
import { ITEM_CHANGE_TEXT } from "./action"

let DEFSTATE = {
    items: [
        {
            img: "https://img.icons8.com/cotton/64/000000/frankfurter.png",
            name: 'champion',
            price: "1$",
            text: "lorem lorem lorem"
        },
        {
            img: "https://img.icons8.com/ios-glyphs/64/000000/frankfurter.png",
            name: 'champion1111',
            price: "2$",
            text: "lorem lorem lorem"
        }
    ] 
}
// let defState = {
//     img: "https://img.icons8.com/cotton/64/000000/frankfurter.png" ,
//     name: 'champion1111',
//     price: "2$",
//     text: "lorem lorem lorem"
// }


 function itemReducer(state = DEFSTATE.items[1], action) {
    switch (action.type) {
        case ITEM_CHANGE_IMG:
            console.log(22)
            return {
                
                ...state,
                img: action.payload
            };
        case ITEM_CHANGE_NAME:
            console.log(22)
            return {
                
                ...state,
                name: action.payload
            };
        case ITEM_CHANGE_PRICE:
            console.log(22)
            return {
                
                ...state,
                price: action.payload
            };
        case ITEM_CHANGE_TEXT:
            console.log(22)
            return {
                
                ...state,
                text: action.payload
            };
        default: return state;
    }
} 

export {itemReducer}