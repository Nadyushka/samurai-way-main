import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";


const getUsers = (state: AppStateType) => state.usersPages.users
export const getUsersS = createSelector(getUsers, (users) => users.filter(u => u))
export const getPageSizeS = (state: AppStateType) => state.usersPages.pageSize
export const getTotalUsersContS = (state: AppStateType) => state.usersPages.totalUsersCont
export const getCurrentPageS = (state: AppStateType) => state.usersPages.currentPage
export const getIsFetchingS = (state: AppStateType) => state.usersPages.isFetching
export const getFolowingInProgressS = (state: AppStateType) => state.usersPages.folowingInProgress

