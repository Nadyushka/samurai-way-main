import React from 'react';
import style from './FormsControl.module.css'

const Textarea = (props:any) => {

    const hasError = props.meta.error && props.meta.touched

    return (
        <>
            <input {...props.input} {...props} className={style.textareaInput + ' ' + (hasError && style.textareaInputError)}/>
            <div className={style.errorSpan}>{hasError && props.meta.error}</div>
        </>
    );
};

export default Textarea;