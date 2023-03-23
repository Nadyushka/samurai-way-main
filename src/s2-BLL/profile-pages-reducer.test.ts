import {addNewPostActionCreator, postDeleteActionCreator, profilePageReducer} from "./profile-pages-reducer";

export {}

let initialState: any = {
    posts: [
        {id: 1, post: 'Hello, everyone', likesCount: 10, commentsCount: 0},
        {id: 2, post: 'I am happy', likesCount: 13, commentsCount: 0}
    ],
}


test('the message should be added', ()=> {
    let action = addNewPostActionCreator('I am so happy')
    let newState = profilePageReducer(initialState,action)
    expect(newState.posts.length).toBe(3)
})



test('new message should be \'I am so happy\'', ()=> {
    let action = addNewPostActionCreator('I am so happy')
    let newState = profilePageReducer(initialState,action)
    expect(newState.posts[2].post).toBe('I am so happy')
})

test('The message should be deleted', ()=> {
    let action = postDeleteActionCreator(1)
    let newState = profilePageReducer(initialState,action)
    expect(newState.posts.length).toBe(1)
})