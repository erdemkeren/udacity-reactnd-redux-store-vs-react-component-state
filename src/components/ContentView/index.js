import React from 'react'

function ContentView({ title, content }) {
    return (
        <>
            <h1>{ title }</h1>
            { content }
        </>
    )
}

export default ContentView