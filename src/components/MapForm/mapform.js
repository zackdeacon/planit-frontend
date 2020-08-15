import React from "react";
import "./mapform.css";

function MapCreateForm(props){
    return(
        <div>
            <form className="map-form">
                <label>Name of Trip:</label>
                <input
                    value={props.formData.name}
                    name="name"
                    onChange={props.handleChange}
                    type="text"
                    placeholder="name of trip"
                />
                {/* <label>Creator:</label>
                <input
                    value={props.formData.creator}
                    name="creator"
                    onChange={props.handleChange}
                    type="text"
                    placeholder="creator"
                /> */}
                <label>Guests:</label>
                <input
                    value={props.formData.guests}
                    name="guests"
                    onChange={props.handleChange}
                    type="text"
                    placeholder="guests"
                />
                <label>Start Date:</label>
                <input
                    value={props.formData.startDate}
                    name="startDate"
                    onChange={props.handleChange}
                    type="date"
                    placeholder="start date"
                />
                <label>End Date:</label>
                <input
                    value={props.formData.endDate}
                    name="endDate"
                    onChange={props.handleChange}
                    type="date"
                    placeholder="end date"
                />
                <label>destination:</label>
                <input
                    value={props.formData.destinations}
                    name="destinations"
                    onChange={props.handleChange}
                    type="text"
                    placeholder="destinations"
                />
                <button onClick={props.handleSave}>create map</button>
            </form>
        </div>
    )
}

export default MapCreateForm;