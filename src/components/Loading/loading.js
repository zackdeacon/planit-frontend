import React from 'react';
import "./loading.css";

export default function Loading(props) {

    // opacity: props.display ? 1 : 0, display: props.phone ? "block" : "none" 

    return (
        <div className="loading-div" style={{ opacity: props.display ? 1 : 0}}>
            <img className="loading-logo" src="./assets/logos/logo.png" alt="logo"/>
            <img className="loading-text" src="./assets/logos/txt.png" alt="logo-text"/>
        </div>
    )
}

