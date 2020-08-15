import React from "react";
import "./mapform.css";

function MapCreateForm(props){
    return(
        <div>
            <form className="map-form">
                <label>Name of Trip:</label>
                <input
                    value={props.name}
                    name="name"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="name of trip"
                />
                <lable>Creator:</lable>
                <input
                    value={props.creator}
                    name="creator"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="creator"
                />
                <label>Guests:</label>
                <input
                    value={props.guests}
                    name="guests"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="guests"
                />
                <label>Start Date:</label>
                <input
                    value={props.startDate}
                    name="startDate"
                    onChange={props.handleInputChange}
                    type="date"
                    placeholder="start date"
                />
                <label>End Date:</label>
                <input
                    value={props.endDate}
                    name="endDate"
                    onChange={props.handleInputChange}
                    type="date"
                    placeholder="end date"
                />
                <label>destination:</label>
                <input
                    value={props.destinations}
                    name="destinations"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="destinations"
                />
                <button onClick={props.handleFormSubmit}>create map</button>
            </form>
        </div>
    )
}

export default MapCreateForm;