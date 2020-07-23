import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Mail extends Component {
    render() {
        const thisId = this.props.history.match.params.id
        const email = this.props.emails.find(email => email.id == thisId)
        if (!email) return <div>Loading...</div>
        const sender = this.props.users.find(user => user.id === email.sender_id)
        const reciever = this.props.users.find(user => user.id === email.reciever_id)
        return (
            <div className='email-holder'>
                <Link to='/'><div className='ui tiny button'>x</div></Link>
                <img className='ui small circular image' src={sender.picture} alt={sender.first_name}/> {sender.first_name + ' ' + sender.last_name}
                <br></br>Subject: {email.subject_line}
                <div className='email-text'>
                    {email.content}
                </div>
            </div>
        )
    }
}

export default Mail
