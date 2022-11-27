import React from 'react';
import s from "./Posts.module.css"
import {state} from './../../../../redux/state'

const Posts = () => {

        return (
            <div className={s.posts}>
                <div className={s.post}>
                    {state.profilePages.posts.map(post => {
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