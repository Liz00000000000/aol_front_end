import React, { Component } from 'react'
import Email from './Email'
import '../Styles/HomePage.css'
// import { Link } from 'react-router-dom'

export class HomePage extends Component {
    state = {
        seeNewMessages: true,
        seeSentMessages: false
    }

    seeMail = () => this.setState({ showMail: !this.state.showMail })

    handleOnClick = () => this.setState({ seeNewMessages: !this.state.seeNewMessages, seeSentMessages: !this.state.seeSentMessages})

    render() {
        if(!this.props.showMail) return <button className='ui large button' onClick={this.props.seeMail}>You've Got Mail</button>
        const yourMail = this.props.emails.filter(email => email.reciever_id === this.props.loggedInUser.id)
        const sentMail = this.props.emails.filter(email => email.sender_id === this.props.loggedInUser.id)
         return (
             <div className='email-holder'>
                <div className='ui vertically divided grid'>
                    <button className='ui medium button' onClick={this.handleOnClick}>Inbox</button>
                    <button className='ui medium button' onClick={this.handleOnClick}>OutBox</button>
                    {this.state.seeNewMessages ? yourMail.map(email => <Email seeMail={this.seeMail} users={this.props.users} key={email.id} {...email} />) : null  }
                    {this.state.seeSentMessages ? sentMail.map(email => <Email seeMail={this.seeMail} users={this.props.users} key={email.id} {...email} />) : null  }
                </div>
             </div>
        )
    }
}

export default HomePage
