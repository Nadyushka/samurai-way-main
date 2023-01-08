import React from 'react';
import {UserType} from "../../../redux/users-page-reducer";
import User from './user/User';

type PropsType = {
    users: UserType[]
    follow: (id: number) => void
    unFollow :(id: number) => void
    setUsers:(newUsers: UserType[]) => void
}


const Users = (props: PropsType) => {

    if (props.users.length === 0 ) {
        props.setUsers([ {
            id: 1,
            fullName: {name: 'Bizon', surname: 'Biz'},
            photo: 'https://i.pinimg.com/736x/1e/e4/9c/1ee49c569ceea55206d0c05bdaa8be32.jpg',
            address: {city: 'Minsk', country: 'Belarus'},
            follow: false,
            status: "I am happy"
        },
            {
                id: 2,
                fullName: {name: 'Rick', surname: 'R'},
                photo: ' ',
                address: {city: 'Minsk', country: 'Belarus'},
                follow: true,
                status: "I am a boss"
            },
            {
                id: 3,
                fullName: {name: 'Panda', surname: 'Junior'},
                photo: ' ',
                address: {city: 'Minsk', country: 'Belarus'},
                follow: true,
                status: "I am a panda"
            }])
    }

    return (
        <div>
            {props.users.map(el=> {
                return (<User key={el.id}
                              fullName={el.fullName}
                              id={el.id}
                              photo={el.photo}
                              address={el.address}
                              status={el.status}
                              follow={el.follow}
                              followF={props.follow}
                              unFollowF={props.unFollow}
                />) })}
        </div>
    );
};

export default Users;