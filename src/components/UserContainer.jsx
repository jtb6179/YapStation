import React, { Component } from 'react'
import UserCard from "./UserCard"

export class UserContainer extends Component {
    render() {
        let arrayOfComponents = this.props.users.map((oneUser) => {
            return <UserCard key={oneUser.id} usersInfo={oneUser} current_user={this.props.current_user} 
                                         addFriends={this.props.addFriends} token={this.props.token} />
          })
        // console.log(this.props.user);
        return (
            <div>
                {arrayOfComponents}
            </div>
        )
    }
}

export default UserContainer
