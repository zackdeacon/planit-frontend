import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import {
    Card, Col, Row, Button, Modal, List, Divider,
    Avatar, Tooltip, Popconfirm, message, Input, Form
} from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { SettingTwoTone, FileAddTwoTone } from '@ant-design/icons';
import MapCarousel from '../MapCarousel/MapCarousel';
import API from "../../utils/API"
import "./usercard.css"

export default function UserCard(props) {

    const { userData, setUserData } = props;

    let history = useHistory();

    const [modal, setModal] = useState({
        visible: false
    })

    const [nameForm] = Form.useForm();
    const [names, setNames] = useState({
        first: "",
        last: "",
    })

    const [passwordForm] = Form.useForm();
    const [passwords, setPasswords] = useState({
        old: "",
        new: "",
        newRepeat: "",
    })

    useEffect(() => {
        setNames({
            first: props.userData.name.first,
            last: props.userData.name.last,
        })
    }, [props.userData]);

    const switchModal = () => {
        nameForm.resetFields();
        passwordForm.resetFields();
        setModal({
            visible: !modal.visible,
        });
    };

    const updatePasswords = (event) => {
        const { name, value } = event.target;
        setPasswords({ ...passwords, [name]: value });
    };

    const savePassword = () => {
        if (passwords.new && passwords.old && passwords.newRepeat) {
            const passwordData = {
                oldPassword: passwords.old,
                newPassword: passwords.new,
            }
            API.changePassword(passwordData).then(res => {
                if (res.data.success) {
                    message.success(res.data.message, 2);
                } else {
                    message.error(res.data.message, 2);
                }
            }).catch(err => {
                message.error("Server error. Unable to change password", 2)
            })
            switchModal();
        }
    };

    const updateNames = (event) => {
        const { name, value } = event.target;
        setNames({ ...names, [name]: value });
    }

    const saveName = () => {
        if (names.first && names.last) {
            setUserData({ ...userData, name: names });
            API.changeName(names).then(data => {
                message.success("Name changed successfully.", 2);
            }).catch(err => {
                message.success("Unable to change name.", 2);
            })
            switchModal();
        }
    };

    const cancelChanges = () => {
        setNames({
            first: props.userData.name.first,
            last: props.userData.name.last,
        })
        switchModal();
    }

    const deleteAccount = () => {
        const id = userData._id
        console.log("passed in", id)
        API.deleteUser(id).then(res => {
            console.log("Delete Btn Clicked", res.data);
            history.push("/")
        })
        message.success("Account deleted", 2)

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
        message.success('Cancelled', 2);
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
                                    <Tooltip title="Add new map" placement="topRight">
                                        <Button className="added-btns" href="/createmap" shape="circle" size="large" style={{ borderColor: "#6c8e98" }} icon={<FileAddTwoTone twoToneColor="#576d65" />} />
                                    </Tooltip>
                                    <Tooltip title="Modify account" placement="topRight">
                                        <Button className="added-btns" onClick={switchModal} shape="circle" size="large" style={{ borderColor: "#6c8e98" }} icon={<SettingTwoTone twoToneColor="#576d65" />} />
                                    </Tooltip>
                                </Row>
                            </Card>
                            <MapCarousel header="My Planning Maps:" maps={userData.createdMaps} editable={true} background="#6C8E98" />
                            <MapCarousel header="Collaborator On:" maps={userData.guestMaps} editable={false} background="#94a095" />
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
                                                            <a href=" ">Accept</a>
                                                        </Popconfirm>,
                                                        <Popconfirm
                                                            title="Decline Invite?"
                                                            onConfirm={() => handleDecline(index)}
                                                            onCancel={cancel}
                                                            okText="yes"
                                                            cancelText="no"
                                                        >
                                                            <a href=" ">Decline</a>
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
                onCancel={cancelChanges}
                cancelText="Close"
                okButtonProps={{ style: { display: 'none' } }}
            >
                <Row justify="left" gutter={[16, 16]}>
                    <Col span={24}>
                        <Divider orientation="left">Change Name</Divider>
                        <Form layout="vertical" hideRequiredMark initialValues={{ first: names.first, last: names.last }} form={nameForm}>
                            <Form.Item
                                label="First: "
                                name="first"
                                validateTrigger={["onSubmit"]}
                                rules={[{ required: true, message: 'Name must be at least one character!' }]}
                            >
                                <Input name="first" onChange={updateNames} />
                            </Form.Item>
                            <Form.Item
                                label="Last: "
                                name="last"
                                validateTrigger={["onSubmit"]}
                                rules={[{ required: true, message: 'Name must be at least one character!' }]}
                            >
                                <Input name="last" onChange={updateNames} />
                            </Form.Item>
                            <Form.Item>
                                <Button htmlType="submit" type="primary" onClick={saveName}>Update Name</Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
                <Row justify="left">
                    <Col span={24}>
                        <Divider orientation="left">Change Password</Divider>
                        <Form layout="vertical" hideRequiredMark form={passwordForm}>
                            <Form.Item
                                label="Old password:"
                                name="old"
                                validateTrigger={["onSubmit"]}
                                rules={[{ required: true, message: "Please provide old password." }]}
                            >
                                <Input.Password name="old" onChange={updatePasswords} />
                            </Form.Item>
                            <Form.Item
                                label="New password:"
                                name="new"
                                validateTrigger={["onSubmit"]}
                                rules={[{ required: true, message: "Please provide new password." }]}
                            >
                                <Input.Password name="new" onChange={updatePasswords} />
                            </Form.Item>
                            <Form.Item
                                label="Reenter New Password:"
                                name="newRepeat"
                                dependencies={["new"]}
                                validateTrigger={["onSubmit"]}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your new password.',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(rule, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject('The two passwords that you entered do not match!');
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password name="newRepeat" onChange={updatePasswords} />
                            </Form.Item>
                            <Form.Item>
                                <Button htmlType="submit" type="primary" onClick={savePassword}>Update password</Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
                <Row justify="center">
                    <Divider></Divider>
                    <Popconfirm
                        title="All trips associated with this account will also be deleted. Proceed?"
                        onConfirm={deleteAccount}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
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