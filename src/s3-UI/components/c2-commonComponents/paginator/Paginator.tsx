import React from 'react';
import s from './Paginator.module.css'

type PropsType = {
    pageSize: number
    totalUsersCont: number
    currentPage: number
    changePage:(pageNumber: number) => void
}


const Paginator = (props:PropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCont / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map((p,i) => {
                return (
                    <span key={p} onClick={() => props.changePage(p)}
                          className={props.currentPage === p ? s.activePage : s.notActivePage}>{p}</span>
                )
            })}
        </div>
    );
}

export default Paginator;