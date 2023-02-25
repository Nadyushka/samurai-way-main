import React from 'react';
import s from "./main.module.css"
import Messages from "./Messages/messages";
import {Route, Switch, withRouter} from "react-router-dom"
import UsersContainerAdditional from "./users/UsersContainer";
import ProfileContainer from "./profile/ProfileContainer";
import Login, {LoginContainer} from "../login/Login";
import {connect} from "react-redux";
import {getUserData, initialStateType} from "../../redux/auth-reducer";
import {compose} from 'redux';
import {AppStateType} from "../../redux/redux-store";
import Preloader from "../commonComponents/preloader/Preloader";
import {initializeApp} from "../../redux/app-reducer";

type mapDispatchToProsType = {
    initializeApp: () => void
}

type MainContainerType = mapStateToPropsType & mapDispatchToProsType

class Main extends React.Component<MainContainerType, any> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className={s.main}>
                <Switch>
                    <Route path="/main/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/main/messages" render={() => <Messages/>}/>
                    {/* Route exact path="/main/news" render={() => <News/>} */}
                    {/* <Music/> */}
                    {/* <Messages/> */}

                    <Route path="/main/users" render={() => <UsersContainerAdditional/>}/>

                    <Route path="/login" render={() => <LoginContainer/>}/>
                    {/* <Settings/> */}
                </Switch>
            </div>

        );
    }
}

type mapStateToPropsType = {
    initialized: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        initialized: state.app.initialized
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(Main);

