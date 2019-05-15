import React from 'react'

function AssessmentView({ title, content }) {
    return (
        <>
            <h1>{ title }</h1>
            { content }
        </>
    )
}

export default AssessmentView