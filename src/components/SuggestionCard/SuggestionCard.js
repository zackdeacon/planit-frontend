
import React, {useEffect, useState} from 'react'
import { Row, Col, Card, Button, Tooltip, Modal, Progress, Statistic} from 'antd'
import { LikeTwoTone, DislikeTwoTone, ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons"
// import DashMod from '../../components/DashModule/dashmod'
import 'antd/dist/antd.css';
import API from "../../utils/API";
import "./suggestioncard.css"

export default function SuggestionCard(props) {
  const [count, setCount]=useState(0)

  const [upVote, setUpVote]=useState(true)
  const [downVote, setDownVote]=useState()

  
  const handleIncrement =()=> {
    console.log(props.suggestions);
    setCount(prevCount=>prevCount+1)
     setUpVote(true)
    const voteObject = {
      vote:upVote
    }
    API.saveVote(voteObject,props.suggestions._id)
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

  const [modal, setModal] = useState({
    visible: false 
  })

  const switchModal = () => {
    setModal({
      visible: !modal.visible,
    });
  };
  
  return (
    <>
      <Col xl={{span: 12}} md={{ span: 12 }} >
        
        <Card className="sug-card-container" type="inner"
        title={props.suggestions.title.toUpperCase()} extra={
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
          <a href={props.suggestions.link} target="_blank" rel="noopener noreferrer" style={{color: "#6c8e98"}}>Link to Suggestion</a>
          <p style={{marginTop:"14px", marginBottom:"13px"}}><strong style={{color:"#3b5e66"}}>Cost Est:</strong> $ {props.suggestions.cost}</p>
          <p className="description-text"><strong style={{color:"#3b5e66"}}>Description:</strong> {props.suggestions.description}</p>
          <Row justify="center">
            <button onClick={switchModal} style={{color: "#3b5e66"}}>Read More</button >
          </Row>
        </Card>
      </Col>

      <Modal
          title={props.suggestions.title.toUpperCase()}
          visible={modal.visible}
          onOk={switchModal}
          onCancel={switchModal}
        >
          <Row justify="center">
            <Card className="modsug-card-container" type="inner"
                title={props.suggestions.title.toUpperCase()} extra={
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
                <a href={props.suggestions.link} target="_blank" rel="noopener noreferrer" style={{color: "#6c8e98"}}>Link to Suggestion</a>
                <p style={{marginTop:"14px", marginBottom:"13px"}}><strong style={{color:"#3b5e66"}}>Cost Est:</strong> ${props.suggestions.cost}</p>
                <p><strong style={{color:"#3b5e66"}}>Description:</strong> {props.suggestions.description}</p>
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
      </Modal>

    </>
  )
}