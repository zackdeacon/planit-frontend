import React from 'react'
import {Row, Col} from 'antd'
import NavBar from '../../components/NavBar/navbar'
import MapCard from '../../components/MapCard/mapcard'
import Chat from '../../components/Chat/chat'
import './mapdashboard.css'


export default function MapDashboard() {
    return (
        <>
            <div className="dash-filter-background"></div>
                <NavBar logo="./assets/logos/logotxt.png" width="80px" left="-40px" top="10px"/>
                
                    <Row justify= "center">
                        <div className="dash-title">Bachelor Trip: New Orleans</div>
                    </Row>
                    
                    <div className="top-buffer">
                        <Row justify="space-around">
                            <Col lg={{span:14}} sm={{span:13}} xs={{span:24}}>
                                <MapCard />
                            </Col>
                            <div className="mid-col-buffer"></div>
                            <Col lg={{span:9}} sm={{span:10}} xs={{span:24}}>
                                <Chat />
                            </Col>
                        </Row>
                    </div>
            
        </>
    )
}
