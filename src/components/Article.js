import React from 'react'

export default function Article({ title, date = "January 1, 1970", preview, minutes }) {
    // if (minutes > 30) {
    //     let 
        
    // }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} • {minutes} to read</small>
            <p>{preview}</p>

        </article>
    )
}