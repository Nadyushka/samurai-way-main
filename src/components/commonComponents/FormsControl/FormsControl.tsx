import React from 'react';
import style from './FormsControl.module.css'
import {Field} from "redux-form";
import {required} from "../../../utils/validators";

const Textarea = (props: any) => {

    const hasError = props.meta.error && props.meta.touched
    return (
        <>
            <input {...props.input} {...props}
                   className={style.textareaInput + ' ' + (hasError && style.textareaInputError)}/>
            <div className={style.errorSpan}>{hasError && props.meta.error}</div>
        </>
    );
};

export default Textarea;


export const createField = (placeholder: string, name: string, component: React.FC | string, validate: Function[], props = {}, text: string = '') => {
    return <div>
        <Field placeholder={placeholder} name={name} component={component} validate={validate} {...props}/>
        {text}
    </div>
}