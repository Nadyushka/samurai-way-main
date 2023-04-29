import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../../s2-BLL/redux-store";
import {addNewsTC, nextPageNewsTC, prevPageNewsTC} from "../../../../../s2-BLL/news-page-reducer";
import newsImg from '../../../../../s4-common/assets/pictures/news.jpg'
import s from './News.module.css'
import Preloader from "../../../c2-commonComponents/preloader/Preloader";

export const News = () => {

        const news = useSelector((state: AppStateType) => state.news.results)
        const currentPage = useSelector((state: AppStateType) => state.news.currentPage)
        const dispatch = useDispatch()

        useEffect(() => {
            dispatch(addNewsTC())
        }, [])

        return (
            <div className={s.newsBody}>
                <Preloader/>
                <div className={s.newsBody_wrapper}>
                    {news.map((n,i) => {
                        return (
                            <div className={s.newsBody_news} key={i}>
                                <div>Category: <b>{n.category}</b></div>
                                <div className={s.newsBody_info}>
                                    <div className={s.newsBody_img}>
                                        <img src={n.image_url ? n.image_url : newsImg}/>
                                    </div>
                                    <div className={s.newsBody_title}>
                                        {n.title}
                                        <div><a href={n.link!} target={'_blank'}>Read more...</a></div>
                                    </div>
                                </div>
                                <br/>
                            </div>
                        )
                    })}
                </div>
                <div className={s.newsBody_buttons}>
                   <button style={ currentPage === 1 ? {visibility:'hidden'} : {}} className={s.newsBody_prevButton} onClick={() => dispatch(prevPageNewsTC())}>prev</button>
                    <button className={s.newsBody_nextButton} onClick={() => dispatch(nextPageNewsTC())}>next</button>
                </div>
            </div>
        );
    }
;
