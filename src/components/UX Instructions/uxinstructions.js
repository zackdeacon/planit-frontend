import React from 'react'
import {Row, Col} from 'antd'
import "./uxinstructions.css"

export default function UXI() {

    return (
        <>
        <div className="ux-container">
            <div className="ux-filter">
                <div className="buffer"></div>
                    <Row align="middle" justify="center">
                        <Col className="ux-text">CREATE A MAP
                        <p>Your trip's planning board</p>
                        </Col>
                        <Col xs={{span:8}}></Col>
                    </Row>
                    <Row justify="center">
                        <Col className="ux-text">INVITE YOUR GROUP
                        <p>Your trip collaborators</p>
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col xs={{span:8}} ></Col>
                        <Col className="ux-text">PLANiT TOGETHER
                        <p>Suggest & vote on plans</p>
                        </Col>
                    </Row>
            </div>
        </div>
        </>
    )
}


