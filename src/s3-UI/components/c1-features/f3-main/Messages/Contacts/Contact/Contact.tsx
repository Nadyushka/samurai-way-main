import React from 'react';
import s from "../contacts.module.css";
import {NavLink} from "react-router-dom";

type ContactPropsType = {
    name: string
    id:number
}

const Contact = (props:ContactPropsType) => {

    const path = '/f3-main/messages/' + props.id

    return (
        <div>
            <div className={s.contact + ' ' + s.active}><NavLink exact to={path}>{props.name}</NavLink></div>
        </div>
    );
};

export default Contact;