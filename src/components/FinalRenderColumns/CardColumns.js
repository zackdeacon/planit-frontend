import React from 'react'
import { Card, Col } from 'antd'


export default function CardColumns(props) {
  console.log('props', props.suggestions)
  
 
  return (
    <>
        <Card className="setCardHeight" type="inner" title={props.suggestions.title}
          style={{ margin: "10px" }} headStyle={{ background: "#987b55" }} >
          <a href={props.suggestions.link} target="_blank" rel="noopener noreferrer" style={{ color: "#6c8e98" }}>Link to website</a>
          <h3>Price: $ {props.suggestions.cost}</h3>
          <p>Description: {props.suggestions.description}</p>
        </Card>
      </>
  )
}
