import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'antd';
import {useHistory} from "react-router-dom";
import {Link} from 'react-scroll';
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

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        checkIfUser() 
    }, [])

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
        })
    }

    const checkIfUser = () => {
        API.getSessionData().then( res => {
            console.log(res);
            if (!res.data.user) {
                setIsLoggedIn(false)
                // setUseLink(<Link activeClass="active" to="loginform" spy={true} smooth={true} offset={+500} duration={1000} className="nav-btns"><span className="login-btn">Login</span></Link>)
                // console.log(useLink);
                // useLink
            } else {
                setIsLoggedIn(true)
                // setUseLink(<Button type="text" onClick={logOut} className="nav-btns">Log Out</Button>)
                // console.log(useLink);
                // useLink
            }
        })
    }

    // let loggedInBtn;
    // if (isLoggedIn) {
    //     loggedInBtn = <Button type="text" onClick={logOut} className="nav-btns">Log Out</Button>
    // } else { loggedInBtn = <Link activeClass="active" to="loginform" spy={true} smooth={true} offset={+500} duration={1000} className="nav-btns"><span className="login-btn">Login</span></Link>}

    return (
        <>
        <div className="txt-logo-div">
            <Row>    
                <Col>
                    <a href="/">
                        <img src={props.logo} alt="text logo" style={{width:`${props.width}`, marginLeft:`${props.left}`, marginTop:`${props.top}`}}/>
                    </a>
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
                    <Button type="text" href="/user" className="nav-btns">Account</Button>
                </Row>
                <Row justify="end">
                    <Button type="text" href="/createmap" className="nav-btns">New Map</Button>
                </Row>
                <Row justify="end">
                    {isLoggedIn?<Button type="text" onClick={logOut} className="nav-btns">Log Out</Button>:<Link activeClass="active" to="loginform" spy={true} smooth={true} offset={+500} duration={1000} className="nav-btns"><span className="login-btn">Login</span></Link>}
                    {/* <Link activeClass="active" to="loginform" spy={true} smooth={true} offset={+500} duration={1000} className="nav-btns"><span className="login-btn">Login</span></Link> */}
                </Row>
            </Col>
        </div>
        </>
    )
}