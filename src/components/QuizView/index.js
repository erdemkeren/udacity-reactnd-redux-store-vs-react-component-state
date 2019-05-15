import React from 'react'

function QuizView({ title, content }) {
    return (
        <>
            <h1>{ title }</h1>
            { content }
        </>
    )
}

export default QuizView