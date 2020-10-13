import React from 'react'
import Item from './content-item/Item';
import style from '../../style/content.module.css';






export default function Content({props}){

    // console.log(props.store.img)
    // console.log(props.img)

    // const changeName = {
    //     type: 'ITEM_CHANGE_NAME_TEXT',
    //     payload: "inna"
    // }
    // props.store.dispatch(changeName)
    // console.log(props.store.getState())
    // let items = store.store.item.map((ite, index) => {
    //    return <Item item={ite} key={index} />
    // })

    return(
        <div className = {style.wrapper}>
            <div className={style.title}>
            <span className={style.item}>All hot-dogs</span> 
            </div>
            <div className={style.flex}>

                <Item store={props}></Item>

                {/*
                 {props.map((item, i) =>{
                    
                    <Item store={props[i]} ></Item>
                    })
                }    
                */}

            </div>
        </div>
    )
}