import React from 'react'
import { Card, Col } from 'antd'


export default function CardColumns(props) {
  // console.log('props', props)
 
  return (
    <Col text="center" sm={{ span: 6 }}>
      <h1 className="columnTitle">{props.suggestions.category}</h1>
      <div className="RenderCardDiv">
        <Card className="setCardHeight" type="inner" title={props.suggestions.title}
          style={{ margin: "10px" }} headStyle={{ background: "#987b55" }} >
          <a href={props.suggestions.link} style={{ color: "#945440" }}>Link to website</a>
          <h3>Price: $ {props.suggestions.cost}</h3>
          <p>Description: {props.suggestions.description}</p>
        </Card>
      </div>
    </Col>
  )
}
