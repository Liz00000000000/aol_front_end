import React, { Component } from 'react'
import Email from './Email'
import '../Styles/HomePage.css'
// import { Link } from 'react-router-dom'

export class HomePage extends Component {
    state = {
        seeNewMessages: true,
        seeSentMessages: false
    }

    handleOnClick = () => this.setState({ seeNewMessages: !this.state.seeNewMessages, seeSentMessages: !this.state.seeSentMessages})

    render() {
        if(!this.props.showMail) return <h1><i id='mailbutton' className="envelope icon" onClick={this.props.seeMail}></i></h1>
        const yourMail = this.props.emails.filter(email => email.reciever_id === this.props.loggedInUser.id)
        const sentMail = this.props.emails.filter(email => email.sender_id === this.props.loggedInUser.id)
        yourMail.sort((a, b) => (a.id > b.id) ? -1 : 1)
        sentMail.sort((a, b) => (a.id > b.id) ? -1 : 1)
        console.log(sentMail)
         return (
             <div className='email-holder'>
                 <div className='buttons'>
                     <div className='ui large buttons'>
                        <button className='ui positive button' onClick={this.handleOnClick}>Inbox</button>
                        <div className='or'></div>
                        <button className='ui positive button' onClick={this.handleOnClick}>OutBox</button>
                    </div>          
                 </div>
                <div className='ui vertically divided grid'>
                    {this.state.seeNewMessages ? yourMail.map(email => <Email seeMail={this.seeMail} users={this.props.users} key={email.id} {...email} />) : null  }
                    {this.state.seeSentMessages ? sentMail.map(email => <Email seeMail={this.seeMail} users={this.props.users} key={email.id} {...email} />) : null  }
                </div>
             </div>
        )
    }
}

export default HomePage
