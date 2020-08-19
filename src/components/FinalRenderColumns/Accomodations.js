import React, {useEffect} from 'react'
import { Card, Col } from 'antd'


export default function Accomodations(props) {
  console.log('props', props)
  const accomodationArr = []
  useEffect(() => {
    props.suggestions.map(sug => "Accomodation" === sug.category ? accomodationArr.push(sug) : null)
  }, [])
 
  return (
    <Col text="center" sm={{ span: 6 }}>
      <h1 className="columnTitle">Accomodation</h1>
      <div className="RenderCardDiv">
        <Card className="setCardHeight" type="inner" title=""
          style={{ margin: "10px" }} headStyle={{ background: "#987b55" }} >
          <a href="" style={{ color: "#945440" }}>Link to website</a>
          <h3>Price: $ </h3>
          <p>Description: </p>
        </Card>
      </div>
    </Col>
  )
}
