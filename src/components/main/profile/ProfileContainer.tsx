import React from 'react';
import Profile from "./profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfilePageType, setUsersProfile} from "../../../redux/profile-pages-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    useId: number
}

type PropsType = RouteComponentProps<> & OwnPropsType

type mapStatePropsType = {
    profile: ProfilePageType | null
}

type mapsDispatchToProps = {
    setUsersProfile: (profileData: ProfilePageType) => void
}

type OwnPropsType = mapStatePropsType & mapsDispatchToProps

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
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