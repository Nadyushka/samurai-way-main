import React from 'react';
import Header from './header'
import axios from "axios";
import {connect} from "react-redux";
import {getUserData, initialStateType, setUserDataAC, setUserDataACType} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {authApi} from "../../api/api";


export type HeaderContainerType = mapStateToProsType & mapDispatchToProsType

class HeaderContainer extends React.Component<HeaderContainerType, initialStateType> {

    componentDidMount() {

        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
        //     {withCredentials: true})

        // authApi.me()
        //     .then(response => {
        //         if (response.data.resultCode === 0) {
        //             let {id,email,login} = response.data.data;
        //             this.props.setUserDataAC(id, email, login)
        //         }
        //     })

        this.props.getUserData()
    }

    render() {
        return <Header {...this.props} />
    }
}


type mapStateToProsType = initialStateType


type mapDispatchToProsType = {
    getUserData: () => void
}

const mapStateToPros = (state: AppStateType): mapStateToProsType => {
    return {
            data: state.auth.data,
            isFetching: state.auth.isFetching,
    }
}

export default connect(mapStateToPros, {getUserData})(HeaderContainer);