import {Dispatch} from "redux";
import {AppStateType} from "./redux-store";
import {newsType, pageApi, profileApi} from "../s1-DAL/api";
import {addNewPostActionCreator} from "./profile-pages-reducer";
import {AxiosError} from "axios";

let initialState = {
    results: [] as newsType[],
    nextPage: [{pageNumber: 1, pageId: ''}] as { pageNumber: number, pageId: string }[],
    error: '',
    currentPage: 1
}

type initialStateType = typeof initialState

export const newsPageReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case ADD_NEWS: {
            return {
                ...state,
                results: action.results.map(n => ({...n})),
                nextPage: [...state.nextPage, {pageNumber: 2, pageId: action.nextPageId}],
                currentPage: 1
            }
        }
        case PREV_PAGE_NEWS: {
            return {
                ...state,
                results: action.results.map(n => ({...n})),
                nextPage: [...state.nextPage.slice(0, state.nextPage.length - 1)],
                currentPage: state.currentPage - 1
            }
        }
        case NEXT_PAGE_NEWS: {
            return {
                ...state,
                results: action.results.map(n => ({...n})),
                nextPage: [...state.nextPage, {pageNumber: state.nextPage.length + 1, pageId: action.nextPageId}],
                currentPage: action.currentPage
            }

        }
        default:
            return state
    }
}


const ADD_NEWS = 'samurai-wai/news/ADD_NEWS'
const PREV_PAGE_NEWS = 'samurai-wai/news/PREV_PAGE_NEWS'
const NEXT_PAGE_NEWS = 'samurai-wai/news/NEXT_PAGE_NEWS'

const addNewsAC = (results: newsType[], nextPageId: string) => ({type: ADD_NEWS, results, nextPageId} as const)
const nextPageNewsAC = (results: newsType[], nextPageId: string, currentPage: number) => ({
    type: NEXT_PAGE_NEWS,
    results,
    nextPageId,
    currentPage,
} as const)
const prevPageNewsAC = (results: newsType[]) => ({type: PREV_PAGE_NEWS, results} as const)

export const addNewsTC = () => async (dispatch: Dispatch, getState: () => AppStateType) => {
    try {
        let res = await pageApi.getNews()
        let news = res.data.results
        let nextPageId = res.data.nextPage
        dispatch(addNewsAC(news, nextPageId))
        console.log(getState().news)
    } catch (e) {
        const errors = e as Error | AxiosError;
        console.log(errors.message)
    }
}

export const nextPageNewsTC = (keyWord: string = 'top') => async (dispatch: Dispatch, getState: () => AppStateType) => {
    const nextPageNumber = getState().news.currentPage + 1
    const nextPageId = getState().news.nextPage.find(p => p.pageNumber === nextPageNumber)!.pageId

    try {
        let res = await pageApi.nextPageNews(keyWord, nextPageId)
        let news = res.data.results
        let nextPageCode = res.data.nextPage
        dispatch(nextPageNewsAC(news, nextPageCode, nextPageNumber))
        console.log(getState().news)
    } catch (e) {
        const errors = e as Error | AxiosError;
        console.log(errors.message)
    }
}

export const prevPageNewsTC = (keyWord: string = 'top') => async (dispatch: Dispatch, getState: () => AppStateType) => {
    let prevPage = getState().news.currentPage > 1 ? getState().news.currentPage - 1 : 1
    let prevPageId = getState().news.nextPage.find(p => p.pageNumber === prevPage)!.pageId
    try {
        let res = await pageApi.prevPageNews(keyWord, prevPageId)
        let news = res.data.results
        dispatch(prevPageNewsAC(news))
        console.log(getState().news)
    } catch (e) {
        const errors = e as Error | AxiosError;
        console.log(errors.message)
    }
}

export type addNewsType = ReturnType<typeof addNewsAC>
export type nextPageNewsType = ReturnType<typeof nextPageNewsAC>
export type prevPageNewsType = ReturnType<typeof prevPageNewsAC>

type ActionsType = addNewsType | nextPageNewsType | prevPageNewsType

