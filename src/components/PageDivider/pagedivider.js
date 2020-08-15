import React from 'react'
import "./pagedivider.css"

export default function PageDivider() {
    return (
        <>
            <div className="light-blue">
                <div className="arrow">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="dark-blue"></div>
            </div>
        </>
    )
}