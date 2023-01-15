import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {
    FollowAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    SetUsersAC,
    UnfollowAC,
    UserType
} from "../../../redux/users-page-reducer";
import {Dispatch} from "redux";
import Users from "./UsersC";


type mapStateToPropsType = {
    users: UserType[]
    pageSize:number
    totalUsersCont: number
    currentPage: number
}

type mapDispatchToPropsType = {
    follow: (id: number) => void
    unFollow :(id: number) => void
    setUsers:(newUsers: UserType[]) => void
    setCurrentPage:(newCurrentPage: number) => void
    setTotalUsersCount:(totalUsersCount: number) => void
}

const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        users: state.usersPages.users,
        pageSize: state.usersPages.pageSize,
        totalUsersCont: state.usersPages.totalUsersCont,
        currentPage: state.usersPages.currentPage,

    }
}

const mapDispatchToProps = (dispatch:Dispatch): mapDispatchToPropsType => {
    return {
        follow: (id: number) => {dispatch(FollowAC(id))},
        unFollow: (id: number)=> {dispatch(UnfollowAC(id))},
        setUsers: (newUsers: UserType[])=> {dispatch(SetUsersAC(newUsers))},
        setCurrentPage: (newCurrentPage: number)=> {dispatch(setCurrentPageAC(newCurrentPage))},
        setTotalUsersCount: (totalUsersCount: number)=> {dispatch(setTotalUsersCountAC(totalUsersCount))},
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;