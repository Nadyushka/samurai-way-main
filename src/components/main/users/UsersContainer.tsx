import {connect} from "react-redux";
import Posts from "../profile/Posts/Posts";
import {AppStateType} from "../../../redux/redux-store";
import {FollowAC, SetUsersAC, UnfollowAC, UserType} from "../../../redux/users-page-reducer";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    users: UserType[]
}

type mapDispatchToPropsType = {

    followAC: (id: number) => void
    unFollowAC :(id: number) => void
    setUsersAC:(newUsers: UserType[]) => void
}

const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        followAC: (id: number)=> {dispatch(FollowAC(id))},
        unFollowAC: (id: number)=> {dispatch(UnfollowAC(id))},
        setUsersAC: (newUsers: UserType[])=> {dispatch(SetUsersAC(newUsers))},
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default UsersContainer;