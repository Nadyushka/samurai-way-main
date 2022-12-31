import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {FollowAC, SetUsersAC, UnfollowAC, UserType} from "../../../redux/users-page-reducer";
import {Dispatch} from "redux";
import Users from "./Users";

type mapStateToPropsType = {
    users: UserType[]
}

type mapDispatchToPropsType = {
    follow: (id: number) => void
    unFollow :(id: number) => void
    setUsers:(newUsers: UserType[]) => void
}

export type PropsUsersType = mapStateToPropsType| mapDispatchToPropsType

const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch:Dispatch): mapDispatchToPropsType => {
    return {
        follow: (id: number) => {dispatch(FollowAC(id))},
        unFollow: (id: number)=> {dispatch(UnfollowAC(id))},
        setUsers: (newUsers: UserType[])=> {dispatch(SetUsersAC(newUsers))}
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;