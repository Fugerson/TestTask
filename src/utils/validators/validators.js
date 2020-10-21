export const required = value => {

    if(value) return

    return "err"
}

export const checkNameItem = (store) => (value) => {   
    console.log(store)
    if(value == store.name){

        return "err"
    }

    return
}