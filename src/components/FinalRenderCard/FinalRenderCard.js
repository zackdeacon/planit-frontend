import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import { Row, Col } from 'antd'
import "./FinalRenderCard.css"
import API from '../../utils/API'
import CardColumns from "../FinalRenderColumns/CardColumns"


export default function FinalRenderCard() {
  const [suggestions, setSuggestions] = useState([]);
  const [categoryColumns, setCategoryColumns] = useState([]);

  const { id } = useParams()

  useEffect(() => {
    API.getSuggestionsForMap(id).then(res => {
      const suggestionArr = res.data;
      setSuggestions(suggestionArr);
    }).catch(err => console.log('err', err));
  }, []);

  useEffect(() => {
    const newCategoryColumns = createCategoryColumns(suggestions);
    setCategoryColumns(newCategoryColumns);
  }, [suggestions]);

  function createCategoryColumns(suggestions) {
    const categoryColumns = [];
    const categoryObject = createCategoryObject(suggestions);
    const categoryArray = Object.entries(categoryObject);
    for (const [category, suggAry] of categoryArray) {
      let sorted = sortByVotes(suggAry);
      if (category === "Accommodation" || category === "Flights") {
        sorted = [sorted[0]];
      };
      const categoryColumn = (
        <Col key={category} keytext="center" sm={{ span: 6 }}>
          <h1 className="columnTitle">{category}</h1>
          <div className="RenderCardDiv">
            {sorted.map(sug => <CardColumns key={sug._id} suggestions={sug} />)}
          </div>
        </Col>
      );
      categoryColumns.push(categoryColumn);
    }
    return categoryColumns;
  }

  function createCategoryObject(suggestions) {
    let categoryObject = {};
    for (const suggestion of suggestions) {
      if (!categoryObject[suggestion.category]) {
        categoryObject[suggestion.category] = [];
        categoryObject[suggestion.category].push(suggestion)
      } else {
        categoryObject[suggestion.category].push(suggestion)
      }
    }
    return categoryObject;
  }

  function sortByVotes(suggestionArray) {
    return suggestionArray.sort(function (a, b) {
      let aUpvotes = a.votes.filter(vote => vote.vote).length;
      let aDownVotes = a.votes.filter(vote => !vote.vote).length;

      let bUpvotes = b.votes.filter(vote => vote.vote).length;
      let bDownVotes = b.votes.filter(vote => !vote.vote).length;

      return (aUpvotes - aDownVotes) > (bUpvotes - bDownVotes) ? -1 : 1;
    })
  }

  return (
    <>
      <div className="itin-wrapper">
        <div className="transparentBackground">
          <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {categoryColumns}
          </Row>
        </div>
      </div>
    </>
  )
}
