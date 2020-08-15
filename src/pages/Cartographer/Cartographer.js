import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import MapCreateForm from "../../components/MapForm/mapform"
import "./cartographer.css"

function Maps(props) {
    //set book component initial state
    const [maps, setMaps] = useState([])

    //initialize form object state
    const [formObject, setFormObject]=useState({
        name: "",
        // creator: "",
        guests: "",
        startDate: "",
        endDate: "",
        destinations:""
    })
    //load all maps, store them with setMaps
    useEffect(()=>{
        loadMaps()
        console.log(formObject)
    }, [])

    //load all maps and sets them to maps
    function loadMaps(){
        API.getAllMaps()
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
        API.postNewMap(formObject).then(data=>{
            console.log("here is your new map", data)
            loadMaps();
            setFormObject({
                name: "",
                // creator: "",
                // guests: "",
                startDate: "",
                endDate: "",
                destinations: "" 
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
        <MapCreateForm
            // props={props}
            formData={formObject}
            handleChange={handleInputChange}
            handleSave={handleFormSubmit}
        />
        </>
    )
    

}

export default Maps;
