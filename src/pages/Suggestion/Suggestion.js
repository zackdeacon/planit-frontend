import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import NavBar from "../../components/NavBar/navbar";
import "./suggestion.css"
import SuggestionCreateForm from "../../components/SuggestionForm/suggestionForm"

function Suggestions() {
    let history = useHistory();

    //initialize form object state
    const [formObject, setFormObject] = useState({
        title: "",
        category: "",
        description: "",
        startDate: "",
        endDate: "",
        destinations: ""
    })

    //hanldeInputChange function to update objectForm State
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
        console.log("input change function", event.target)
    }

    //handleFormSubmit function to add formObject to Database
    function handleFormSubmit(event) {
        // event.preventDefault();
        API.postNewSuggestion(formObject).then(response => {
            console.log("here is your new suggestion", response)
            history.push(`dashboard/${response.data.mapId}`);
        })
    }


    return (
        <div className="suggestion-background">
            <NavBar logo="./assets/logos/logotxt.png" width="80px" left="-40px" top="10px" />
            {/* form with controlled inputs */}
            <SuggestionCreateForm
                formData={formObject}
                handleChange={handleInputChange}
                handleSave={handleFormSubmit}
            />
        </div>
    )


}

export default Suggestions;