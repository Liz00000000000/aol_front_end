import React, { Component } from 'react'
import '../Styles/MessageBox.css'

export class MessageBox extends Component{

    render(){
        console.log(this.props)
        return(
            <div className='instant-message'>
                <button className='ui tiny button' onClick={this.props.removeMessageBox}>x</button>
                {this.props.friend.first_name}
                <input></input>
            </div>
        )
    }
}

export default MessageBox