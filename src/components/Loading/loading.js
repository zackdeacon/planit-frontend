import userEvent from '@testing-library/user-event';
import React, {useState, useEffect} from 'react';
import "./loading.css";

export default function Loading(props) {

    const [className, setClassName] = useState("loading-div")

    const setLoadingStyle = () => {
        if (props.width > 499) { 
            return {opacity: props.display ? 1 : 0}
        } else {
            return {display: props.display ? "block" : "none"}
        }
    }

    const displayNone = () => {
        let timeleft = 3
        let countdown = setInterval(() => {
            if (timeleft === 0){
                setClassName("disappear");
                clearInterval(countdown);
            } else {
                timeleft = timeleft - 1;
            }
        }, 1000);
    }

    useEffect(() => {
        displayNone()
    }, [])

    return (
        <div className={className} style={setLoadingStyle()}>
            <img className="loading-logo" src="./assets/logos/logo.png" alt="logo"/>
            <img className="loading-text" src="./assets/logos/txt.png" alt="logo-text"/>
        </div>
    )
}

