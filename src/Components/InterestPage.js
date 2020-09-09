import React from 'react'

const InterestPage = props => {
    return (
        <div>
            <h2>{props.history.match.params.topic}</h2>
        </div>
    )
}

export default InterestPage