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
    function handleInputChange(event){
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
                    value={formObject.name}
                    name="name"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="name"
                />
                <input
                    value={formObject.creator}
                    name="creator"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="creator"
                />
                <input
                    value={formObject.admins}
                    name="admins"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="admins"
                />
                <input
                    value={formObject.guests}
                    name="guests"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="guests"
                />
                <input
                    value={formObject.startDate}
                    name="startDate"
                    onChange={this.handleInputChange}
                    type="date"
                    placeholder="start date"
                />
                <input
                    value={formObject.endDate}
                    name="endDate"
                    onChange={this.handleInputChange}
                    type="date"
                    placeholder="end date"
                />
                <input
                    value={formObject.destinations}
                    name="destinations"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="destinations"
                />
                <input
                    value={formObject.suggestionCategories}
                    name="suggestionCategories"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="suggestion categories"
                />
                <button onClick={handleFormSubmit}>create map</button>
            </form>
        </div>
    )

}

export default Maps;