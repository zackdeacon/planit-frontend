import React, {useState, useEffect} from 'react'
import {Row, Col} from 'antd'
import Aos from 'aos'
import Loading from "../../components/Loading/loading"
import "aos/dist/aos.css"
import "./landingcontent.css"

export default function LandingContent() {

    const [loading, setLoading] = useState(true);
    const [width, setWidth] = useState(window.innerWidth);

// Function runs when video is finished loading
    const onLoadedData = () => {
        let timeleft = 1
        let countdown = setInterval(() => {
            if (timeleft === 0){
                setLoading(false);
                clearInterval(countdown)
            } else {
                timeleft = timeleft - 1;
            }
        }, 1000);
    };

// Function sets the width state according to vw
    const checkWidth = () => {
        setWidth(window.innerWidth);
    };

// useEffect that sets animation duration and listens for vw change
    useEffect(() => {
        Aos.init({ duration: 1000 });
        window.addEventListener('resize', checkWidth);
    }, [])

    return (
        <>
        <div className="vid-container" id="home-top">

            <video autoPlay="autoplay" loop="loop" muted className="vid" onLoadedData={onLoadedData} style={{ opacity: loading ? 0 : 1 }}>
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

            <Loading display={loading} width={width} /> 
            
            <div className="still-image"></div> 
        </div>
        </>
    )
}
