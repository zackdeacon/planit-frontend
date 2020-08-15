import React from "react";
import "./suggestionform.css";

function SuggestionCreateForm(props){
    return(
        <div>
            <form className="suggestion-form">
                <label>suggestion title</label>
                <input
                    value={props.title}
                    name="title"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="title"
                />
                 <label>category</label>
                <input
                    value={props.category}
                    name="category"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="category"
                />
                 <label>description</label>
                <input
                    value={props.description}
                    name="description"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="start date"
                />
                <label>start date</label>
                <input
                    value={props.startDate}
                    name="startDate"
                    onChange={props.handleInputChange}
                    type="date"
                    placeholder="start date"
                />
                 <label>end date</label>
                <input
                    value={props.endDate}
                    name="endDate"
                    onChange={props.handleInputChange}
                    type="date"
                    placeholder="end date"
                />
                 <label>destinations</label>
                <input
                    value={props.destinations}
                    name="link"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="destinations"
                />
                <button onClick={props.handleFormSubmit}>create suggestion</button>
            </form>
        </div>
    )
}

export default SuggestionCreateForm;