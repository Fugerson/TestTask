import React from 'react'
import style from '../../style/header.module.css';





// addHotdog(){
//     console.log("add")
// }

export default function Header(){
    return(
        <div className = {style.wrapper}>
            <div className={style.left}>
                <a href="#">
                    <img src="/img/Picture1.png" />
                    <span>CRUD</span>
                </a>
            </div>
            <div className={style.right}>
                <span onClick={() => { console.log('add')}}>add hot-dog</span>
            </div>
        </div>
    )
}