import React, { useState, useEffect, useRef } from "react";
import { Row, Button } from "antd";
import styled from "styled-components";
import io from "socket.io-client";
import API from "../../utils/API"
import "./chat.css"
import { useParams } from "react-router-dom";

//Components and styling taken from example of Youtube

// const Page = styled.div`
//   display: flex;
//   height: 100%
//   width: 100%
//   align-items: center;
//   background-color: #46516e;
//   flex-direction: column;
// `;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100%;
//   overflow: auto;
//   width: 400px;
//   border: 1px solid lightgray;
//   border-radius: 10px;
//   padding-bottom: 10px;
//   margin-top: 25px;
// `;

const TextArea = styled.textarea`
width: 90%;
height: 100px;
border-radius: 10px;
margin-top: 10px;
padding-left: 10px;
padding-top: 10px;
font-size: 17px;
background-color: rgba(255, 255, 255, 0.466);
border: 3px inset #987b55;
outline: none;
color: white;
letter-spacing: 1px;
line-height: 20px;
`;


const Form = styled.form`
  width: 400px;
`;

const MyRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const MyMessage = styled.div`
  width: 45%;
  background-color: #6eb0b4;
  color: white;
  padding: 10px;
  margin-right: 5px;
  text-align: center;
  border: 1px solid lightgray;
  border-radius: 20px 20px 0px 20px;
`;

const PartnerRow = styled(MyRow)`
  justify-content: flex-start;
`;

const PartnerMessage = styled.div`
  width: 45%;
  background-color: #3b5e66;
  color: White;
  border: 1px solid lightgray;
  padding: 10px;
  margin-left: 5px;
  text-align: center;
  border-radius: 20px 20px 20px 0px;
`;

//Components and styling taken from example of Youtube


//Code to keep below this line 






// const TEST_MAP_ID = id;
const TEST_USER_ID = "5f3c2a5b7d3f2d25dab2becc";


const Chat = () => {
  const { id } = useParams()

  const [yourID, setYourID] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [userData, setUserData] = useState({});

  useEffect(() => {
    API.getSessionData().then(res => {
      setUserData(res.data.user);
    }).catch(console.log)
  }, [])

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect();

    updateMessages();

    socketRef.current.on("your id", _id => {
      setYourID(_id);
    })

    socketRef.current.on("update messages", () => {
      updateMessages();
    })

  }, []);

  async function getCurrentMessages() {
    const chats = await API.getChatsForMap(id);
    return chats.data;
  }

  async function updateMessages() {
    const chats = await getCurrentMessages();
    setMessages(chats)
  };
  console.log(userData)
  function sendMessage(e) {
    e.preventDefault();
    const chatData = {
      userId: TEST_USER_ID,
      mapId: id,
      message: message,
    };
    setMessage("");
    API.postNewChat(chatData);
    socketRef.current.emit("new message");
  }

  function handleChange(e) {
    setMessage(e.target.value);
  }


  //Code to keep above this line 

  return (
    <>
      <div className="chat-container" style={{ display: "flex", justifyContent: "center" }}>
        <Row justify="center">
          <div className="chat-title">Chat Room</div>
        </Row>

        <Row justify="center">
          <div className="chat-box">
            {messages.map((message, index) => {
              // console.log(message);
              if (message.userId === TEST_USER_ID) {
                return (
                  <MyRow key={index}>
                    <MyMessage>
                      {message.message}
                      <span className="userName">
                        {userData.username}
                      </span>
                    </MyMessage>
                  </MyRow>
                )
              }
              return (
                <PartnerRow key={index}>
                  <PartnerMessage>
                    {message.message}
                    {/* {message.name} */}
                  </PartnerMessage>
                </PartnerRow>
              )
            })}
          </div>

          <Form onSubmit={sendMessage}>
            <Row justify="center">
              <TextArea className="text-area" value={message} onChange={handleChange} placeholder="Say something..." />
            </Row>
            <Row justify="center">
              <Button className="send-btn">Send</Button>
            </Row>
          </Form>
        </Row>
      </div>
    </>

    //Components and styling taken from example of Youtube
    // <Page>
    // <Container>
    //   {messages.map((message, index) => {
    //     if (message.id === yourID) {
    //       return (
    //         <MyRow key={index}>
    //           <MyMessage>
    //             {message.message}
    //             {/* {message.name} */}
    //           </MyMessage>
    //         </MyRow>
    //       )
    //     }
    //     return (
    //       <PartnerRow key={index}>
    //         <PartnerMessage>
    //           {message.message}
    //           {/* {message.name} */}
    //         </PartnerMessage>
    //       </PartnerRow>
    //     )
    //   })}
    // </Container>
    // <Form onSubmit={sendMessage}>
    //   <TextArea value={message} onChange={handleChange} placeholder="Say something..." />
    //   <Button>Send</Button>
    // </Form>
    // </Page>
    //Components and styling taken from example of Youtube

  )
}



export default Chat;


