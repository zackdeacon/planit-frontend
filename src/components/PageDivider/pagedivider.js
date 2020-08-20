import React from 'react'
import {Row} from 'antd'
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
                <Row justify="center">
                    <img className="divider-logo" alt="logo" src="./assets/logos/logo.png"/>
                </Row>
                <div className="dark-blue"></div>
            </div>
        </>
    )
}