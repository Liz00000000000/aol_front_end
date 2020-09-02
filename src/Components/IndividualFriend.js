import React, { Component } from 'react'

export class IndividualFriend extends Component {
    
    findTheFriendId = (obj) => {
        if(obj.friend_1 === this.props.loggedInUser.id){
            return obj.friend_2
        } else {
            return obj.friend_1
        }
    }

    render() {
        const friend = this.props.users.find(user => user.id === this.findTheFriendId(this.props))
       if (!friend) return <div>Loading...</div>
        return (
            <div>
                {friend.isOnline ? <button><strong onClick={() => this.props.instaBoxVisable(friend)}>{friend.username}</strong></button> : null}
            </div>
        )
    }
}

export default IndividualFriend
