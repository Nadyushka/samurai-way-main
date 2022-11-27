import React from 'react';
import s from "./Posts.module.css"
import {postsDataType} from "../../../../index";

type postsPropsType = {
    postsData: postsDataType[]
}

const Posts = (props:postsPropsType) => {

        return (
            <div className={s.posts}>
                <div className={s.post}>
                    {props.postsData.map(post => {
                        return <div key={post.id}>
                            <div className={s.postText}>{post.post}</div>
                            <div className={s.postReaction}>
                                <div className={s.postLikes}>likes: {post.likesCount}</div>
                                <span className={s.postComments}>Comments: {post.commentsCount}</span>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        )
    }
;

export default Posts;