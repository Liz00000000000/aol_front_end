import React, { Component } from 'react'
import IndividualFriend from './IndividualFriend'
import '../Styles/InstantMessangeer.css'

export class InstantMessageer extends Component {
    render() {
        return (
            <div className='instant-message-div'>
                <div className='ui grid'>
                {this.props.friends.map(friend => <IndividualFriend key={friend.id} {...friend} users={this.props.users} instantMessages={this.props.instantMesages} loggedInUser={this.props.loggedInUser} />)}
                </div>
            </div>
        )
    }
}

export default InstantMessageer
