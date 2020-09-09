import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Mail.css'

export class Mail extends Component {
    render() {
        const thisId = this.props.history.match.params.id
        const previousEmail = thisId - 1
        const nextEmail = parseInt(thisId) + 1
        const email = this.props.emails.find(email => email.id === thisId)
        console.log(this.props)
        if (!email) return <div>Loading...</div>
        const sender = this.props.users.find(user => user.id === email.sender_id)
        return (
            <div className='individual-email'>
                <div className='ui large card'>
                    <Link to='/'><button onClick={this.props.keepMailOpen}>x</button></Link>
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
                        <button >Reply</button>
                        <button >Forward</button>
                    </div>
                    <div className='extra content'>
                        <Link to={`/${previousEmail}`}>
                        <button>
                            <i className="left arrow icon">
                            </i>Before</button>
                            </Link>
                        <Link to={`/${nextEmail}`}>
                            <button>
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
