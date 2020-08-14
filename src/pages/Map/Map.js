import React, { useEffect, useState } from "react";
import API from "../utils/API";
import "./mapform.css";

function Maps() {
    //set book component initial state
    const [maps, setMaps] = useState([])

    //initialize form object state
    const [formObject, setFormObject]=useState({
        name: "",
        creator: "",
        admins: "",
        guests: "",
        startDate: "",
        endDate: "",
        destinations: "",
        suggestionCategories: ""
    })
    //load all maps, store them with setMaps
    useEffect(()=>{
        loadMaps()
    }, [])

    //load all maps and sets them to maps
    function loadMaps(){
        API.getMaps()
        .then(res=>
            setMaps(res.data)
        )
        .catch(err=>console.log(err))
    }

    //hanldeInputChange function to update objectForm State
    function hanldeInputChange(event){
        const {name,value}=event.target;
        setFormObject({...formObject,[name]:value})
        console.log("input change function", event.target)
    }

    //handleFormSubmit function to add formObject to Database
    function handleFormSubmit(event){
        event.preventDefault();
        API.saveMap(formObject).then(data=>{
            loadMaps();
            setFormObject({
                name: "",
                creator: "",
                admins: "",
                guests: "",
                startDate: "",
                endDate: "",
                destinations: "",
                suggestionCategories: "" 
            })
        })
        console.log("submit function", event.target)
    }

    //form with controlled inputs
    return(
        <div>
            <form className="mapform">
                <input
                    value={this.state.name}
                    name="name"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="name"
                />
                <input
                    value={this.state.creator}
                    name="creator"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="creator"
                />
                <input
                    value={this.state.admins}
                    name="admins"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="admins"
                />
                <input
                    value={this.state.guests}
                    name="guests"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="guests"
                />
                <input
                    value={this.state.dates}
                    name="dates"
                    onChange={this.handleInputChange}
                    type="date"
                    placeholder="start"
                />
                <input
                    value={this.state.dates}
                    name="dates"
                    onChange={this.handleInputChange}
                    type="date"
                    placeholder="end"
                />
                <input
                    value={this.state.destinations}
                    name="destinations"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="destinations"
                />
                <input
                    value={this.state.suggestionCategories}
                    name="suggestionCategories"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="suggestionCategories"
                />
                <button onClick={handleFormSubmit}>create map</button>
            </form>
        </div>
    )

}

export default Maps;