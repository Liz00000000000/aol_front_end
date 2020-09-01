import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Mail extends Component {
    render() {
        const thisId = this.props.history.match.params.id
        const previousEmail = thisId - 1
        const nextEmail = parseInt(thisId) + 1
        const email = this.props.emails.find(email => email.id == thisId)
        if (!email) return <div>Loading...</div>
        const sender = this.props.users.find(user => user.id === email.sender_id)
        const reciever = this.props.users.find(user => user.id === email.reciever_id)
        return (
            <div className='ui three doubling stackable cards'>
            <div className='ui large card'>
                <Link to='/'><div onClick={this.props.keepMailOpen} className='ui tiny button'>x</div></Link>
                <img className='ui small circular image' src={sender.picture} alt={sender.first_name}/> {sender.first_name + ' ' + sender.last_name}
                <div className='content'>
                <br></br>Subject: {email.subject_line}
                </div>
                <div className='content'>
                <div className='email-text'>
                    {email.content}
                </div>
                </div>
                <div className='extra content'>
                    <button className='ui medium button'>Reply</button>
                    <button className='ui medium button'>Forward</button>
                </div>
                <div className='extra content'>
                    <Link to={`/${previousEmail}`}>
                       <button className="ui labeled icon button">
                        <i className="left arrow icon">
                        </i>Before</button>
                        </Link>
                    <Link to={`/${nextEmail}`}>
                        <button className="ui right labeled icon button">
                        <i className="right arrow icon"></i>
                        Next
                        </button>
                    </Link>
                </div>
            </div>
            </div>
        )
    }
}

export default Mail
