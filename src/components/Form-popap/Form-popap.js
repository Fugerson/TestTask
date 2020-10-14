import React from 'react'
import { Field, reduxForm } from 'redux-form';
import style from '../../style//Form-popap.module.css';
// import { createStore } from 'redux';
// import {Field, reduxForm} from "redux-form"
// import {required} from '../../utils/validators/validators'
// import { combineReducers } from 'redux';
// import {reducer} from 'redux-form' 



// import rootReducer from './../../store/redusers'


// const store = createStore(rootReducer)


export default function FormPopap({props}){
    // console.log(store.getState().form)

    let priceChange = (e) => {

    }
    let closePopup = (e) => {
        e.preventDefault()
        props.setPapap(false)
    }
    let addItem = (e) => {
        e.preventDefault()

    }
    const NameForm = (props) =>{
        return(
                <Field name={"name"} component={"input"} placeholder="Name"/>
            // <Field placeholder="Name" onChange={priceChange}><Field/>
    )}


    const NameReduxForm = reduxForm({form: 'name'})(NameForm)

    return(
            <form className = {style.box}>
                <span>Add new hot-dog</span>
                <NameReduxForm />
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
                        <button onClick={closePopup}>No Thanks</button>
                        <button onClick={addItem}>Add</button>
                    </div>
            </form>
    )
}