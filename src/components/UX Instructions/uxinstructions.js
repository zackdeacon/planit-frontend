import React, {useEffect} from 'react'
import Aos from 'aos'
import {Row, Col} from 'antd'
import "./uxinstructions.css"
import "aos/dist/aos.css"

export default function UXI() {

    useEffect(() => {
        Aos.init({ duration: 3500,  })
    }, [])

    return (
        <>
        <div className="ux-container">
            <Row className="ux-filter-align">
                <div className="top-ux-inst" >
                    <Col data-aos="fade-up" className="ux-text">CREATE A MAP
                        <p>Your trip's planning board</p>
                    </Col>
                </div>
                <div >
                    <Col data-aos="fade-up" className="ux-text">INVITE YOUR GROUP
                        <p>Your trip collaborators</p>
                    </Col>
                </div>
                <div data-aos="fade-up" className="bottom-ux-inst" >
                    <Col className="ux-text">PLANiT TOGETHER
                        <p>Suggest & vote on plans</p>
                    </Col>
                </div>
            </Row>
        </div>
        </>
    )
}


