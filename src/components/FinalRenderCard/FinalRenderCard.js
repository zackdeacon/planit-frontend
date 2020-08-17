import React from 'react'
import { Card, Row, Col } from 'antd'
import 'antd/dist/antd.css';
import "./FinalRenderCard.css"

export default function SuggestionCard(props) {

  return (
    <>
      <Card type="inner" title={props.title}
        style={{ margin: "10px" }} headStyle={{ background: "#aeac97" }} >
        <a href={props.link} style={{ color: "#945440" }}>Link to website</a>
        <h3>Price: ${props.cost}</h3>
        <p>Description: {props.description}</p>
      </Card>
    </>
  )
}