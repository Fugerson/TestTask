import React from 'react'
import style from '../../style//Form-popap.module.css';






export default function FormPopap(props){

    let priceChange = (event) => {
        // console.log(1)
    }

    return(
            <div className = {style.box}>
                <span>Add new hot-dog</span>
                <input 
                    placeholder="Name"
                    // value={}
                    onChange={priceChange} /> 

                <input 
                    placeholder="Title"
                    // value={}
                    onChange={priceChange} /> 

                <input 
                    placeholder="Description"
                    // value={}
                    onChange={priceChange} /> 

                <input 
                    placeholder="Image"
                    // value={}
                    onChange={priceChange} /> 

                    <div className = {style.box_button}>
                        <button>No Thanks</button>
                        <button>Add</button>
                    </div>
            </div>
    )
}