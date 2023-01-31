import React from 'react';
import Profile from "./profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUsersProfile, ProfilePageType, setUsersProfile} from "../../../redux/profile-pages-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {usersApi} from "../../../api/api";

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

type mapStatePropsType = {
    profile: ProfilePageType | null
}

type mapsDispatchToProps = {
    getUsersProfile: (userId: string) => void
}

type OwnPropsType = mapStatePropsType & mapsDispatchToProps

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId: string;
        this.props.match.params.userId ? userId = this.props.match.params.userId : userId = '2'

        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId, {
        //     withCredentials: true
        // })
        //     usersApi.getProfile(userId)
        //     .then(response => {
        //     this.props.setUsersProfile(response.data)
        // })
        this.props.getUsersProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
};

let mapStateProps = (state: AppStateType): mapStatePropsType => ({
    profile: state.profilePages.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateProps, {getUsersProfile})(WithUrlDataContainerComponent);