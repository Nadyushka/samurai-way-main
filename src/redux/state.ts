type contactDataType = {
    id: number
    name: string
}

type messageDataType = {
    id: number
    message: string
}

type postsDataType = {
    id: number
    post: string
    likesCount: number
    commentsCount: number
}

type profilePagesType = {
    posts: postsDataType[]
}

type messagePagesType = {
    contacts: contactDataType[]
    dialogs: messageDataType[]
}

type stateType = {
    profilePages: profilePagesType
    messagePages: messagePagesType
}

export let state:stateType = {
    profilePages: {
        posts: [{id: 1, post: 'Hello, everyone', likesCount: 10, commentsCount: 0},
            {id: 2, post: 'I am happy', likesCount: 13, commentsCount: 0}]
    },
    messagePages: {
        contacts: [
                {id: 1, name: 'Bison'},
                {id: 2, name: 'John'},
                {id: 3, name: 'Alexa'},
                {id: 4, name: 'Peter'},
                {id: 5, name: 'Sandra'}]
        ,
        dialogs: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Enjoy your day'}
        ]

    }

}
