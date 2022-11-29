import React from 'react';
import s from "./Posts.module.css"
import {profilePagesType} from "../../../../redux/state";

type PropsType = {
    posts:profilePagesType
}

const Posts = (props: profilePagesType) => {

        return (
            <div className={s.posts}>
                <div className={s.post}>
                    {props.posts.map((p) => {
                        return <div key={p.id}>
                            <div className={s.postText}>{p.post}</div>
                            <div className={s.postReaction}>
                                <div className={s.postLikes}>likes: {p.likesCount}</div>
                                <span className={s.postComments}>Comments: {p.commentsCount}</span>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        )
    }
;

export default Posts;