import React, { Component } from 'react'
import IndividualFriend from './IndividualFriend'

export class InstantMessageer extends Component {
    render() {
        return (
            <div>
                {this.props.friends.map(friend => <IndividualFriend key={friend.id} {...friend} users={this.props.users} instantMessages={this.props.instantMesages} loggedInUser={this.props.loggedInUser} />)}
            </div>
        )
    }
}

export default InstantMessageer
