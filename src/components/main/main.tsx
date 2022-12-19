import React from 'react';
import s from "./main.module.css"
import Profile from "./profile/profile";
import Messages from "./Messages/messages";
import {Route, Switch} from "react-router-dom"
import {dispatchTypes, pagesTypes} from "../../redux/state";

type PropsType = {
    state: pagesTypes
    dispatch: (action: dispatchTypes) => void
}

const Main: React.FC<PropsType> = ({state, dispatch}) => {
    return (
        <div className={s.main}>
            <Switch>
                <Route exact path="/main/profile" render={() => <Profile
                    profilePages={state.profilePages}
                    dispatch={dispatch}
                />}
                />
                <Route exact path="/main/messages"
                       render={() => <Messages messagePages={state.messagePages}
                                               dispatch={dispatch}
                       />}
                />
                {/* Route exact path="/main/news" render={() => <News/>} */}
                {/* <Music/> */}
                {/* <Messages/> */}
                {/* <Settings/> */}
            </Switch>
        </div>

    );
}

export default Main;