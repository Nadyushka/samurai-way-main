import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../../s2-BLL/redux-store";
import {addNewsTC, nextPageNewsTC, prevPageNewsTC} from "../../../../../s2-BLL/news-page-reducer";
import newsImg from '../../../../../s4-common/assets/pictures/news.jpg'
import s from './News.module.css'
import Preloader from "../../../c2-commonComponents/preloader/Preloader";

export const News = () => {

        const news = useSelector((state: AppStateType) => state.news.results)
        const currentPage = useSelector((state: AppStateType) => state.news.currentPage)
        const isLoading = useSelector((state: AppStateType) => state.news.isLoading)
        const error = useSelector((state: AppStateType) => state.news.error)
        const dispatch = useDispatch()

        const [inputCategoryValue, setInputCategoryValue] = useState<string>()
        const [selectCategoryValue, setSelectCategoryValue] = useState<string>()

        useEffect(() => {
            dispatch(addNewsTC())
        }, [])

        if (isLoading) {
            return <Preloader/>
        } else {
            return (
                <div className={s.newsBody}>
                    <div className={s.newsBody_input}>
                        <input placeholder={'Set key word'} value={inputCategoryValue}
                               onChange={(e) => setInputCategoryValue(e.currentTarget.value)}/>
                        <button onClick={() => dispatch(addNewsTC(inputCategoryValue, selectCategoryValue))}>Get news
                        </button>
                    </div>
                    <div className={s.newsBody_select}>
                        <label htmlFor="category-select">Choose a category:</label>
                        <select name="category" id="category-select"
                                value={selectCategoryValue}
                                onChange={(e) => {
                                    setSelectCategoryValue(e.currentTarget.value)
                                }}>
                            <option value="business">Business</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="environment">Environment</option>
                            <option value="food">Food</option>
                            <option value="health">Health</option>
                            <option value="politics">Politics</option>
                            <option value="politics">Politics</option>
                            <option value="science">Science</option>
                            <option value="technology">Technology</option>
                            <option value="top">Top</option>
                            <option value="tourism">Tourism</option>
                            <option value="world">World</option>
                        </select>
                    </div>
                    <div className={s.newsBody_wrapper}>
                        {news.map((n, i) => {
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
                    {error.length === 0 && <div className={s.newsBody_buttons}>
                        <button style={currentPage === 1 ? {visibility: 'hidden'} : {}} className={s.newsBody_prevButton}
                                onClick={() => dispatch(prevPageNewsTC())}>prev
                        </button>
                        <button className={s.newsBody_nextButton} onClick={() => dispatch(nextPageNewsTC())}>next</button>
                    </div>
                    }
                    <div className={s.newsBody_errorWrapper}>
                        <div className={s.newsBody_error}>
                            {error}
                        </div>
                    </div>
                </div>
            );
        }
    }
;
