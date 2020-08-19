import React, {useState} from 'react';
import { Card, Col, Row, Button, Modal } from 'antd';
import { SettingTwoTone } from '@ant-design/icons';
import "./usercard.css"
import MapCarousel from '../MapCarousel/MapCarousel';

export default function UserCard(props) {

    const [modal, setModal] = useState({
        visible: false 
    })

    const switchModal = () => {
        setModal({
            visible: !modal.visible,
        });
    };


    const { userData } = props;
    console.log(userData);

    return (
        <>
            <div className="site-card-wrapper">
                <div className="background-wrapper">
                    <Row justify="center">
                        <Col span={12} className="card-column" >
                            <Card title="YOUR PLANiT" bordered={true}>
                                <Row justify="center">
                                  <Col xs={{span:12}}>
                                    <p className="user-info"><strong>{userData.name.first} {userData.name.last}</strong></p>
                                  </Col>
                                </Row>
                                <div className="card-content">
                                    <p className="user-info"><strong>Username:</strong> {userData.username}</p>
                                </div>
                                <div className="card-content">
                                    <p className="user-info"><strong>Email:</strong> {userData.email}</p>
                                </div>
                                <Row justify="end">
                                    <Button onClick={switchModal} shape="circle" size="large" style={{ borderColor: "#6c8e98", paddingTop:"6px" }} icon={<SettingTwoTone twoToneColor="#576d65" />} />
                                </Row>
                            </Card>
                            <MapCarousel header="My Trips:" maps={userData.createdMaps} />
                            <MapCarousel header="Trip Member On:" maps={userData.guestMaps} />
                            <MapCarousel header="Invitations:" maps={userData.invitations} />
                        </Col>
                    </Row>
                </div>
            </div>

            <Modal
                title={userData.username}
                visible={modal.visible}
                onOk={switchModal}
                onCancel={switchModal}
                okButtonProps={{ disabled: false }}
                cancelButtonProps={{ disabled: false }}
                >

            </Modal>
        </>
    )
}
