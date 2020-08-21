import React from 'react'
import "./pagedivider.css"

export default function PageDivider() {
    return (
        <>
            {/* <div className="arrow">
                <span></span>
                <span></span>
                <span></span>
            </div> */}

            <div className="divider-filter">
                <div className="light-blue"></div>
                <div className="divider-logo"></div>
                <div className="dark-blue"></div>
            </div>
        </>
    )
}