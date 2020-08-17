import React from 'react'
import { Row, Col, Card, Button, Tooltip} from 'antd'
import { LikeTwoTone, DislikeTwoTone } from "@ant-design/icons"
import 'antd/dist/antd.css';
import "./suggestioncard.css"

export default function SuggestionCard(props) {
  
  return (
    <>
      <Col xl={{span: 6}} md={{ span: 12 }} >
        
        <Card className="sug-card-container" type="inner"
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
          <p className="description-text"><strong style={{color:"#3b5e66"}}>Description:</strong> {props.description}</p>
          <Row justify="center">
            <button onClick={props.handleClick} style={{color: "#3b5e66"}}>Read More</button >
          </Row>
        </Card>
        
      </Col>
    </>
  )
}