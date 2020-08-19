import React from 'react';
import { Card, Col, Row, Button } from 'antd';
import { SettingTwoTone } from '@ant-design/icons';
import "./usercard.css"
import MapCarousel from '../MapCarousel/MapCarousel';

export default function UserCard(props) {
    const { userData } = props;
    console.log(userData);
    return (
        <>
            <div className="site-card-wrapper">
                <div className="background-wrapper">
                    <Row justify="center">
                        <Col span={12} className="card-column" >
                            <Card title="Your PLANiT" bordered={true}>
                                <div className="card-content">
                                    <p className="user-info">{userData.name.first} {userData.name.last}</p>
                                </div>
                                <div className="card-content">
                                    <p className="user-info">Username: {userData.username}</p>
                                </div>
                                <div className="card-content">
                                    <p className="user-info">Email: {userData.email}</p>
                                </div>
                                <div className="card-content">
                                    <Button shape="circle" size="large" style={{ borderColor: "#6c8e98" }} icon={<SettingTwoTone twoToneColor="#576d65" />} />
                                </div>
                            </Card>
                            <MapCarousel header="My trips:" maps={userData.createdMaps} />
                            <MapCarousel header="Trip member on:" maps={userData.guestMaps} />
                            <MapCarousel header="Invitations:" maps={userData.invitations} />
                        </Col>
                    </Row>
                </div>
            </div>,
        </>
    )
}
