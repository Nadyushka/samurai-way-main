import React from 'react';
import s from "./main.module.css"
import Profile from "./profile/profile";
import Messages from "./Messages/messages";
import {BrowserRouter, Route, Switch} from "react-router-dom"


const Main = () => {
    return (
            <div className={s.main}>
                <Switch>
                <Route path="/main/profile" component={Profile}/>
                <Route path="/main/messages" component={Messages}/>
                {/* <News/> */}
                {/* <Music/> */}
                {/* <Messages/> */}
                {/* <Settings/> */}
                </Switch>
            </div>

    );
}

export default Main;