import React from 'react'
import {Row, Col} from 'antd'
import "./uxinstructions.css"

export default function UXI() {

    return (
        <>
        <div className="ux-container">
            <Row className="ux-filter-align">
                <div className="top-ux-inst" >
                    <Col className="ux-text">CREATE A MAP
                        <p>Your trip's planning board</p>
                    </Col>
                </div>
                <div >
                    <Col className="ux-text">INVITE YOUR GROUP
                        <p>Your trip collaborators</p>
                    </Col>
                </div>
                <div className="bottom-ux-inst" >
                    <Col className="ux-text">PLANiT TOGETHER
                        <p>Suggest & vote on plans</p>
                    </Col>
                </div>
            </Row>
        </div>
        </>
    )
}


