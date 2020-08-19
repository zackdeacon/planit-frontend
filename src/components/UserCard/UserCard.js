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
                <Row justify="center">
                    <Col span={12} className="card-column" >
                        <Card title="Your PLANiT" bordered={true}>
                            <div className="card-content">
                            <p className="user-info">Username: {props.user.username}
                                </p>
                                </div>
                                <div className="card-content">
                                <p className="user-info">Email: {props.user.email}
                                </p>
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
