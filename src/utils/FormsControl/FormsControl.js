import React from 'react'
import style from './FormsControl.module.css'

export const Input = ({input, meta, ...props}) => {

    return (
        <div className={meta.touched && meta.error ? style.error : ""}>
            <input {...input} {...props} />
        </div>
    )
}