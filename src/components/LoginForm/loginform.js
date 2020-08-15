import React, {useState} from 'react'
import { Row, Form, Input, Button, } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import "./loginform.css"

export default function LoginForm() {
    const [newUser, setNewUser] = useState({
        status: false,
        loginForm:"login-form show",
        regForm:"register-form hide",
    })

    const [form] = Form.useForm();

    const handleNewUser = (e) => {
        e.preventDefault();
        if(newUser.status === false) {
            setNewUser({
                status: true,
                loginForm:"login-form hide",
                regForm:"register-form show"
            })
        } else{
            setNewUser({
                status: false,
                loginForm:"login-form show",
                regForm:"register-form hide"
            })
        }
    };

    const onFinish = values => {
        console.log('Received values of form: ', values);
    };    
        
    return (
    <>
    <div className="form-container" id="loginform">
    <Row justify="center" align="middle" className="form-filter">
        <div className="form-buffer"></div>
    {/* Login Form */}
        <Form
            name="normal_login"
            className={newUser.loginForm}
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <div className="form-title">LET'S PLANiT</div>

            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}>
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}>
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="form-button">
                Log in
                </Button>
                <Row justify="center">
                <a href=" " onClick={handleNewUser}>New User Sign Up</a>
                </Row>
            </Form.Item>
        </Form>

    {/* Registration Form */}
        <Form
            form={form}
            name="register"
            onFinish={onFinish}
            className={newUser.regForm}
            scrollToFirstError
        >
            <div className="form-title">LET'S PLANiT</div>
        
            <Form.Item
                className="first-name"
                name="firstName"
                label="First Name"
                rules={[
                    {
                    type: 'text'
                    },
                    {
                    required: true,
                    message: 'Please input yout first name!',
                    },
                ]}
                >
                <Input />
            </Form.Item>

            <Form.Item
                className="last-name"
                name="lastName"
                label="Last Name"
                rules={[
                    {
                    type: 'text'
                    },
                    {
                    required: true,
                    message: 'Please input yout last name!',
                    },
                ]}
                >
                <Input />
            </Form.Item>

            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                    },
                    {
                    required: true,
                    message: 'Please input your E-mail!',
                    },
                ]}
                >
                <Input />
            </Form.Item>
            
            <Form.Item
                name="username"
                label="Username"
                rules={[
                    {
                    type: 'text'
                    },
                    {
                    required: true,
                    message: 'Please input a username!',
                    },
                ]}
                >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
                hasFeedback
                >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                {
                    required: true,
                    message: 'Please confirm your password!',
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
                <Input.Password />
            </Form.Item>

            <Button type="primary" htmlType="submit" className="form-button">
            Register
            </Button>
            <Row justify="center">
                <a href=" " onClick={handleNewUser}>Already A User</a>
            </Row>
        </Form>

    </Row>
    </div>
    </>
    )
}
