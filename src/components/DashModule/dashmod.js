import React from 'react'
import { Row, Col, Card, Button, Tooltip, Progress, Statistic} from 'antd'
import { LikeTwoTone, DislikeTwoTone, ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons"
import './dashmod.css'

export default function DashMod(props) {
    return (
        <div className="mod-div">
        <div className="dashmod-container">
            <a onClick={props.handleClick} className="exit">X</a>
            <Row justify="center">
            <Card className="modsug-card-container" type="inner"
                title={props.title.toUpperCase()} extra={
                    // adding up and downvote buttons
                    <>
                    <Tooltip>
                    <Button className="vote-btn" shape="circle" style={{ margin:"5px" }}icon={<LikeTwoTone twoToneColor="#987b55" style={{ fontSize: "25px" }} />} size="large" />
                    </Tooltip>
                    <Tooltip>
                    <Button className="vote-btn" shape="circle" style={{ margin:"5px" }}icon={<DislikeTwoTone twoToneColor="#987b55" style={{ fontSize: "25px", position:"relative", top:"3px" }} />} size="large" />
                    </Tooltip>
                    </>
                }
                style={{ margin: "10px" }} headStyle={{ backgroundColor: "#987b55" }} 
                >
                <a href={props.link} target="_blank" style={{color: "#6c8e98"}}>Link to Suggestion</a>
                <p style={{marginTop:"14px", marginBottom:"13px"}}><strong style={{color:"#3b5e66"}}>Cost Est:</strong> ${props.cost}</p>
                <p><strong style={{color:"#3b5e66"}}>Description:</strong> {props.description}</p>
            </Card>
            </Row>
            <hr/>
            <br/>
            <Row justify="space-around">
                <Col className="mod-elements" sm={{span:6}} xs={{span:24}}>
                    <h4>Who Has Voted?</h4>
                    <Progress
                        type="circle"
                        strokeColor={{
                            '0%': '#945440',
                            '100%': '#6eb0b4',
                        }}
                        percent={75}
                        status="active"
                    />
                </Col>

                <Col className="mod-elements" sm={{span:6}} xs={{span:24}}>
                    <h4>Standing</h4>
                    <Statistic
                        title="Upvotes"
                        value={11}
                        valueStyle={{ color: '#6eb0b4' }}
                        prefix={<ArrowUpOutlined />}
                    />
                    <Statistic
                        title="Downvotes"
                        value={4}
                        valueStyle={{ color: '#945440' }}
                        prefix={<ArrowDownOutlined />}
                    />
                </Col>

                <Col className="mod-elements" sm={{span:6}} xs={{span:24}}>
                    <h4>Comments</h4>
                </Col>
            </Row>

            
        </div>
        </div>
    )
}
