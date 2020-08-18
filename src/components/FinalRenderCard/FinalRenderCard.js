import React from 'react'
import { Row } from 'antd'
import "./FinalRenderCard.css"
import Accomodations from "../FinalRenderColumns/Accomodations"
import Flights from "../FinalRenderColumns/Flights"
import Food from "../FinalRenderColumns/Food"
import Entertainment from "../FinalRenderColumns/Entertainment"


export default function FinalRenderCard(props) {



return (
    <>
      <div className="mapcard-top-buffer">
      <div className="transparentBackground">
        <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Accomodations/>
          <Flights/>
          <Food/>
          <Entertainment/>
        </Row>
      </div>
      </div>
    </>
  )
}

