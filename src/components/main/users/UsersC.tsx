import React from 'react';
import {UserType} from "../../../redux/users-page-reducer";
import User from './user/User';
import axios from 'axios'

type PropsType = {
    users: UserType[]
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (newUsers: UserType[]) => void
}

class Users extends React.Component<PropsType, any> {

      
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users?page=3&count=3").then(response =>
            this.props.setUsers(response.data.items)
        )
    }


    render() {
        return (
            <div>

                {this.props.users.map(el => {
                    return (<User key={el.id}
                                  name={el.name}
                                  id={el.id}
                                  photos={el.photos}
                                  status={el.status}
                                  followed={el.followed}
                                  followF={this.props.follow}
                                  unFollowF={this.props.unFollow}
                    />)
                })}
            </div>
        );
    }
}

export default Users;