import {AppStateType} from "./redux-store";

export const getUsersS = (state:AppStateType) => state.usersPages.users
export const getPageSizeS = (state:AppStateType) => state.usersPages.pageSize
export const getTotalUsersContS = (state:AppStateType) => state.usersPages.totalUsersCont
export const getCurrentPageS = (state:AppStateType) => state.usersPages.currentPage
export const getIsFetchingS = (state:AppStateType) => state.usersPages.isFetching
export const getFolowingInProgressS = (state:AppStateType) => state.usersPages.folowingInProgress

