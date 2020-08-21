import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import { Row, Col } from 'antd'
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
    } else if (suggestions[i].category === "Flights") {
      flightArr.push(<CardColumns key={suggestions[i]._id} suggestions={suggestions[i]} />)
    } else if (suggestions[i].category === "Food") {
      foodArr.push(<CardColumns key={suggestions[i]._id} suggestions={suggestions[i]} />)
    } else {
      entertainmentArr.push(<CardColumns key={suggestions[i]._id} suggestions={suggestions[i]} />)
    }
  }


  accomodationArr.sort(function (a, b) {
    let aUpvotes = a.props.suggestions.votes.filter(vote => vote.vote).length
    let aDownVotes = a.props.suggestions.votes.filter(vote => !vote.vote).length

    let bUpvotes = b.props.suggestions.votes.filter(vote => vote.vote).length
    let bDownVotes = b.props.suggestions.votes.filter(vote => !vote.vote).length

    if ((aUpvotes - aDownVotes) > (bUpvotes - bDownVotes)) {
      return -1
    } else {
      return 1
    }
  })

  flightArr.sort(function (a, b) {
    let aUpvotes = a.props.suggestions.votes.filter(vote => vote.vote).length
    let aDownVotes = a.props.suggestions.votes.filter(vote => !vote.vote).length

    let bUpvotes = b.props.suggestions.votes.filter(vote => vote.vote).length
    let bDownVotes = b.props.suggestions.votes.filter(vote => !vote.vote).length

    if ((aUpvotes - aDownVotes) > (bUpvotes - bDownVotes)) {
      return -1
    } else {
      return 1
    }
  })

  foodArr.sort(function (a, b) {
    let aUpvotes = a.props.suggestions.votes.filter(vote => vote.vote).length
    let aDownVotes = a.props.suggestions.votes.filter(vote => !vote.vote).length

    let bUpvotes = b.props.suggestions.votes.filter(vote => vote.vote).length
    let bDownVotes = b.props.suggestions.votes.filter(vote => !vote.vote).length

    if ((aUpvotes - aDownVotes) > (bUpvotes - bDownVotes)) {
      return -1
    } else {
      return 1
    }
  })

  entertainmentArr.sort(function (a, b) {
    let aUpvotes = a.props.suggestions.votes.filter(vote => vote.vote).length
    let aDownVotes = a.props.suggestions.votes.filter(vote => !vote.vote).length

    let bUpvotes = b.props.suggestions.votes.filter(vote => vote.vote).length
    let bDownVotes = b.props.suggestions.votes.filter(vote => !vote.vote).length

    if ((aUpvotes - aDownVotes) > (bUpvotes - bDownVotes)) {
      return -1
    } else {
      return 1
    }
  })

  const singleAccomodation = [...accomodationArr].shift();

  const singleFlight = [...flightArr].shift();


  return (
    <>
      <div className="mapcard-top-buffer">
        <div className="transparentBackground">
          <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col text="center" sm={{ span: 6 }}>
              <h1 className="columnTitle">Accomodation</h1>
              <div className="RenderCardDiv">
                {singleAccomodation}
              </div>
            </Col>
            <Col text="center" sm={{ span: 6 }}>
              <h1 className="columnTitle">Flights</h1>
              <div className="RenderCardDiv">
                {singleFlight}
              </div>
            </Col>
            <Col text="center" sm={{ span: 6 }}>
              <h1 className="columnTitle">Food</h1>
              <div className="RenderCardDiv">
                {foodArr.map(item => { return item })}
              </div>
            </Col>
            <Col text="center" sm={{ span: 6 }}>
              <h1 className="columnTitle">Entertainment</h1>
              <div className="RenderCardDiv">
                {entertainmentArr.map(item => { return item })}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

