import React from 'react';
import Profile from "./profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfilePageType, setUsersProfile} from "../../../redux/profile-pages-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

type mapStatePropsType = {
    profile: ProfilePageType | null
}

type mapsDispatchToProps = {
    setUsersProfile: (profileData: ProfilePageType) => void
}

type OwnPropsType = mapStatePropsType & mapsDispatchToProps

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId: string;
        this.props.match.params.userId ? userId = this.props.match.params.userId : userId = '2'

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId, {
            withCredentials: true
        }).then(response => {
            this.props.setUsersProfile(response.data)
            console.log(response.data.photos)
        })
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

export default connect(mapStateProps, {setUsersProfile})(WithUrlDataContainerComponent);