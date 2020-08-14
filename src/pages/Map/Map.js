import React, { useEffect, useState } from "react";
import API from "../utils/API";
import "./map.css"
import MapSearchForm from "../../components/MapForm/mapform"

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
            console.log("here is your new map", data)
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

    //delete map
    // function deleteMap(id){
    //     API.deleteMap(id).then(data=>{
    //         loadMaps();
    //     })
    // }
  
    
    return(
        <>
        {/* form with controlled inputs */}
        <MapSearchForm
            onChange={handleInputChange}
            onClick={handleFormSubmit}
        />
        </>
    )
    

}

export default Maps;