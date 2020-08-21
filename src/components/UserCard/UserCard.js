import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Card, Col, Row, Button, Modal, List, Avatar } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { SettingTwoTone, ApiFilled } from '@ant-design/icons';
import MapCarousel from '../MapCarousel/MapCarousel';
import API from "../../utils/API"
import "./usercard.css"

const inviteDiv = {
    height: '160px',
    color: '#fff',
    background: '#6C8E98',
    border: "solid",
    borderColor: "#fff"
};

export default function UserCard(props) {

    const { userData } = props;
    console.log(userData);

    let history = useHistory();

    const [modal, setModal] = useState({
        visible: false
    })

    const switchModal = () => {
        setModal({
            visible: !modal.visible,
        });
    };

    const deleteAccount = () => {
        const id = userData._id
        API.deleteUser(id).then(res => {
            console.log("User deleted");
            history.push("/")
        })
    }

    const handleAccept = (mapId) => {
        console.log("accepted: ", mapId);
        API.acceptMapInvitiation(mapId).then(res => {
            console.log(res)
        });
    }

    const handleDecline = (mapId) => {
        console.log("declined: ", mapId);
        API.declineMapInvitiation(mapId).then(res => {
            console.log(res)
        });
    }

    return (
        <>
            <div className="site-card-wrapper">
                <div className="background-wrapper">
                    <Row justify="center">
                        <Col lg={{ span: 12 }} md={{ span: 18 }} sm={{ span: 20 }} className="card-column" >
                            <Card title="YOUR PLANiT" bordered={true}>
                                <Row justify="center">
                                    <Col xs={{ span: 12 }}>
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
                                    <Button onClick={switchModal} shape="circle" size="large" style={{ borderColor: "#6c8e98" }} icon={<SettingTwoTone twoToneColor="#576d65" />} />
                                </Row>
                            </Card>
                            <MapCarousel header="My Trips:" maps={userData.createdMaps} />
                            <MapCarousel header="Trip Member On:" maps={userData.guestMaps} />
                            {/* 
                                https://codesandbox.io/s/lq5zq?file=/index.js:2009-2885
                                https://ant.design/components/list/
                            */}
                            <h2>Pending Invitations: </h2>
                            <div style={inviteDiv}>
                                <List
                                    className="demo-loadmore-list"
                                    itemLayout="horizontal"
                                    dataSource={userData.invitations}
                                    renderItem={(invite) => (
                                        <List.Item
                                            actions={[
                                                <a onClick={() => handleAccept(invite._id)}>Accept</a>,
                                                <a onClick={() => handleDecline(invite._id)}>Decline</a>
                                            ]}
                                            style={{ margin: "5px 2% 5px 2%", backgroundColor: "#fff", padding: "12px 6px 12px 6px", borderRadius: "10px" }}
                                        >
                                            <List.Item.Meta
                                                avatar={
                                                    <Avatar size="large" style={{ marginTop: "2px" }} icon={<MailOutlined />} />
                                                }
                                                title={invite.name}
                                                description={`From: ${invite.creator}`}
                                            />
                                        </List.Item>
                                    )}
                                />
                            </div>
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
                <Row justify="center">
                    <Button onClick={deleteAccount} type="primary" danger>
                        Delete Account
                    </Button>
                </Row>
            </Modal>
        </>
    )
}
