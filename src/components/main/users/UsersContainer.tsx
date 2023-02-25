import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {
    getUsers,
    setCurrentPage,
    setTotalUsersCount,
    follow,
    unFollow,
    UserType,
} from "../../../redux/users-page-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../../commonComponents/preloader/Preloader";
import {
    getCurrentPageS, getFolowingInProgressS,
    getIsFetchingS,
    getPageSizeS,
    getTotalUsersContS,
    getUsersS
} from "../../../redux/users-page-selectors";


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
        users: getUsersS(state),
        pageSize: getPageSizeS(state),
        totalUsersCont: getTotalUsersContS(state),
        currentPage: getCurrentPageS(state),
        isFetching: getIsFetchingS(state),
        followingInProgress: getFolowingInProgressS(state),
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
    unFollow: (id: number) => void
    setCurrentPage: (newCurrentPage: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<PropsType, any> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    changePage = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
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
                   unfollow={this.props.unFollow}
                   changePage={this.changePage}
            />
        </>
    }
}


const UsersContainerAdditional = connect(mapStateToProps,
    {
        follow,
        unFollow,
        setCurrentPage,
        setTotalUsersCount,
        getUsers,
    }
)(UsersContainer)

export default UsersContainerAdditional;