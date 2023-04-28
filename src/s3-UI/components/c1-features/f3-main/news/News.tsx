import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../../s2-BLL/redux-store";
import {addNewsTC, nextPageNewsTC, prevPageNewsTC} from "../../../../../s2-BLL/news-page-reducer";
import newsImg from '../../../../../s4-common/assets/pictures/news.jpg'

export const News = () => {

    const news = useSelector((state: AppStateType) => state.news.results)
    const currentPage = useSelector((state: AppStateType) => state.news.currentPage)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addNewsTC())
    }, [])

    return (
        <div>
            {news.map(n => {
                return (
                    <div>
                        <div>{n.title}</div>
                        <img src={n.image_url ?n.image_url : newsImg}/>
                        <div><a href={n.link!} target={'_blank'}>Follow to news</a></div>
                        <br/>
                    </div>
                )
            })}
            {currentPage > 1 && <button onClick={() => dispatch(prevPageNewsTC())}>prev</button>}
            <button onClick={() => dispatch(nextPageNewsTC())}>next</button>
        </div>
    );
};
