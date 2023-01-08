import React from 'react';
import {UserType} from "../../../redux/users-page-reducer";
import User from './user/User';
import axios from 'axios'

type PropsType = {
    users: UserType[]
    follow: (id: number) => void
    unFollow :(id: number) => void
    setUsers:(newUsers: UserType[]) => void
}


const Users = (props: PropsType) => {

    const setUsers = () => {
        if (props.users.length === 0 ) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>
                props.setUsers(response.data.items)
            )
        }
    }


        // props.setUsers([ {
        //     id: 1,
        //     fullName: {name: 'Bizon', surname: 'Biz'},
        //     photo: 'https://i.pinimg.com/736x/1e/e4/9c/1ee49c569ceea55206d0c05bdaa8be32.jpg',
        //     address: {city: 'Minsk', country: 'Belarus'},
        //     follow: false,
        //     status: "I am happy"
        // },
        //     {
        //         id: 2,
        //         fullName: {name: 'Rick', surname: 'R'},
        //         photo: ' ',
        //         address: {city: 'Minsk', country: 'Belarus'},
        //         follow: true,
        //         status: "I am a boss"
        //     },
        //     {
        //         id: 3,
        //         fullName: {name: 'Panda', surname: 'Junior'},
        //         photo: ' ',
        //         address: {city: 'Minsk', country: 'Belarus'},
        //         follow: true,
        //         status: "I am a panda"
        //     }])


    return (
        <div>
            <br/>
            <button onClick={setUsers}>Add users</button>
            <br/>
            {props.users.map(el=> {
                return (<User key={el.id}
                              name={el.name}
                              id={el.id}
                              photos={el.photos}
                              status={el.status}
                              followed={el.followed}
                              followF={props.follow}
                              unFollowF={props.unFollow}
                />) })}
        </div>
    );
};

export default Users;