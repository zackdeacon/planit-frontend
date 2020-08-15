import React from 'react'
import {Row, Col} from 'antd'
import "./landingcontent.css"

export default function LandingContent() {
    return (
        <>
        <div className="vid-container">
            <video autoPlay="autoplay" loop="loop" muted className="vid">
                <source src="./assets/video/PLANiT2.mp4" type="video/mp4" />
            </video>
            <div className="filter-div">
                <Row justify="center" className="content" >
                    <Col md={{span: 6}} xs={{span: 8}} className="header-container">
                        <img className="our-world" src="./assets/images/ourworld.png" alt="our world"/>
                    </Col>
                    <Col md={{span: 6}} xs={{span: 8}} className="header-container">
                        <img className="your-plan" src="./assets/images/yourplan.png" alt="your plan"/>
                    </Col>
                    <Col md={{span: 3}} xs={{span: 6}}>
                        <img src="./assets/logos/logo.png" alt="logo"/> 
                    </Col>
                </Row>
            </div>
        </div>
        </>
    )
}
