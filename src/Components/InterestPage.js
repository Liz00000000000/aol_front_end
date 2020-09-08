import React from 'react'

const InterestPage = props => {
    return (
        <div>
            <h2>This {props.history.match.params.topic} is great</h2>
        </div>
    )
}

export default InterestPage