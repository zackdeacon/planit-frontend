import React from "react";
import "./suggestionForm.css";

function SuggestionCreateForm(props){
    return(
        <div>
            <form className="suggestion-form">
                <input
                    value={props.formObject.author}
                    name="author"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="author of suggestion"
                />
                <input
                    value={props.formObject.map}
                    name="map"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="map name"
                />
                <input
                    value={props.formObject.title}
                    name="title"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="title"
                />
                <input
                    value={props.formObject.category}
                    name="category"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="category"
                />
                <input
                    value={props.formObject.description}
                    name="description"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="start date"
                />
                <input
                    value={props.formObject.endDate}
                    name="endDate"
                    onChange={props.handleInputChange}
                    type="date"
                    placeholder="end date"
                />
                <input
                    value={props.formObject.destinations}
                    name="link"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="destinations"
                />
                <input
                    value={props.formObject.suggestionCategories}
                    name="cost"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="suggestion categories"
                />
                <button onClick={props.handleFormSubmit}>create suggestion</button>
            </form>
        </div>
    )
}

export default SuggestionCreateForm;