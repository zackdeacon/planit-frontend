import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import { Row } from 'antd'
import "./FinalRenderCard.css"
import API from '../../utils/API'
import Accomodations from "../FinalRenderColumns/Accomodations"
import Flights from "../FinalRenderColumns/Flights"
import Food from "../FinalRenderColumns/Food"
import Entertainment from "../FinalRenderColumns/Entertainment"


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

 
  const flightArr = [];
  const foodArr = [];
  const entertainmentArr = [];
    
    suggestions.map(sug => sug.categories === "Flights" ? flightArr.push(sug) : null)
    suggestions.map(sug => sug.categories === "Food" ? foodArr.push(sug) : null)
    suggestions.map(sug => sug.categories === "Entertainment" ? entertainmentArr.push(sug) : null)

  



  return (
    <>
      <div className="mapcard-top-buffer">
        <div className="transparentBackground">
          <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Accomodations suggestions={suggestions} />
            <Flights suggestions={suggestions} />
            <Food suggestions={suggestions} />
            <Entertainment suggestions={suggestions} />
          </Row>
        </div>
      </div>
    </>
  )
}

