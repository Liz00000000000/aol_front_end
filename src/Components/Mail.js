import React, { Component } from 'react'

export class Mail extends Component {
    render() {
        const thisId = this.props.history.match.params.id
        const email = this.props.emails.find(email => email.id == thisId)
        if (!email) return <div>Loading...</div>
        const sender = this.props.users.find(user => user.id === email.sender_id)
        const reciever = this.props.users.find(user => user.id === email.reciever_id)
        return (
            <div className='email-holder'>
                <img className='thumbnail' src={sender.picture} alt={sender.first_name}/> {sender.first_name + ' ' + sender.last_name}
                <br></br>Subject: {email.subject_line}
                <div className='email-text'>
                    {email.content}
                </div>
            </div>
        )
    }
}

export default Mail
