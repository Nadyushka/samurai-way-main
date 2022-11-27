import React from 'react';
import s from './dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>Hi</div>
            <div className={s.dialog}>How are you?</div>
            <div className={s.dialog}>Enjoy your day</div>
        </div>
    );
};

export default Dialogs;