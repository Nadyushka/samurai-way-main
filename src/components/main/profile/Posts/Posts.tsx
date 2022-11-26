import React from 'react';
import s from "./Posts.module.css"

const Posts = () => {
    return (
        <div className={s.posts}>
            <div className={s.post}>
                <div className={s.postText}>Hello, everyone</div>
                <div className={s.postReaction}>
                    <div className={s.postLikes}>likes: 0</div>
                    <span className={s.postComments}>Comments: 0</span>
                </div>
            </div>
        </div>
    );
};

export default Posts;