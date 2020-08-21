
import React, {useEffect, useState} from 'react'
import { Row, Col, Card, Button, Tooltip, Modal, Progress, Statistic, Form, Input, message} from 'antd'
import { LikeTwoTone, DislikeTwoTone, ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons"
// import DashMod from '../../components/DashModule/dashmod'
import 'antd/dist/antd.css';
import API from "../../utils/API";
import "./suggestioncard.css"
import { useParams } from 'react-router-dom';

export default function SuggestionCard(props) {
  //state of number of votes
  const [upVote, setUpVote]=useState(true)
  const [downVote, setDownVote]=useState(false)

  //state of display of voters
  const [displayUpVote, setDisplayUpVote] = useState(0)
  const [displayDownVote, setDisplayDownVote] = useState(0)
  
  //state of percent of voters
  const [percentageVotes, setPercentageVotes] = useState(0)

  //state of like btn clicked
  const [isClicked, setIsClicked] = useState(false);

  //modal
  const [modal, setModal] = useState({
    visible: false 
  })

  //form
  const [form] = Form.useForm();

  //comments
  const [commentObj, setCommentObj] = useState({
    message: ""
  })


  const {id} = useParams()

  //up vote btn
  const handleIncrement =()=> {
    setUpVote(true)
    // setIsClicked(true)
    const voteUpObj = {
      vote:upVote
    }
    API.saveVote(voteUpObj,props.suggestions._id)
    .then(vote=>{
      setDisplayUpVote(displayUpVote+1)
      setIsClicked(false)
      message.success('Thanks for the like!', 3); 
    })
    .catch(err=>{
      message.error('Sorry! You already voted', 3); 
      console.log(err)
      setIsClicked(false)
    })
  }

  //down vote btn
  const handleDecrement = ()=>{
    setDownVote(false)
    setIsClicked(true)
    const voteDownOjb ={
      vote: downVote
    }
    API.saveVote(voteDownOjb, props.suggestions._id)
    .then(vote=>{
      message.success('Thanks for the like!', 3);
      setDisplayDownVote(displayDownVote+1)
    })
    .catch(err=>{
      message.error('Sorry! You already voted', 3);      
      console.log(err)
      setIsClicked(false)
    })
  }

  //percentage of guests voted
  useEffect(()=>{
    API.getMapById(id).then(res=>{
      const guestArr = res.data.guests
      const numGuests = guestArr.length
      let ratio = (displayDownVote+displayUpVote)/(numGuests+1)
      let percent = Math.floor(ratio*100)
      setPercentageVotes(percent)
    })
  })

  useEffect(()=>{
    const arr = props.suggestions.votes
    let i;
    const arrUpVotes = []
    const arrDownVotes = []
  
    for (i=0; i<arr.length; i++){
      const voteVal = arr[i].vote  
      if(voteVal===true){
        arrUpVotes.push(voteVal)
      } else {
        arrDownVotes.push(voteVal)
      }
    }
    setDisplayUpVote(arrUpVotes.length) ;
    setDisplayDownVote(arrDownVotes.length) ;
  }, [])

  const switchModal = () => {
    setModal({
      visible: !modal.visible,
    });
  };

  function commentInputChange (event) {
    const {name,value} = event.target
    setCommentObj({...commentObj, [name]:value})
  }

  function commentSubmit (){
    API.saveComment(commentObj, props.suggestions._id)
    .then(message=>{
    })
    .catch(err=>console.log(err))
    setCommentObj({
      message: ""
    })
  }
  
  const sugNameUserName= `${props.suggestions.title.toUpperCase()} recommended by ${props.suggestions.userId.name.first} ${props.suggestions.userId.name.last}`
  console.log('props.comments', props.comments)

  const peach = []
  props.suggestions.comments.map(apple=>{
    peach.push(<Card style={{width:300}}>
  ​
      <p>{apple.message}</p>
    </Card>)
    
  })
 

  return (
    <>
      <Col xxl={{span: 8}} xl={{span: 11}} lg={{ span: 13 }} align="middle">
        
        <Card className="sug-card-container" type="inner"
        title={props.suggestions.title.toUpperCase()} extra={
            // adding up and downvote buttons
            <>
            <Tooltip title="up vote">
              {/* {isClicked?  */}
              {/* <Button  disabled className="vote-btn" shape="circle" style={{ margin:"5px" }}icon={<LikeTwoTone twoToneColor="#987b55" style={{ fontSize: "25px" }} />} size="large" />  */}
               {/* :  */}
               <Button  onClick={handleIncrement}className="vote-btn" shape="circle" style={{ margin:"5px" }} icon={<LikeTwoTone twoToneColor="#987b55" style={{ fontSize: "25px" }} />} size="large" />
               {/* } */}
            </Tooltip>
            <Tooltip title="down vote">
              <Button onClick={handleDecrement} className="vote-btn" shape="circle" style={{ margin:"5px" }}icon={<DislikeTwoTone twoToneColor="#987b55" style={{ fontSize: "25px", position:"relative", top:"3px" }} />} size="large" />
            </Tooltip>
            </>
          }
        style={{ margin: "10px" }} headStyle={{ backgroundColor: "#987b55" }} 
          >
          <a href={props.suggestions.link} target="_blank" rel="noopener noreferrer" style={{color: "#6c8e98"}}>Link to Suggestion</a>
          <p style={{marginTop:"14px", marginBottom:"13px"}}><strong style={{color:"#3b5e66"}}>Cost Est:</strong> $ {props.suggestions.cost}</p>
          <p className="description-text"><strong style={{color:"#3b5e66"}}>Description:</strong> {props.suggestions.description}</p>
          <Row justify="center" style={{paddingTop:"15px"}}>
            <Button className="vote-btn" onClick={switchModal} style={{borderRadius:"5px"}}>Read More</Button >
          </Row>
        </Card>
      </Col>

      <Modal
          title={sugNameUserName}
          visible={modal.visible}
          onOk={switchModal}
          onCancel={switchModal}
          footer={[
            <Button key="back" onClick={switchModal}>
              Got it!
            </Button>
          ]}
        >
          <Row justify="center">
            <Card className="modsug-card-container" type="inner"
                title={props.suggestions.title.toUpperCase()} extra={
                    // adding up and downvote buttons
                    <>
                    <Tooltip title="up vote">
                    <Button onClick={handleIncrement} className="vote-btn" shape="circle" style={{ margin:"5px" }}icon={<LikeTwoTone twoToneColor="#987b55" style={{ fontSize: "25px" }} />} size="large" />
                    </Tooltip>
                    <Tooltip title="down vote">
                    <Button onClick={handleDecrement} className="vote-btn" shape="circle" style={{ margin:"5px" }}icon={<DislikeTwoTone twoToneColor="#987b55" style={{ fontSize: "25px", position:"relative", top:"3px" }} />} size="large" />
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
                        value={displayUpVote}
                        valueStyle={{ color: '#6eb0b4' }}
                        prefix={<ArrowUpOutlined />}
                    />
                    <Statistic
                        title="Downvotes"
                        value={displayDownVote}
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
                      // onFinish={commentSubmit}
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
                          value={commentObj.message}
                          onChange={commentInputChange}
                          name="message"
                          type="text"
                        />
                      </Form.Item>
                      <Form.Item >
                        <Button onClick={commentSubmit} type="primary">Submit</Button>
                      </Form.Item>
                    </Form>
                    <Row>
                      <Row>
                        {peach.map(item=>{return item})}
                      </Row>                        
                    </Row>

                </Col>
            </Row>
      </Modal>

    </>
  )
}
