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
        if (props.display === true) {
        } else {
        let timeleft = 1
        let countdown = setInterval(() => {
                if (timeleft === 0){
                    setClassName("disappear");
                    clearInterval(countdown);
                } else {
                    timeleft = timeleft - 1;
                }
            }, 500);
        }
    }

    useEffect(() => {
        displayNone()
    }, [props.display])

    return (
        <div className={className} style={setLoadingStyle()}>
            <img className="loading-logo" src="./assets/logos/logo.png" alt="logo"/>
            <img className="loading-text" src="./assets/logos/txt.png" alt="logo-text"/>
        </div>
    )
}

