import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import NavBar from "../../components/NavBar/navbar.js"
import MapCreateForm from "../../components/MapForm/mapform"
import "./cartographer.css"

function Maps() {
    let history = useHistory();

    //initialize form object state
    const [formObject, setFormObject] = useState({
        name: "",
        guests: [],
        startDate: "",
        endDate: "",
        destinations: [],
        destinationsDisplay: "",
    })

    //hanldeInputChange function to update objectForm State
    function handleInputChange(event) {
        const { name, value, dataset } = event.target;
        if (name === "name" || name === "startDate" || name === "endDate") {
            setFormObject({ ...formObject, [name]: value });
        } else if (name === "guestEmail") {
            const guests = [...formObject.guests];
            guests[dataset.index] = value;
            setFormObject({ ...formObject, guests: guests });
        } else if (name === "destinations") {
            const destinations = value.split(",").map(dest => dest.trim());
            setFormObject({
                ...formObject,
                destinations: destinations,
                destinationsDisplay: value,
            });
        }
    }

    function removeGuest(index) {
        const guests = [...formObject.guests];
        guests.splice(index, 1);
        setFormObject({ ...formObject, guests: guests });
    }

    //handleFormSubmit function to add formObject to Database
    function handleFormSubmit(event) {
        // event.preventDefault();
        API.postNewMap(formObject).then(response => {
            console.log("here is your new map", response)
            history.push(`/dashboard/${response.data._id}`)
        })
        // console.log("submit function", event.target)
    }

    return (
        <>
            <div className="dark-filter">
            <NavBar logo="./assets/logos/logotxt.png" width="80px" left="-40px" top="10px" />
            {/* form with controlled inputs */}
            <MapCreateForm
                formData={formObject}
                handleChange={handleInputChange}
                handleSave={handleFormSubmit}
                removeGuest={removeGuest}
            />
            </div>
        </>
    )
}

export default Maps;
