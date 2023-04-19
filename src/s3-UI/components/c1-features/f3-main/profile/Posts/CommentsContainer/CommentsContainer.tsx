import {postsDataType} from "../../../../../../../s2-BLL/profile-pages-reducer";
import React, {useState} from "react";
import s from "../Posts.module.css";
import deleteIcon from "../../../../../../../s4-common/assets/pictures/delete.svg";
import likeYes from "../../../../../../../s4-common/assets/pictures/likeYes.png";
import likeNo from "../../../../../../../s4-common/assets/pictures/likeNo.png";
import Comments from "./Comments/Comments";

type CommentsContainerProps = {
    postsData: postsDataType
    onClickToggleHandler: (postId: number, likeMyPostValue: boolean) => void
    deletePostHandler: (postId: number) => void
    addNewPostTC: (comment: string, postId: number, userName: string) => void
    userName: string | null
    deleteCommentTC: (postId: number, commentId: number) => void
}

export const CommentsContainer = ({
                                      postsData,
                                      onClickToggleHandler,
                                      deletePostHandler,
                                      addNewPostTC,
                                      userName,
                                      deleteCommentTC
                                  }: CommentsContainerProps) => {

    const [visibleComments, setVisibleComments] = useState<boolean>(false)

    return (
        <div className={s.postItem} key={postsData.id}>
            <div className={s.postText}>
                <span>{postsData.post}</span>
                <img src={deleteIcon}
                     onClick={() => deletePostHandler(postsData.id)}/>
            </div>
            <div className={s.postReaction}>
                <div className={s.postLikes}><img
                    onClick={() => onClickToggleHandler(postsData.id, !postsData.myLike)}
                    style={{width: '10px', height: '10px'}}
                    src={postsData.myLike ? likeYes : likeNo}/> {postsData.likesCount}</div>
                <div className={s.postComments} onClick={() => {
                    setVisibleComments(!visibleComments)
                }}>Comments: {postsData.commentsCount}</div>
            </div>
            <Comments postId={postsData.id} userName={userName} visibleComments={visibleComments}
                      comments={postsData.comments} addNewPostTC={addNewPostTC} deleteCommentTC={deleteCommentTC}/>
        </div>
    )
}