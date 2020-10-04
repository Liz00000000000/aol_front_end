import React from 'react'
import '../Styles/Send.css'

const Send = props => {
    return (
        <div className="send">
            <button onClick={props.outOfSent}>X</button>
            Email Has Been Sent
        </div>
    )
}

export default Send