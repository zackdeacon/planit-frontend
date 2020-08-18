import React, {useEffect, useState} from 'react'
import { Row, Col, Card, Button, Tooltip} from 'antd'
import { LikeTwoTone, DislikeTwoTone, ApiFilled, ControlOutlined } from "@ant-design/icons"
import 'antd/dist/antd.css';
import API from "../../utils/API";
import "./suggestioncard.css"

export default function SuggestionCard(props) {
  const [count, setCount]=useState(0)

  const [upVote, setUpVote]=useState()
  const [downVote, setDownVote]=useState()

  const handleIncrement = ()=>{
    setCount(prevCount=>prevCount+1)
    setUpVote(true)
    API.saveVote(upVote)
    .then(vote=>{
      console.log("here is the likes count",vote)
      // setCount(res.data)
    })
    .catch(err=>console.log(err))
  }
  const handleDecrement = ()=>{
    setCount(prevCount=>prevCount-1)
    setDownVote(false)
    API.saveVote(downVote)
    .then(vote=>{
            console.log("here is the likes count",vote)
      // setCount(res.data)
    })
    .catch(err=>console.log(err))
  }
  return (
    <>
      <Col xl={{span: 6}} md={{ span: 12 }} >
        
        <Card className="sug-card-container" type="inner"
        title={props.title.toUpperCase()} extra={
            // adding up and downvote buttons
            <>
            <Tooltip>
              <Button onClick={handleIncrement} className="vote-btn" shape="circle" style={{ margin:"5px" }}icon={<LikeTwoTone twoToneColor="#987b55" style={{ fontSize: "25px" }} />} size="large" />
            </Tooltip>
            <Tooltip>
              <Button onClick={handleDecrement} className="vote-btn" shape="circle" style={{ margin:"5px" }}icon={<DislikeTwoTone twoToneColor="#987b55" style={{ fontSize: "25px", position:"relative", top:"3px" }} />} size="large" />
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