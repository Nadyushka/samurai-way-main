import React from 'react';
import s from "./main.module.css"
import Messages from "./Messages/messages";
import {Route, Switch} from "react-router-dom"
import UsersContainerAdditional from "./users/UsersContainer";
import ProfileContainer from "./profile/ProfileContainer";
import Login from "../login/Login";


const Main = () => {
    return (
        <div className={s.main}>
            <Switch>
                <Route path="/main/profile/:userId?" render={() => <ProfileContainer/>}/>
                <Route path="/main/messages" render={() => <Messages/>}/>
                {/* Route exact path="/main/news" render={() => <News/>} */}
                {/* <Music/> */}
                {/* <Messages/> */}

                <Route path="/main/users" render={() => <UsersContainerAdditional/>}/>

                <Route path="/login" render={() => <Login/>}/>
                {/* <Settings/> */}
            </Switch>
        </div>

    );
}

export default Main;