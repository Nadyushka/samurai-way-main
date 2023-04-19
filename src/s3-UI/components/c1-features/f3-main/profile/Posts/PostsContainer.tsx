import React from 'react';
import {
    addNewPostActionCreator, addNewPostTC, addPostTC, deleteCommentTC, deletePostTC, likeMyPostTC,
    postDeleteActionCreator,
    postsDataType
} from "../../../../../../s2-BLL/profile-pages-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";
import {AppStateType} from "../../../../../../s2-BLL/redux-store";

type PropsType = {
    isOwner: boolean
}

export type mapStateToProps = {
    posts: postsDataType[]
    isOwner: boolean
    userName: string | null
}

export type mapDispatchToPropsType = {
    addPostTC: (newPost: string) => void
    deletePostTC: (postId: number) => void
    deleteCommentTC: (postId: number, commentId: number) => void
    likeMyPostTC: (postId: number, likeMyPostValue: boolean) => void
    addNewPostTC: (comment: string, postId: number, userName: string) => void

}

export type PostsPropsType = mapStateToProps & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType, ownProps: PropsType): mapStateToProps => {
    return {
        posts: state.profilePages.posts,
        isOwner: ownProps.isOwner,
        userName: state.profilePages.profile!.fullName
    }
}


const PostsContainer = connect(mapStateToProps, {
    addPostTC,
    deletePostTC,
    likeMyPostTC,
    addNewPostTC,
    deleteCommentTC
})(Posts)

export default PostsContainer;