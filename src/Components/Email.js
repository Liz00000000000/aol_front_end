import React, { Component } from 'react'

export class Email extends Component {
    render() {
        const sender = this.props.users.find(user => user.id === this.props.sender_id)
        const reciever = this.props.users.find(user => user.id === this.props.reciever_id)
        console.log(sender.first_name + ' ' + reciever.last_name)
        return (
            <div>
               <img src={sender.picture} alt={sender.first_name}/> {sender.first_name + ' ' + sender.last_name} {this.props.subject_line} {reciever.first_name + ' ' + reciever.last_name}
            </div>
        )
    }
}

export default Email
