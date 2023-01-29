import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    toggleIsFollowingInProgress,
    unfollow,
    UserType
} from "../../../redux/users-page-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../../commonComponents/preloader/Preloader";
import {usersApi} from "../../../api/api";


type mapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCont: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<any>
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPages.users,
        pageSize: state.usersPages.pageSize,
        totalUsersCont: state.usersPages.totalUsersCont,
        currentPage: state.usersPages.currentPage,
        isFetching: state.usersPages.isFetching,
        followingInProgress: state.usersPages.folowingInProgress,
    }
}


type PropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCont: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<any>
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (newUsers: UserType[]) => void
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (newCurrentPage: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowingInProgress: (isFollowing: boolean, id: number) => void
}

class UsersContainer extends React.Component<PropsType, any> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
                this.props.toggleIsFetching(false)
            })
    }

    changePage = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)

        usersApi.getUsers(pageNumber, this.props.pageSize)

            .then(data => {
                    this.props.setUsers(data.items)
                    this.props.toggleIsFetching(false)
                }
            )
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalUsersCont={this.props.totalUsersCont}
                   currentPage={this.props.currentPage}
                   followingInProgress={this.props.followingInProgress}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   changePage={this.changePage}
                   toggleIsFollowingInProgress={this.props.toggleIsFollowingInProgress}
            />
        </>
    }
}


const UsersContainerAdditional = connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        toggleIsFollowingInProgress,
    }
)(UsersContainer)

export default UsersContainerAdditional;