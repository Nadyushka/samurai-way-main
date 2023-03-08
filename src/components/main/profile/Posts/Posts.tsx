import React, {ChangeEvent, useCallback} from 'react';
import s from "./Posts.module.css"
import {PostsPropsType} from "./PostsContainer";
import {Field, Form, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators";
import Textarea from '../../../commonComponents/FormsControl/FormsControl';


const Posts = (props: PostsPropsType) => {

    const addNewPost = (values: AddPostFormType) => props.addNewPost(values.newPostBody)

    return (
        <div className={s.posts}>

            <AddPostFormRedux onSubmit={addNewPost}/>

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


export default Posts;

type AddPostFormType = {
    newPostBody: string
}

const maxLength = maxLengthCreator(10)

export const AddPostForm: React.FC<InjectedFormProps<AddPostFormType>> = (props) => {
    return (
        <div className={s.addInfoInput}>
            <Form onSubmit={props.handleSubmit}>
                <Field placeholder='Share your news'
                       name={'newPostBody'}
                       component={Textarea}
                       validate={[required, maxLength]}
                />
                <button> Add posts</button>
            </Form>
        </div>
    )
}

const AddPostFormRedux = reduxForm<AddPostFormType>({form: 'AddMessageForm'})(AddPostForm)