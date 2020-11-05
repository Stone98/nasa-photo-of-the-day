import React from 'react'
import "./Content.css";

export default function Content(props) {
    const { apod } = props;

    return (
        <div>
            <div>
                <img src={apod.hdurl} alt='nasa' style={{ maxWidth: '75%' }} />
            </div>
            <div>
                <h2>{apod.title}</h2>
            </div>
            <div>
                <p><strong>Explanation:</strong> {apod.explanation}</p>
            </div>
        </div>
    )
}

