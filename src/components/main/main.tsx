import React from 'react';
import s from "./main.module.css"
import Profile from "./profile/profile";

const Main = () => {
    return (
        <div className={s.main}>
            <Profile/>
            {/* <Messages/> */}
            {/* <News/> */}
            {/* <Music/> */}
            {/* <Messages/> */}
            {/* <Settings/> */}
        </div>
    );
}

export default Main;