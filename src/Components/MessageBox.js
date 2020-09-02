import React, { Component } from 'react'
import '../Styles/MessageBox.css'

export class MessageBox extends Component{
    state = {
        messages: [],
        newMessage: ''
    }

    handleOnChange = e => this.setState({ [e.target.name]: e.target.value })


    submitMessage = () => this.setState({ messages: [...this.state.messages, this.state.newMessage], newMessage: ''  })


    render(){
        console.log(this.props)
        return(
            <div className='instant-message'>
                <button className='ui tiny button' onClick={this.props.removeMessageBox}>x</button>
                {this.props.friend.first_name}
                {this.state.messages.map((mess,index) => <p key={index}>{mess}</p>)}
                <br></br>
                <input onChange={this.handleOnChange} value={this.state.newMessage} name='newMessage'></input>
                <br></br>
                <button className='ui tiny button' onClick={this.submitMessage}>Submit</button>
            </div>
        )
    }
}

export default MessageBox