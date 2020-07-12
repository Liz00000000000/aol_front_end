import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Email extends Component {
    render() {
        const sender = this.props.users.find(user => user.id === this.props.sender_id)
        const reciever = this.props.users.find(user => user.id === this.props.reciever_id)
        return (
            <div className='email-container'>
               <Link to={`/${this.props.id}`}>{sender.first_name + ' ' + sender.last_name} {this.props.subject_line} {reciever.first_name + ' ' + reciever.last_name}</Link>
            </div>
        )
    }
}

export default Email
