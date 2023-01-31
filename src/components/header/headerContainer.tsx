import React from 'react';
import Header from './header'
import axios from "axios";
import {connect} from "react-redux";
import {initialStateType, setUserDataAC, setUserDataACType} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {authApi} from "../../api/api";


export type HeaderContainerType = mapStateToProsType & mapDispatchToProsType

class HeaderContainer extends React.Component<HeaderContainerType, initialStateType> {

    componentDidMount() {

        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
        //     {withCredentials: true})

        authApi.me()

            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id,email,login} = response.data.data;
                    this.props.setUserDataAC(id, email, login)
                }
            })
    }

    render() {
        return <Header {...this.props} />
    }
}


type mapStateToProsType = initialStateType


type mapDispatchToProsType = {
    setUserDataAC: (id: number | null, email: string | null, login: string | null) => void
}

const mapStateToPros = (state: AppStateType): mapStateToProsType => {
    return {
            data: state.auth.data,
            isFetching: state.auth.isFetching,
    }
}

export default connect(mapStateToPros, {setUserDataAC})(HeaderContainer);