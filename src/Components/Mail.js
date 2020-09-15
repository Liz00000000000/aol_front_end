import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Mail.css'

export class Mail extends Component {
    state = {
        response: false,
        forward: false,
        newMessageInput: ''
    }

    send = () => console.log(this.state.newMessageInput)

    handleOnClick = event => this.setState({ [event.target.name]: true })

    render() {
        const thisId = this.props.history.match.params.id
        const previousEmail = thisId - 1
        const nextEmail = parseInt(thisId) + 1
        const email = this.props.emails.find(email => email.id === parseInt(thisId))
        if (!email) return <div>Loading...</div>
        const sender = this.props.users.find(user => user.id === email.sender_id)
        if (this.state.response) return (
            <div className='individual-email'>
            <div className='ui large card'>
                <Link to='/'><button onClick={this.props.keepMailOpen}>x</button></Link>
                <img className='ui small circular image' src={sender.picture} alt={sender.first_name}/> {sender.first_name + ' ' + sender.last_name}
                <div className='content'>
                <br></br>Subject: RE: {email.subject_line}
                </div>
                <div className='content'>
                    <div className='email-text'>
                        <input className='reply'></input>
                    </div>
                </div>
                <div className='extra content'>
                    <button onClick={this.send} name='response' value='response'>Send</button>
                    <button onClick={this.send} name='forward' value='forward'>Forward</button>
                </div>
                <div className='extra content'>
                    <Link to={`/email/${previousEmail}`}>
                    <button>
                        <i className="left arrow icon">
                        </i>Answer Before</button>
                        </Link>
                    <Link to={`/email/${nextEmail}`}>
                        <button>
                        <i className="right arrow icon"></i>
                        Answer Next
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        )
        // const thisId = this.props.history.match.params.id
        // const previousEmail = thisId - 1
        // const nextEmail = parseInt(thisId) + 1
        // const email = this.props.emails.find(email => email.id === parseInt(thisId))
        // if (!email) return <div>Loading...</div>
        // const sender = this.props.users.find(user => user.id === email.sender_id)
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
                        <button onClick={this.handleOnClick} name='response' value='response'>Reply</button>
                        <button onClick={this.handleOnClick} name='forward' value='forward'>Forward</button>
                    </div>
                    <div className='extra content'>
                        <Link to={`/email/${previousEmail}`}>
                        <button>
                            <i className="left arrow icon">
                            </i>Before</button>
                            </Link>
                        <Link to={`/email/${nextEmail}`}>
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
