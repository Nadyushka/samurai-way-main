import React from 'react';
import preloader from '../../../assets/pictures/preloader.gif'
import s from './preloader.module.css'

const Preloader = () => {
    return (
        <div >
            <img className={s.preloaderImg} src={preloader} />
        </div>
    );
};

export default Preloader;