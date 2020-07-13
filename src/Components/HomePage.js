import React, { Component } from 'react'
import Email from './Email'
import '../Styles/HomePage.css'
// import { Link } from 'react-router-dom'

export class HomePage extends Component {
    state = {
        showMail: false,
        seeNewMessages: true,
        seeSentMessages: false
    }

    seeMail = () => this.setState({ showMail: !this.state.showMail })

    handleOnClick = () => this.setState({ seeNewMessages: !this.state.seeNewMessages, seeSentMessages: !this.state.seeSentMessages})

    render() {
        if(!this.state.showMail) return <button className='youve-got-mail-button' onClick={this.seeMail}>You've Got Mail</button>
        const yourMail = this.props.emails.filter(email => email.reciever_id === this.props.loggedInUser.id)
        const sentMail = this.props.emails.filter(email => email.sender_id === this.props.loggedInUser.id)
         return (
            <div className='email-holder'>
                <button onClick={this.handleOnClick}>Inbox</button>
                <button onClick={this.handleOnClick}>OutBox</button>
                {this.state.seeNewMessages ? yourMail.map(email => <Email users={this.props.users} key={email.id} {...email} />) : null  }
                 {this.state.seeSentMessages ? sentMail.map(email => <Email users={this.props.users} key={email.id} {...email} />) : null  }
            </div>
        )
    }
}

export default HomePage
