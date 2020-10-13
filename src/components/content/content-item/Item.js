import React from 'react'
import style from '../../../style/item.module.css';


function Item({store}){

    console.log(store.img)

    let inputImg = React.createRef(),
        inputPhoto = React.createRef(),
        inputName = React.createRef(),
        inputPrice = React.createRef(),
        inputText = React.createRef(),
        buttonDelete = React.createRef(),
        checkInputEdit = true

    let imgChange = (event) =>{
        event.persist()
        console.log(event.target.value)

        store.setImg(event.target.value)
    }
    let nameChange = (event) =>{
        event.persist()
        store.setName(event.target.value)
    }
    let priceChange = (event) =>{
        event.persist()
        store.setPrice(event.target.value)
    }
    let textChange = (event) =>{
        event.persist()
        store.setText(event.target.value)
    }
    let editItem = (event) =>{
        event.persist()



        if(checkInputEdit){
            inputPhoto.current.style.display = "block"
            buttonDelete.current.style.display = "block"

            inputName.current.removeAttribute("readOnly")
            inputPrice.current.removeAttribute("readOnly")
            inputText.current.removeAttribute("readOnly")

            checkInputEdit = false
        } else {
            inputPhoto.current.style.display = "none"
            buttonDelete.current.style.display = "none"

            inputText.current.setAttribute('readOnly','readOnly')
            inputName.current.setAttribute("readOnly", 'readOnly')
            inputPrice.current.setAttribute("readOnly", 'readOnly')
            

            console.log(inputName)
            checkInputEdit = true
        }


    }
    let deleteItem = (event) =>{
            
    }
    return(
            <div className={style.box}>
                <img alt="Img" ref={inputImg}
                src={store.img}/> 

                <input type="text"
                    value={store.img}
                    ref={inputPhoto}
                    className={style.img_text}
                    onChange={imgChange} />

                <input type="text"
                    readOnly
                    ref={inputName}
                    className={style.name}
                    value={store.name}
                    onChange={nameChange} />

                <input readOnly
                    ref={inputPrice}
                    className={style.price}
                    value={store.price}
                    onChange={priceChange} /> 

                <textarea 
                    readOnly
                    ref={inputText}
                    className={style.text}
                    rows="10" cols="45"
                    value={store.text}
                    onChange={textChange}
                ></textarea> 

                <button className={style.button_edit} onClick={editItem} >Edit</button>

                <button ref={buttonDelete}
                    className={style.button_delete}
                    onClick={deleteItem}
                >Delete</button>
            </div>
    )
}
export default Item