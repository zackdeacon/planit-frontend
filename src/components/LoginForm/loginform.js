import React, {useState} from 'react'
import {BrowserRouter as Router,Route,Redirect,Switch, useHistory} from "react-router-dom";
import { Row, Form, Input, Button, } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import "./loginform.css"
import API from '../../utils/API';
import "../../pages/User/User"

export default function LoginForm() {
    const [newUser, setNewUser] = useState({
        status: false,
        loginForm:"login-form show",
        regForm:"register-form hide",
    })

    const [form] = Form.useForm();

    //LOGIN FUNCITONALITY
    const [formObjectLogin, setFormObjectLogin] = useState({
        username: "",
        password: "",
      
    })

    const history = useHistory()

    function handleInputLogin (event){
        const {name,value}=event.target;
        setFormObjectLogin({...formObjectLogin, [name]:value})
        console.log("input change function", event.target)
        
    }

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        API.login(formObjectLogin).then(data=>{
            console.log("logged in as", data)
            setFormObjectLogin({
                username: "",
                password: ""
            })
        })
        // history.push("/one/id/:userId")
    };

    //HANDLE NEW USER 
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
    
    //SIGNUP FUNCTIONALITY
    const [formObjectSignup, setFormObjectSignup] = useState({
        name:{
            first: "",
            last: ""
        },
        email: "",
        username: "",
        password: "",
        confirm: ""
    })

    function handleInputSignup (event){
        const {name,value}=event.target;
        if(name==="first"|| name==="last"){
            let nameCopy = {first:formObjectSignup.name.first, last: formObjectSignup.name.last}
            nameCopy[name]=value;
            formObjectSignup.name = nameCopy;
        } else{
            setFormObjectSignup({...formObjectSignup, [name]:value})

        }
    }
    
    function handleSubmitSignup(e){
        // e.preventDefault();
        API.signup(formObjectSignup).then(data=>{
            console.log("you are a new user", data)
            setFormObjectSignup({
                name:{
                    first: "",
                    last: ""
                },
                email: "",
                username: "",
                password: "",
                confirm: ""
            })
        })
        history.push("/")
    }
        
    const onFinish = values => {
        console.log('Received values of form: ', values);
    };    
        
    return (
    <>
    {/* login form */}
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
                <Input 
                prefix={<UserOutlined className="site-form-item-icon" />} 
                name="username"
                type="text"
                value={formObjectLogin.username}
                onChange={handleInputLogin}
                placeholder="Username" />
                
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}>
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                name="password"
                type="password"
                value={formObjectLogin.password}
                onChange={handleInputLogin}
                placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Button  onClick={handleSubmitLogin} type="primary" htmlType="submit" className="form-button">
                Log in
                </Button>
                <Row justify="center">
                <a href=" " onClick={handleNewUser} >New User Sign Up</a>
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
                name="first"
                label="First Name"
                rules={[
                    {
                    required: true,
                    message: 'Please input yout first name!',
                    },
                ]}
                >
                <Input 
                    value={formObjectSignup.firstName}
                    onChange={handleInputSignup}
                    name="first"
                    type="text"
                    />
            </Form.Item>

            <Form.Item
                className="last-name"
                name="last"
                label="Last Name"
                rules={[
                    {
                    required: true,
                    message: 'Please input yout last name!',
                    },
                ]}
                >
                <Input 
                value={formObjectSignup.lastName}
                onChange={handleInputSignup}
                name="last"
                type="text"
                />
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
                <Input 
                value={formObjectSignup.email}
                onChange={handleInputSignup}
                name="email"
                type="email"
                />
            </Form.Item>
            
            <Form.Item
                name="username"
                label="Username"
                rules={[
                    {
                    required: true,
                    message: 'Please input a username!',
                    },
                ]}
                >
                <Input 
                value={formObjectSignup.username}
                onChange={handleInputSignup}
                name="username"
                type="text"
                />
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
                <Input.Password 
                value={formObjectSignup.password}
                onChange={handleInputSignup}
                name="password"
                type="password"
                />
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
                <Input.Password 
                value={formObjectSignup.password}
                onChange={handleInputSignup}
                name="confirm"
                type="password"
                />
            </Form.Item>

            <Button onClick={handleSubmitSignup} type="primary" htmlType="submit" className="form-button">
            Register
            </Button>
            <Row justify="center">
                <a href=" " onClick={handleNewUser} >Already A User</a>
            </Row>
        </Form>

    </Row>
    </div>
    </>
    )
}
