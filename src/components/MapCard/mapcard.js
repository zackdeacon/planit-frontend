import React from 'react'
import SuggestionCard from "../SuggestionCard/SuggestionCard"
import { Tabs, Row} from 'antd';
import "./mapcard.css"

const { TabPane } = Tabs;

// import API from "../../utils/API"

export default function MapCard(props) {
// console.log(props);

//This function takes in an id and queries the database with checking for suggestions with the proper suggestion id and map id
  // const categorySuggestions = (id) => {
  //     API.getSuggestions(id).then(res =>{
  //        for (let i = 0; i < res.data.length; i++) {
  //         return <SuggestionCard handleClick={handleClick} title={props.suggestion[i].title} cost={props.suggestion[i].cost} link={props.suggestion[i].link} description={props.suggestion[i].description}/>
  //        } 
  //     })
  // }
  
  const tabsArr = [];

  for (let i = 0; i < props.categories.length; i++) {
  tabsArr.push(<TabPane tab={props.categories[i]} key={[i]}></TabPane>);
  }


  return (
    <>
      <div className="mapcard-wrapper">

        <div className="card-container">
          <Tabs type="card">
            {tabsArr.map(item => {return item})}
          </Tabs>
        </div>
      </div>
    </>
  )
}



{/* <TabPane tab="Accomodation" key="1">
<Row>
<SuggestionCard module={module} _id="1" title="AirBnb house" cost="175" link="https://www.airbnb.com/rooms/16068259?s=67&unique_share_id=5951f1de-099c-4b12-a013-54df4c947520" description="Cool AirBnb with a hottub in Whistler. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
<SuggestionCard module={module} _id="2" title="VRBO house" cost="175" link="https://www.airbnb.com/rooms/16068259?s=67&unique_share_id=5951f1de-099c-4b12-a013-54df4c947520" description="Cool AirBnb with a hottub in Whistler lorem blahlorem blah lorem blah lorem blah lorem blah lorem blah lorem blah lorem blahlorem blah lorem blah lorem bla" />
<SuggestionCard module={module} _id="3" title="Marriot hotel" cost="175" link="https://www.airbnb.com/rooms/16068259?s=67&unique_share_id=5951f1de-099c-4b12-a013-54df4c947520" description="Cool AirBnb with a hottub in Whistler" />
<SuggestionCard module={module} _id="4" title="Trailer Park" cost="175" link="https://www.airbnb.com/rooms/16068259?s=67&unique_share_id=5951f1de-099c-4b12-a013-54df4c947520" description="Cool AirBnb with a hottub in Whistler. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
<SuggestionCard module={module} _id="5" title="Busta Rhymes House" cost="175" link="https://www.airbnb.com/rooms/16068259?s=67&unique_share_id=5951f1de-099c-4b12-a013-54df4c947520" description="Cool AirBnb with a hottub in Whistler lorem blahlorem blah lorem blah lorem blah lorem blah lorem blah lorem blah lorem blahlorem blah lorem blah lorem bla" />
<SuggestionCard module={module} _id="6" title="Abandonded Car Lot" cost="175" link="https://www.airbnb.com/rooms/16068259?s=67&unique_share_id=5951f1de-099c-4b12-a013-54df4c947520" description="Cool AirBnb with a hottub in Whistler lorem blahlorem blah lorem blah lorem blah lorem blah lorem blah lorem blah lorem blahlorem blah lorem blah lorem bla" />
<SuggestionCard module={module} _id="7" title="Haunted House" cost="175" link="https://www.airbnb.com/rooms/16068259?s=67&unique_share_id=5951f1de-099c-4b12-a013-54df4c947520" description="Cool AirBnb with a hottub in Whistler lorem blahlorem blah lorem blah lorem blah lorem blah lorem blah lorem blah lorem blahlorem blah lorem blah lorem bla" />
<SuggestionCard module={module} _id="8" title="Sam's Couch" cost="175" link="https://www.airbnb.com/rooms/16068259?s=67&unique_share_id=5951f1de-099c-4b12-a013-54df4c947520" description="Cool AirBnb with a hottub in Whistler lorem blahlorem blah lorem blah lorem blah lorem blah lorem blah lorem blah lorem blahlorem blah lorem blah lorem bla" />
<SuggestionCard module={module} _id="9" title="AirBnb house 2" cost="175" link="https://www.airbnb.com/rooms/16068259?s=67&unique_share_id=5951f1de-099c-4b12-a013-54df4c947520" description="Cool AirBnb with a hottub in Whistler lorem blahlorem blah lorem blah lorem blah lorem blah lorem blah lorem blah lorem blahlorem blah lorem blah lorem bla" />
</Row>
</TabPane>
<TabPane tab="Food" key="2">
<SuggestionCard title="Restaurant" cost="175" link="https://www.airbnb.com/rooms/16068259?s=67&unique_share_id=5951f1de-099c-4b12-a013-54df4c947520" description="Cool Restaurant" />
</TabPane> */}
