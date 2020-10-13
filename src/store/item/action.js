export const ITEM_CHANGE_IMG = 'ITEM_CHANGE_IMG';
export const ITEM_CHANGE_NAME = 'ITEM_CHANGE_NAME';
export const ITEM_CHANGE_PRICE = 'ITEM_CHANGE_PRICE';
export const ITEM_CHANGE_TEXT = 'ITEM_CHANGE_TEXT';

export const setImg = img =>({
    type: ITEM_CHANGE_IMG,
    payload: img
})
export const setName = name =>({
    type: ITEM_CHANGE_NAME,
    payload: name
})
export const setPrice = price =>({
    type: ITEM_CHANGE_PRICE,
    payload: price
})
export const setText = text =>({
    type: ITEM_CHANGE_TEXT,
    payload: text
})