import React from 'react';
import "./loading.css";

export default function Loading(props) {

    // opacity: props.display ? 1 : 0, display: props.phone ? "block" : "none" 

    const setLoadingStyle = () => {
        if (props.width > 499) { 
            return {opacity: props.display ? 1 : 0}
        } else {
            return {display: props.display ? "block" : "none"}
        }
    }

    return (
        <div className="loading-div" style={setLoadingStyle()}>
            <img className="loading-logo" src="./assets/logos/logo.png" alt="logo"/>
            <img className="loading-text" src="./assets/logos/txt.png" alt="logo-text"/>
        </div>
    )
}

