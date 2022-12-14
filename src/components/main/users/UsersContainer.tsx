import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {FollowAC, SetUsersAC, UnfollowAC, UserType} from "../../../redux/users-page-reducer";
import {Dispatch} from "redux";
import Users from "./UsersC";


type mapStateToPropsType = {
    users: UserType[]
}

type mapDispatchToPropsType = {
    follow: (id: number) => void
    unFollow :(id: number) => void
    setUsers:(newUsers: UserType[]) => void
}

const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        users: state.usersPages
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