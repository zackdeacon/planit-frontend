import React from 'react'
import { Card, Button, Tooltip } from 'antd'
import 'antd/dist/antd.css';
import "./suggestioncard.css"
import { LikeTwoTone, DislikeTwoTone } from "@ant-design/icons"

export default function SuggestionCard(props) {

  return (
    <>
      <Card type="inner" title={props.title} extra={
        // adding up and downvote buttons
        <>
        <Tooltip>
          <Button shape="circle" style={{ background: "#6c8e98", borderColor: "#945440" }}icon={<LikeTwoTone twoToneColor="#4d534a" style={{ fontSize: "25px" }} />} size="large" />
        </Tooltip>
        <Tooltip>
          <Button shape="circle" style={{ background: "#6c8e98", borderColor: "#945440" }}icon={<DislikeTwoTone twoToneColor="#4d534a" style={{ fontSize: "25px" }} />} size="large" />
        </Tooltip>
        </>
      }
        style={{ margin: "10px" }} headStyle={{ background: "#aeac97" }} >
        <a href={props.link} style={{ color: "#945440" }}>Link to website</a>
        <h3>Price: ${props.cost}</h3>
        <p>Description: {props.description}</p>
      </Card>
    </>
  )
}