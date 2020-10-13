import React from 'react'
import style from '../../style/header.module.css';





export default function Header(props){



    let addItem = () =>{
        if(!props.store.statePopup){
            props.store.setPapap(true)
        } else{
            props.store.setPapap(false)
        } 

    }

    return(
        <div className = {style.wrapper}>
            <div className={style.left}>
                <a href="#">
                    <img alt="IMG" src="/img/Picture1.png" />
                    <span>CRUD</span>
                </a>
            </div>
            <div className={style.right}>
                <span onClick={addItem}>add hot-dog</span>
            </div>
        </div>
    )
}