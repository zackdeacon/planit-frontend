import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Card, Col, Row, Button, Modal } from 'antd';
import { SettingTwoTone, ApiFilled } from '@ant-design/icons';
import MapCarousel from '../MapCarousel/MapCarousel';
import API from "../../utils/API"
import "./usercard.css"

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
                            <List
                                className="demo-loadmore-list"
                                loading={initLoading}
                                itemLayout="horizontal"
                                dataSource={userData.invitations}
                                renderItem={invite => (
                                    <List.Item
                                        actions={[<a key="list-loadmore-accept">Accept</a>, <a key="list-loadmore-decline">Decline</a>]}
                                    >
                                        <Skeleton avatar title={false} active>
                                            <List.Item.Meta
                                                title={<a href="https://ant.design">{invite.creator}</a>}
                                                description={invite.name}
                                            />
                                        </Skeleton>
                                    </List.Item>
                                )}
                            />
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
