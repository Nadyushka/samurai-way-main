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
import React from "react";
import axios from "axios";
import Users from "./Users";


type mapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCont: number
    currentPage: number
}

type mapDispatchToPropsType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (newUsers: UserType[]) => void
    setCurrentPage: (newCurrentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPages.users,
        pageSize: state.usersPages.pageSize,
        totalUsersCont: state.usersPages.totalUsersCont,
        currentPage: state.usersPages.currentPage,

    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (id: number) => {
            dispatch(FollowAC(id))
        },
        unFollow: (id: number) => {
            dispatch(UnfollowAC(id))
        },
        setUsers: (newUsers: UserType[]) => {
            dispatch(SetUsersAC(newUsers))
        },
        setCurrentPage: (newCurrentPage: number) => {
            dispatch(setCurrentPageAC(newCurrentPage))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
    }
}

type PropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCont: number
    currentPage: number
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (newUsers: UserType[]) => void
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (newCurrentPage: number) => void
}

class UsersContainer extends React.Component<PropsType, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)

        })
    }

    changePage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response =>
            this.props.setUsers(response.data.items)
        )
    }

    render() {

        return <>

            <Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalUsersCont={this.props.totalUsersCont}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   changePage={this.changePage}
            />
        </>
    }
}

connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

export default UsersContainer;