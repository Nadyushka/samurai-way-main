import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type contactDataType = {
    id: number
    name: string
}

let contactData: Array<contactDataType> = [
    {id: 1, name: 'Bison'},
    {id: 2, name: 'John'},
    {id: 3, name: 'Alexa'},
    {id: 4, name: 'Peter'},
    {id: 5, name: 'Sandra'}]

export type messageDataType = {
    id:number
    message:string
}

let messageData:messageDataType[] = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Enjoy your day'}]

export type postsDataType = {
    id: number
    post: string
    likesCount: number
    commentsCount: number
}

let postsData: postsDataType[] = [{id: 1, post: 'Hello, everyone', likesCount: 10, commentsCount: 0},
    {id: 2, post: 'I am happy', likesCount: 13, commentsCount: 0}]

ReactDOM.render(
    <App contactData={contactData} messageData={messageData} postsData={postsData}/>,
    document.getElementById('root')
);