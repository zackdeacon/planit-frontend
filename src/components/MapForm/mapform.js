import React from "react";
import "./mapform.css";

function MapSearchForm(){
    return(
        <div>
            <form className="mapform">
                <input
                    value={formObject.name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="name of trip"
                />
                <input
                    value={formObject.creator}
                    name="creator"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="creator"
                />
                <input
                    value={formObject.admins}
                    name="admins"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="admins"
                />
                <input
                    value={formObject.guests}
                    name="guests"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="guests"
                />
                <input
                    value={formObject.startDate}
                    name="startDate"
                    onChange={handleInputChange}
                    type="date"
                    placeholder="start date"
                />
                <input
                    value={formObject.endDate}
                    name="endDate"
                    onChange={handleInputChange}
                    type="date"
                    placeholder="end date"
                />
                <input
                    value={formObject.destinations}
                    name="destinations"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="destinations"
                />
                <input
                    value={formObject.suggestionCategories}
                    name="suggestionCategories"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="suggestion categories"
                />
                <button onClick={handleFormSubmit}>create map</button>
            </form>
        </div>
    )
}

export default MapSearchForm;