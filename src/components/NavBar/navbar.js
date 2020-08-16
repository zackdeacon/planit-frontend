import React, { useState } from 'react';
import { Row, Col, Button } from 'antd';
import {Link} from 'react-scroll';
import 'antd/dist/antd.css';
import "./navbar.css"
import AnchorLink from 'antd/lib/anchor/AnchorLink';

export default function Navbar(props) {
    const [menuBtn, setMenuBtn] = useState({
        menuOpen: false,
        menuClass: "menu-btn",
        linksClass: "nav-links",
    })

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
                    <Link activeClass="active" to="loginform" spy={true} smooth={true} offset={+500} duration={1000} className="nav-btns"><span className="login-btn">Login</span></Link>
                </Row>
            </Col>
        </div>
        </>
    )
}
