import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import { Row } from 'antd'
import "./FinalRenderCard.css"
import API from '../../utils/API'
import CardColumns from "../FinalRenderColumns/CardColumns"


export default function FinalRenderCard(props) {
  const [suggestions, setSuggestions] = useState([])
  const { id } = useParams()

  useEffect(() => {
    API.getSuggestionsForMap(id).then(res => {
      const suggestionArr = res.data.map(suggestion => {
        return suggestion
      })
      setSuggestions(suggestionArr)
    })
      .catch(err => console.log('err', err))
  }, [])

  const accomodationArr = []
  const flightArr = [];
  const foodArr = [];
  const entertainmentArr = [];

  for (let i = 0; i < suggestions.length; i++) {
    if (suggestions[i].category === "Accomodation") {
      accomodationArr.push(<CardColumns key={suggestions[i]._id} suggestions={suggestions[i]} />)
    } else if (suggestions[i].category === "Flight") {
      flightArr.push(<CardColumns key={suggestions[i]._id} suggestions={suggestions[i]} />)
    } else if (suggestions[i].category === "Food") {
      foodArr.push(<CardColumns key={suggestions[i]._id} suggestions={suggestions[i]} />)
    } else {
      entertainmentArr.push(<CardColumns key={suggestions[i]._id} suggestions={suggestions[i]} />)
    }
  }


    return (
      <>
        <div className="itin-wrapper">
          <div className="transparentBackground">
            <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              {accomodationArr.map(item => { return item })}
              {flightArr.map(item => { return item })}
              {foodArr.map(item => { return item })}
              {entertainmentArr.map(item => { return item })}
            </Row>
          </div>
        </div>
      </>
    )
  }

