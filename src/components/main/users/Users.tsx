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