import React from 'react';
import s from './header.module.css'
import {NavLink} from "react-router-dom";
import {HeaderContainerType} from "./headerContainer";


type propsType = HeaderContainerType

const Header = (props: propsType) => {

    return (
        <div className={s.headerContainer}>
            <img
                src='https://upload.wikimedia.org/wikipedia/ru/thumb/1/18/FC_Wolverhampton_Wanderers_Logo.svg/1182px-FC_Wolverhampton_Wanderers_Logo.svg.png'/>
            <div className={s.header_loginBlock}>
                {props.isAuth ?
                    <div>
                        <div>{props.data.login} </div>
                        - <button onClick={props.logout}>Log out</button>
                    </div> :
                    <NavLink to={'/login'}>
                        Login</NavLink>}

            </div>
        </div>
    );
};

export default Header;