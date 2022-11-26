import React from 'react';
import s from './header.module.css'

const Header = () => {
    return (
        <div className={s.headerContainer}>
            <img
                src='https://upload.wikimedia.org/wikipedia/ru/thumb/1/18/FC_Wolverhampton_Wanderers_Logo.svg/1182px-FC_Wolverhampton_Wanderers_Logo.svg.png'/>
        </div>
    );
};

export default Header;