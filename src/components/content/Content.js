import React from 'react'
import Item from './content-item/Item';
import style from '../../style/content.module.css';
import FormPopap from './../Form-popap/Form-popap';





export default function Content({props}){



    return(
        <div className = {style.wrapper}>
            <div className={style.title}>
            <span className={style.item}>All hot-dogs</span> 
            </div>
            <div className={style.flex}>

                <Item store={props}></Item>

                {props.statePopup === true &&
                    <FormPopap />}

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