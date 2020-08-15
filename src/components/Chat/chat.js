import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import io from "socket.io-client";
import API from "../../utils/API"

//Components and styling taken from example of Youtube

const Page = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  background-color: #46516e;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  max-height: 500px;
  overflow: auto;
  width: 400px;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding-bottom: 10px;
  margin-top: 25px;
`;

const TextArea = styled.textarea`
  width: 98%;
  height: 100px;
  border-radius: 10px;
  margin-top: 10px;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 17px;
  background-color: transparent;
  border: 1px solid lightgray;
  outline: none;
  color: lightgray;
  letter-spacing: 1px;
  line-height: 20px;
  ::placeholder {
    color: lightgray;
  }
`;

const Button = styled.button`
  background-color: pink;
  width: 100%;
  border: none;
  height: 50px;
  border-radius: 10px;
  color: #46516e;
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
  color: lightgray;
  border: 1px solid lightgray;
  padding: 10px;
  margin-left: 5px;
  text-align: center;
  border-top-left-radius: 10%;
  border-bottom-left-radius: 10%;
`;

//Components and styling taken from example of Youtube


//Code to keep below this line 


const Chat = () => {
    const [yourID, setYourID] = useState();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = io.connect("/");

        socketRef.current.on("your id", id => {
            setYourID(id);
        })

        socketRef.current.on("message", (message) => {
            receivedMessage(message);
        })

        socketRef.current.on("update messages", () => {
          API.getChatsFromMap({
            id: "5f38153867b7864dcb3274bb",
          }).then(function(mapChats){
            console.log(mapChats)
            setMessages(mapChats.data);

          })
      })


    }, []);

    function receivedMessage(message) {
        API.getChatsFromMap({
          id: "5f38153867b7864dcb3274bb",
        }).then(function(mapChats){
          console.log(mapChats)
        })
        setMessages(oldMsgs => [...oldMsgs, message]);
        //(add api call to get all messages tied to this room)
    }

    function sendMessage(e) {
        e.preventDefault();
        // console.log(req.session)
        const messageObject = {
            userId: "5f36cee642d6dd42729bf1fd",
            mapId: "5f38153867b7864dcb3274bb",
            message: message,
        };
        setMessage("");
        API.postChat(messageObject);
        socketRef.current.emit("new message")
        socketRef.current.emit("send message", messageObject); //need to add post route to db 
    }

    function handleChange(e) {
        setMessage(e.target.value);
    }


    //Code to keep above this line 

    return (
        //Components and styling taken from example of Youtube
        <Page>
        <Container>
          {messages.map((message, index) => {
              console.log(messages)
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
        </Container>
        <Form onSubmit={sendMessage}>
          <TextArea value={message} onChange={handleChange} placeholder="Say something..." />
          <Button>Send</Button>
        </Form>
      </Page>   
              //Components and styling taken from example of Youtube

      )
}

export default Chat;
