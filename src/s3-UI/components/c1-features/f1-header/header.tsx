import React from 'react';
import s from './header.module.css'
import {NavLink} from "react-router-dom";
import {HeaderContainerType} from "./headerContainer";
import socialNetworkLogo from '../../../../s4-common/assets/pictures/logo.png'

type propsType = HeaderContainerType

const Header = (props: propsType) => {

    return (
        <div className={s.headerContainer}>
            <img
                src={socialNetworkLogo}/>
            <div className={s.header_loginBlock}>
                {props.isAuth ?
                    <div>
                        <div className={s.headerContainer_logo} >{props.data.login} </div>  <button className={s.button_logOut} onClick={props.logout}>Log out</button>
                    </div> :
                    <NavLink to={'/c3-login'}>
                        Login</NavLink>}

            </div>
        </div>
    );
};

export default Header;