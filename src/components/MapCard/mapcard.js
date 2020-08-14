import React, {useState, useEffect} from 'react'
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import SuggestionCard from  "../SuggestionCard/SuggestionCard"
import API from "../../utils/API"

export default function mapcard(props) {

    const categorySuggestions = (category) => {
        API.getSuggestions().then(res =>{
            
        })
    }
    return (
        <div className="card-container">
    <Tabs type="card">
        {props.suggestionCategories.map(category => 
        <TabPane tab={props.suggestionCategory.name} key={NeedsKeyProp}>
        <SuggestionCard title={props.suggestion.title} cost={props.suggestion.cost} link={props.suggestion.link} description={props.suggestion.description}/>
      </TabPane>
      )}
          
    </Tabs>
  </div>
    )
}
