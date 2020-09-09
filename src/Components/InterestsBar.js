import React from 'react'
import { Link } from 'react-router-dom'

const InterestsBar = props => {
    const topic = props.myInterests.map(top => top.topic)
    return (
        <div>
            {topic.map((topic, index) => <Link to={`/interest/${topic}`}><p key={index}>{topic}</p></Link>)}
        </div>
    )
}

export default InterestsBar