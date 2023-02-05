import React from 'react';
import Profile from "./profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUsersProfile, ProfilePageType, setUsersProfile} from "../../../redux/profile-pages-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {usersApi} from "../../../api/api";

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

type mapStatePropsType = {
    profile: ProfilePageType | null
    isAuth: boolean
}

type mapsDispatchToProps = {
    getUsersProfile: (userId: string) => void
}

type OwnPropsType = mapStatePropsType & mapsDispatchToProps

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId: string;
        this.props.match.params.userId ? userId = this.props.match.params.userId : userId = '2'

        this.props.getUsersProfile(userId)
    }

    render() {

        if (!this.props.isAuth) {
            return <Redirect to={'/login'}/>
        }

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
};

let mapStateProps = (state: AppStateType): mapStatePropsType => ({
    profile: state.profilePages.profile,
    isAuth: state.auth.isAuth,
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateProps, {getUsersProfile})(WithUrlDataContainerComponent);