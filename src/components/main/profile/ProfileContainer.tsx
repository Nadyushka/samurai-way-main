import React from 'react';
import Profile from "./profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfilePageType, setUsersProfile} from "../../../redux/profile-pages-reducer";
import {AppStateType} from "../../../redux/redux-store";

type PropsType = {
    profile: ProfilePageType | null
    setUsersProfile: (profileData: ProfilePageType) => void
}

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


let mapStateProps = (state: AppStateType) => ({
    profile: state.profilePages.profile
})


export default connect(mapStateProps, {setUsersProfile})(ProfileContainer);