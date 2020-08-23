import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom"
import API from "../../utils/API";
import NavBar from "../../components/NavBar/navbar";
import "./suggestion.css"
import SuggestionCreateForm from "../../components/suggestionForm/suggestionForm"

function Suggestions() {
    const history = useHistory()

    const { id } = useParams()
    const mapDashboard = `/dashboard/${id}`

    //initialize form object state
    const [formObject, setFormObject] = useState({
        mapId: id,
        title: "",
        category: "",
        description: "",
        cost: "",
        link: ""
    });

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        API.getMapById(id).then(map => {
            setCategories(map.data.suggestionCategories);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    //hanldeInputChange function to update objectForm State
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    }

    function handleInputChangeSelect(value) {
        setFormObject({ ...formObject, category: (value) })
    }

    function handleFormSubmit() {
        API.postNewSuggestion(formObject).then(data => {
            console.log("here is your new suggestion", data)
            history.push(mapDashboard)
        })
    }


    return (
        <div className="suggestion-background">
            <NavBar logo="/assets/logos/logotxt.png" width="80px" left="-40px" top="10px" />
            {/* form with controlled inputs */}
            <div className="sug-buffer"></div>
            <SuggestionCreateForm
                formData={formObject}
                handleChange={handleInputChange}
                handleSave={handleFormSubmit}
                handleChangeSelect={handleInputChangeSelect}
                categories={categories}
            />
        </div>
    )


}

export default Suggestions;