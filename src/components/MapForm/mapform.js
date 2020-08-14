import React from "react";
import "./mapform.css";

function MapCreateForm(props){
    return(
        <div>
            <form className="map-form">
                <input
                    value={props.formObject.name}
                    name="name"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="name of trip"
                />
                <input
                    value={props.formObject.creator}
                    name="creator"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="creator"
                />
                <input
                    value={props.formObject.admins}
                    name="admins"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="admins"
                />
                <input
                    value={props.formObject.guests}
                    name="guests"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="guests"
                />
                <input
                    value={props.formObject.startDate}
                    name="startDate"
                    onChange={props.handleInputChange}
                    type="date"
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
                    name="destinations"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="destinations"
                />
                <input
                    value={props.formObject.suggestionCategories}
                    name="suggestionCategories"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="suggestion categories"
                />
                <button onClick={props.handleFormSubmit}>create map</button>
            </form>
        </div>
    )
}

export default MapCreateForm;