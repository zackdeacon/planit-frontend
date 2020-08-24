import React from 'react';
import { Result, Button } from 'antd';
import "./NoMatch.css"
import { useHistory } from "react-router-dom";





export default function NoMatch() {
    
        const history = useHistory();
      
        function takeMeHome() {
          history.push("/");
        }
    return (
        <>
        <div className="nomatchBuffer"></div>
        <div className="ErrorLogoDiv">
    <img className="ErrorLogo" src="./assets/logos/logotxt.png" alt="logo"/>
    </div>
    <Result
    status="404"
    title="404"
    subTitle="Hey friend, looks like you've travelled off the beaten path."
    extra={<Button onClick={takeMeHome} type="primary">Back Home</Button>}
  />
  </>
    )
    
};
