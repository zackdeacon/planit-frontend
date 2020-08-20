
import React, {useEffect, useState} from 'react'
import { Row, Col, Card, Button, Tooltip, Modal, Progress, Statistic, Form, Input} from 'antd'
import { LikeTwoTone, DislikeTwoTone, ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons"
// import DashMod from '../../components/DashModule/dashmod'
import 'antd/dist/antd.css';
import API from "../../utils/API";
import "./suggestioncard.css"
import { useParams } from 'react-router-dom';

export default function SuggestionCard(props) {
  //VOTES
  //state of number of votes
  const [upVote, setUpVote]=useState(true)
  const [downVote, setDownVote]=useState(false)

  //state of display of voters
  const [displayUpVote, setDisplayUpVote] = useState()
  const [displayDownVote, setDisplayDownVote] = useState()
  
  //state of percent of voters
  const [percentageVotes, setPercentageVotes] = useState(0)

  //state of like btn clicked
  // const [isClicked, setIsClicked] = useState(false);
  
  //create array of votes
  const arr = props.suggestions.votes
  let i;
  const arrUpVotes = []
  const arrDownVotes = []
  const allVotes = []

  for (i=0; i<arr.length; i++){
    const voteVal = arr[i].vote  
    allVotes.push(voteVal) 
    if(voteVal===true){
      arrUpVotes.push(voteVal)
    } else {
      arrDownVotes.push(voteVal)
    }
  }

  //number of votes in array
  const numUpVotes = arrUpVotes.length;
  const numDownVotes = arrDownVotes.length;
  const numAllVotes = allVotes.length;

  //upvote logic
  const handleIncrement =()=> {
    setUpVote(true)
    setDisplayUpVote(numUpVotes)
    console.log("what would show up votes", displayUpVote)
    // setIsClicked(true)
    const voteUpObj = {
      vote:upVote
    }
    API.saveVote(voteUpObj,props.suggestions._id)
    .then(vote=>{
    })
    .catch(err=>console.log(err))
  }

  //down vote logic
  const handleDecrement = ()=>{
    setDownVote(false)
    setDisplayDownVote(numDownVotes)
    console.log("what would show down votes", displayDownVote)
    // setIsClicked(true)
    const voteDownOjb ={
      vote: downVote
    }
    API.saveVote(voteDownOjb, props.suggestions._id)
    .then(vote=>{
    })
    .catch(err=>console.log(err))
  }

  //percentage of guests voted
  const {id} = useParams()
  useEffect(()=>{
    API.getMapById(id).then(res=>{
      const guestArr = res.data.guests
      console.log("guest array", guestArr)
      const numGuests = guestArr.length
      console.log("number of guests", numGuests)
      let ratio = numAllVotes/numGuests
      console.log("ratio", ratio)
      let percent = ratio*100
      setPercentageVotes(percent)
      console.log(percentageVotes)
    })
  })

  
  //MODAL
  const [modal, setModal] = useState({
    visible: false 
  })

  const switchModal = () => {
    setModal({
      visible: !modal.visible,
    });
  };

  //COMMENT 
  const [form] = Form.useForm();

  const onFinish = values => {
  };

  const [commentObj, setCommentObj] = useState({
    userId: id,
    message: ""
  })

  function commentInputChange (event) {
    const {name,value} = event.target
    setCommentObj({...commentObj, [name]:value})
  }

  function commentSubmit (){
    API.postNewComment(commentObj, props.suggestions._id)
    .then(message=>{
    })
    .catch(err=>console.log(err))
  }
  

  return (
    <>
      <Col xl={{span: 12}} md={{ span: 12 }} >
        
        <Card className="sug-card-container" type="inner"
        title={props.suggestions.title.toUpperCase()} extra={
            // adding up and downvote buttons
            <>
            <Tooltip>
              {/* {isClicked?  */}
              {/* <Button  disabled className="vote-btn" shape="circle" style={{ margin:"5px" }}icon={<LikeTwoTone twoToneColor="#987b55" style={{ fontSize: "25px" }} />} size="large" />  */}
               {/* :  */}
               <Button onClick={handleIncrement}className="vote-btn" shape="circle" style={{ margin:"5px" }} icon={<LikeTwoTone twoToneColor="#987b55" style={{ fontSize: "25px" }} />} size="large" />
               {/* } */}
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
                        percent={percentageVotes}
                        status="active"
                    />
                </Col>

                <Col className="mod-elements" sm={{span:6}} xs={{span:24}}>
                    <h4>Standing</h4>
                    <Statistic
                        title="Upvotes"
                        value={numUpVotes}
                        valueStyle={{ color: '#6eb0b4' }}
                        prefix={<ArrowUpOutlined />}
                    />
                    <Statistic
                        title="Downvotes"
                        value={numDownVotes}
                        valueStyle={{ color: '#945440' }}
                        prefix={<ArrowDownOutlined />}
                    />
                </Col>

                <Col className="mod-elements" sm={{span:6}} xs={{span:24}}>
                    <h4>Comments</h4>
                    <Form
                      form={form}
                      name="basic"
                      initialValues={{ remember: true }}
                      onFinish={onFinish}
                      layout="vertical"
                      // onFinishFailed={onFinishFailed}
                    >
                      <Form.Item 
                        label="comment"
                        rules={[
                          { required: true, message: 'Please input your username!' }
                        ]}
                        >
                        <Input.TextArea 
                          // value={}
                          // onChange={}
                          // name={}
                          type="text"
                        />
                      </Form.Item>
                      <Form.Item >
                        <Button type="primary">Submit</Button>
                      </Form.Item>
                    </Form>
                </Col>
            </Row>
      </Modal>

    </>
  )
}
