import React, { Component } from 'react'

export class MessageBox extends Component{

    render(){
        console.log(this.props)
        return(
            <div>
                <button className='ui tiny button' onClick={this.props.removeMessageBox}>x</button>
                <h2>Hi Greg</h2>
            </div>
        )
    }
}

export default MessageBox