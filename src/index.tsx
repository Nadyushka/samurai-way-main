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
    {id: 1, message: 'Enjoy your day'}]



ReactDOM.render(
    <App contactData={contactData}/>,
    document.getElementById('root')
);