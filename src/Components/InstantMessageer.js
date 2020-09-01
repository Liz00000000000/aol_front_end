import React, { Component } from 'react'
import IndividualFriend from './IndividualFriend'
import '../Styles/InstantMessangeer.css'
import MessageBox from './MessageBox'

export class InstantMessageer extends Component {
    state = {
        instaBoxVisable: false,
        friend: {}
    }

    instaBoxVisable = (friend) => this.setState({ instaBoxVisable: true, friend: friend })

    removeMessageBox = () => this.setState({ instaBoxVisable: false })

    render() {
        return (
            <div className='aim-box'>
                <div className='instant-message-div'>
                    <div className='ui row'>
                    {this.props.friends.map(friend => <IndividualFriend instaBoxVisable={this.instaBoxVisable} key={friend.id} {...friend} users={this.props.users} instantMessages={this.props.instantMesages} loggedInUser={this.props.loggedInUser} />)}
                    </div>
                </div>
                {this.state.instaBoxVisable ? <div><MessageBox removeMessageBox={this.removeMessageBox} friend={this.state.friend} /></div> : null }
            </div>
        )
    }
}

export default InstantMessageer
