import React, {useEffect} from 'react'
import {Row, Col} from 'antd'
import Aos from 'aos'
import "aos/dist/aos.css"
import "./landingcontent.css"

export default function LandingContent() {

    useEffect(() => {
        Aos.init({ duration: 1000  })
    }, [])

    return (
        <>
        <div className="vid-container" id="home-top">
            <video autoPlay="autoplay" loop="loop" muted className="vid">
                <source src="./assets/video/PLANiT2.mp4" type="video/mp4" />
            </video>
            <div data-aos="fade" data-aos-delay='3000' className="center-end-arrow-lc">
                <div className="arrow-lc">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
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
