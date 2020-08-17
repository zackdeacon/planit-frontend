import React from 'react';
import { Card, Col, Row, Button } from 'antd';
import { SettingTwoTone } from '@ant-design/icons';
import "./usercard.css"
import MapCarousel from '../MapCarousel/MapCarousel';

export default function UserCard(props) {
    return (
        <>
            <div className="site-card-wrapper">
                <div className="background-wrapper">
                <Row className="card-column">
                    <Col span={12} >
                        <Card title="Welcome to Your PLANiT" bordered={true}>
                            <div className="card-content">
                            <h3 >Username: Bryce
                                {/* {props.name} */}
                                </h3>
                                </div>
                                <div className="card-content">
                                <h3>Email: bryce@bryce.bryce
                                {/* {props.email} */}
                                </h3>
                                </div>
                                <div className="card-content">
                                <Button shape="circle" size="large" style={{borderColor: "#6c8e98"}} icon={<SettingTwoTone twoToneColor="#576d65"/>} />
                                </div>
                        </Card>
                        <MapCarousel maps={props.maps}/>
                    </Col>
                </Row>
                </div>
            </div>,
        </>
    )
}
