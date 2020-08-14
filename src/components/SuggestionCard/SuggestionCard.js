import React from 'react'
import {Card, Button} from 'antd'
import 'antd/dist/antd.css';

export default function SuggestionCard(props) {

    return (
        <>
        <Card title={props.title} extra={<a href="#">Link to website</a>} style={{ width: 300 }}>
        <h1>Price: ${props.cost}</h1>
        <h1>Link: {props.link}</h1>
        <p>Description: {props.description}</p>
        </Card>
      </>
    )
}
