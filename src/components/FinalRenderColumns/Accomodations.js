import React from 'react'
import { Card, Col } from 'antd'


export default function Accomodations(props) {
  
  return (
    <Col text="center" sm={{span:6}}>
      <h1 className="columnTitle">Accomodation</h1>
      <div className="RenderCardDiv">
      <Card className="setCardHeight" type="inner" title="AirBnb house"
        style={{ margin: "10px" }} headStyle={{ background: "#987b55" }} >
        <a href={props.link} style={{ color: "#945440" }}>Link to website</a>
        <h3>Price: $249.99</h3>
        <p>Description: "Cool AirBnb with a hottub in Whistler. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."</p>
      </Card>
      </div>
    </Col>
  )
}
