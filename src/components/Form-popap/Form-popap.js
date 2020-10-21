import React from 'react'
import { Field, reduxForm } from 'redux-form';
import style from './Form-popap.module.css';
import {required, checkNameItem} from './../../utils/validators/validators'
import { Input } from './../../utils/FormsControl/FormsControl'



export default function FormPopap({props}){
    console.log(props)
    const validName = checkNameItem(props)
    // let priceChange = (e) => {

    // }
    let closePopup = (e) => {
        e.preventDefault()
        props.setPapap(false)
    }
    // let addItem = (e) => {
    //     e.preventDefault()

    // }
    const NameForm = (atr) =>{
        console.log(atr)
        return(

            // <Field placeholder="Name" onChange={priceChange}><Field/>
        <form onSubmit={props.handleSubmit } className = {style.box}>
            <span>Add new hot-dog</span>
            <Field name={"name"} component={Input} validate={[required, validName]} placeholder={"Name"}/>
            <Field name={"title"} component={"input"} placeholder="Title" /> 
            <Field name={"description"} component={"input"} placeholder="Description" /> 
            <Field name={"image"} component={"input"} placeholder="Image" /> 
            <div className = {style.box_button}>
                <button onClick={closePopup}>No Thanks</button>
                <button >Add</button>
            
            </div>
        </form>
    )}

    let submit = (e) =>{
        console.log(e)
    }

    const ReduxForm = reduxForm({form: 'CreacteItem'})(NameForm)

    return(
        <ReduxForm onSubmit={submit}></ReduxForm>
    )
}