import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Card, Col, Row, Button, Modal, List, Avatar, Tooltip, Popconfirm, message } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { SettingTwoTone } from '@ant-design/icons';
import MapCarousel from '../MapCarousel/MapCarousel';
import API from "../../utils/API"
import "./usercard.css"

export default function UserCard(props) {

    const { userData, setUserData } = props;

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
        console.log("passed in", id)
        API.deleteUser(id).then(res => {
            console.log("Delete Btn Clicked", res.data);
            history.push("/")
        })
        message.success("deleted", 2)

    }

    const handleAccept = (data) => {
        API.acceptMapInvitiation(data).then(res => {
            API.getUserById(userData._id).then(user => {
                setUserData(user.data);
            }).catch(err => {
                console.log("err", err);
            })
        }).catch(err => {
            console.log("err", err);
        })
    }

    const handleDecline = (index) => {
        API.declineMapInvitiation(index).then(res => {
            API.getUserById(userData._id).then(user => {
                setUserData(user.data);
            }).catch(err => {
                console.log("err", err);
            })
        }).catch(err => {
            console.log("err", err);
        })
    }

    function cancel(e) {
        console.log(e);
        message.success('not deleted', 2);
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
                                    <Tooltip title="modify account" placement="topRight">
                                        <Button onClick={switchModal} shape="circle" size="large" style={{ borderColor: "#6c8e98" }} icon={<SettingTwoTone twoToneColor="#576d65" />} />
                                    </Tooltip>
                                </Row>
                            </Card>
                            <MapCarousel header="My Planning Maps:" maps={userData.createdMaps} editable={true} />
                            <MapCarousel header="Collaborator On:" maps={userData.guestMaps} editable={false} />
                            {userData.invitations.length > 0 ?
                                <>
                                    <h2>Pending Invitations: </h2>
                                    <div className="inviteDiv">
                                        <List
                                            className="demo-loadmore-list"
                                            itemLayout="horizontal"
                                            dataSource={userData.invitations}
                                            renderItem={(invite, index) => (
                                                <List.Item
                                                    actions={[
                                                        <Popconfirm
                                                            title="Accept Invite?"
                                                            onConfirm={() => handleAccept({ index, mapId: invite._id })}
                                                            onCancel={cancel}
                                                            okText="yes"
                                                            cancelText="no"
                                                        >
                                                            <a href="#">Accept</a>
                                                        </Popconfirm>,
                                                        <Popconfirm
                                                            title="Decline Invite?"
                                                            onConfirm={() => handleDecline(index)}
                                                            onCancel={cancel}
                                                            okText="yes"
                                                            cancelText="no"
                                                        >
                                                            <a href="#">Decline</a>
                                                        </Popconfirm>
                                                    ]}
                                                    style={{ margin: "10px 2% 10px 2%", backgroundColor: "#fff", padding: "12px 6px 12px 6px", borderRadius: "10px" }}
                                                >

                                                    <List.Item.Meta
                                                        avatar={
                                                            <Avatar size="large" style={{ marginTop: "2px", backgroundColor: "#3b5e66", }} icon={<MailOutlined />} />
                                                        }
                                                        title={invite.name}
                                                        description={`From: ${invite.creator}`}
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                    </div>
                                </> :
                                <MapCarousel header="Pending Invitations:" maps={[]} />
                            }
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
                    <Popconfirm
                        title="Delete Account?"
                        onConfirm={deleteAccount}
                        onCancel={cancel}
                        okText="yes"
                        cancelText="no"
                    >
                        <Button type="primary" danger>
                            Delete Account
                    </Button>
                    </Popconfirm>
                </Row>
            </Modal>
        </>
    )
}