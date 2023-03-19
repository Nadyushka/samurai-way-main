import React, {useState} from 'react';
import s from './Paginator.module.css'

type PropsType = {
    pageSize: number
    totalItemCount: number
    currentPage: number
    changePage: (pageNumber: number) => void
    portionSize: number
}


const Paginator = (props: PropsType) => {

    let pagesCount = Math.ceil(props.totalItemCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    let rightPortionPageNumber = portionNumber * props.portionSize

    return (
        <div>
            {portionNumber > 1 && <button onClick={() => {
                setPortionNumber(portionNumber - 1);
         //       props.changePage(leftPortionPageNumber - props.portionSize)
            }}>prev</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p, i) => {
                    return (
                        <span key={i} onClick={() => props.changePage(p)}
                              className={props.currentPage === p ? s.activePage : s.notActivePage}>{p}</span>
                    )
                })}
            {portionCount > portionNumber && <button onClick={() => {
                setPortionNumber(portionNumber + 1);
         //       props.changePage(rightPortionPageNumber + 1)
            }}>next</button>}
        </div>
    );
}

export default Paginator;