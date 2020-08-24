import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'antd';
import { useHistory } from "react-router-dom";
import { Link } from 'react-scroll';
import API from "../../utils/API";
import 'antd/dist/antd.css';
import "./navbar.css"

export default function Navbar(props) {
    const history = useHistory();

    const [menuBtn, setMenuBtn] = useState({
        menuOpen: false,
        menuClass: "menu-btn",
        linksClass: "nav-links",
    })

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [userData, setUserData] = useState({
        username: "",
        name: {
            first: "",
            last: ""
        }
    })

    // useEffect(() => {
    //     setUserData({ ...userData, name: props.name })
    // }, [props.name])

    useEffect(() => {
        checkIfUser()
    }, [])

    useEffect(() => {
        API.getSessionData().then((results) => {
            const sessionUser = results.data.user;
            API.getUserById(sessionUser.id).then((user) => {
                setUserData(user.data);
                // console.log('userData', userData)
            })
        }).catch((err) => {
            console.log('err', err)
        })
    }, []);
    // console.log('user', props.userData)

    const handleHamburgerClick = () => {
        if (!menuBtn.menuOpen) {
            setMenuBtn({
                menuOpen: !menuBtn.menuOpen,
                menuClass: "menu-btn open",
                linksClass: "nav-links open"
            })
        } else {
            setMenuBtn({
                menuOpen: !menuBtn.menuOpen,
                menuClass: "menu-btn",
                linksClass: "nav-links"
            })
        }
    }

    const logOut = () => {
        history.push("/")
        API.logout().then(req => {
            console.log("You have been launched out of PLANiT!");
            history.push("/");
        })
    }

    const login = () => {
        history.push("/")
    }

    const checkIfUser = () => {
        API.getSessionData().then(res => {
            if (!res.data.user) {
                setIsLoggedIn(false)
            } else {
                setIsLoggedIn(true)
            }
        })
    }

;

    return (
        <>
            <div className="txt-logo-div">
                <Row>
                    <Col>
                        <a href="/">
                            <img src={props.logo} alt="text logo" style={{ width: `${props.width}`, marginLeft: `${props.left}`, marginTop: `${props.top}` }} />
                        </a>
                    </Col>
                </Row>
            </div>
            <div className="wrapper-name">
                <Row justify="start">
                    <Col >
                        {console.log(userData.name.first)}
                        {isLoggedIn ? <h1 className="welcome">Welcome, {userData.name.first}</h1> : null}
                    </Col>
                </Row>
            </div>
            <div className="wrapper">
                <Row justify="end">
                    <Col className={menuBtn.menuClass} onClick={handleHamburgerClick}>
                        <div className="menu-btn_burger"></div>
                    </Col>
                </Row>
            </div>
            <div className="wrapper">
                <Row justify="end">
                    <Col className={menuBtn.menuClass} onClick={handleHamburgerClick}>
                        <div className="menu-btn_burger"></div>
                    </Col>
                </Row>
                <Col className={menuBtn.linksClass}>
                    <Row justify="end">
                        {isLoggedIn ?
                            <Button type="text" onClick={logOut} href="/" className="nav-btns">Log Out</Button>
                            : <Link onClick={login} activeClass="active" to="loginform" spy={true} smooth={false} offset={+500} duration={1000} className="nav-btns"><span className="login-btn">Login</span></Link>}
                    </Row>

                    <Row justify="end">
                        {isLoggedIn ?
                            <Button type="text" href="/user" className="nav-btns">Account</Button>
                            :
                            <Button disabled></Button>}
                    </Row>


                    <Row justify="end">
                        {isLoggedIn ?
                            <Button type="text" href="/createmap" className="nav-btns">New Map</Button>
                            :
                            <Button disabled></Button>}
                    </Row>
                </Col>
            </div>
        </>
    )
}