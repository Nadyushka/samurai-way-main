import React from 'react';
import s from "./Posts.module.css"

const Posts = () => {

        type postsDataType = {
            id: number
            post: string
            likesCount: number
            commentsCount: number
        }

        let postsData: postsDataType[] = [{id: 1, post: 'Hello, everyone', likesCount: 10, commentsCount: 0},
            {id: 2, post: 'I am happy', likesCount: 13, commentsCount: 0}]

        return (
            <div className={s.posts}>
                <div className={s.post}>
                    {postsData.map(post => {
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