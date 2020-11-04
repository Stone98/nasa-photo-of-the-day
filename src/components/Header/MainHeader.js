import React from "react";
import "./MainHeader.css";

export default function MainHeader(props) {
    const { apod } = props;

    return (
        <div>
            <div>
                <h1>Astronomy Picture of the Day</h1>
            </div>
            <div>
                <p>{apod.date}</p>
            </div>
        </div>
    )
}

