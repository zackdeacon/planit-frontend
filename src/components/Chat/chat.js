import React, { useState, useEffect, useRef } from "react";
import { Row } from "antd";
import styled from "styled-components";
import io from "socket.io-client";
import API from "../../utils/API"
import "./chat.css"

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
width: 100%;
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

const Button = styled.button`
  background-color: #576d65;
  width: 100%;
  border: none;
  height: 50px;
  border-radius: 10px;
  color: white;
  font-size: 17px;
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
  background-color: pink;
  color: #46516e;
  padding: 10px;
  margin-right: 5px;
  text-align: center;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 10%;
`;

const PartnerRow = styled(MyRow)`
  justify-content: flex-start;
`;

const PartnerMessage = styled.div`
  width: 45%;
  background-color: transparent;
  color: White;
  border: 1px solid lightgray;
  padding: 10px;
  margin-left: 5px;
  text-align: center;
  border-top-left-radius: 10%;
  border-bottom-left-radius: 10%;
`;

//Components and styling taken from example of Youtube


//Code to keep below this line 
const TEST_MAP_ID = "5f3b524e62d7267aedb92826";
const TEST_USER_ID = "5f383fd888b8063738330863";

const Chat = () => {
  const [yourID, setYourID] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect();

    updateMessages();

    socketRef.current.on("your id", id => {
      setYourID(id);
    })

    socketRef.current.on("update messages", () => {
      updateMessages();
    })

  }, []);

  async function getCurrentMessages() {
    const chats = await API.getChatsForMap(TEST_MAP_ID);
    return chats.data;
  }

  async function updateMessages() {
    const chats = await getCurrentMessages();
    setMessages(chats)
  };

  function sendMessage(e) {
    e.preventDefault();
    const chatData = {
      userId: TEST_USER_ID,
      mapId: TEST_MAP_ID,
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
    <div className="chat-container" style={{display:"flex", justifyContent:"center"}}>
      <Row justify= "center">
        <div className="chat-title">Chat Room</div>
      </Row>

      <Row justify="center">
        <div className="chat-box">
          {messages.map((message, index) => {
            if (message.id === yourID) {
              return (
                <MyRow key={index}>
                  <MyMessage>
                    {message.message}
                    {/* {message.name} */}
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
          <TextArea className="textArea" value={message} onChange={handleChange} placeholder="Say something..." />
          <Button>Send</Button>
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
