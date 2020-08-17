import React from 'react'
import './dashmod.css'

export default function DashMod(props) {
    return (
        <div className="mod-div">
        <div className="dashmod-container">
            <a onClick={props.handleClick} className="exit">X</a>
            Stuff
        </div>
        </div>
    )
}
