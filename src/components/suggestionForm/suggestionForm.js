import React from "react";
import "./suggestionForm.css";

function MapCreateForm(){
    return(
        <div>
            <form className="suggestion-form">
                <input
                    value={formObject.author}
                    name="author"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="author of suggestion"
                />
                <input
                    value={formObject.map}
                    name="map"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="map name"
                />
                <input
                    value={formObject.title}
                    name="title"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="title"
                />
                <input
                    value={formObject.category}
                    name="category"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="category"
                />
                <input
                    value={formObject.description}
                    name="description"
                    onChange={handleInputChange}
                    type="text"
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
                    name="link"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="destinations"
                />
                <input
                    value={formObject.suggestionCategories}
                    name="cost"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="suggestion categories"
                />
                <button onClick={handleFormSubmit}>create suggestion</button>
            </form>
        </div>
    )
}

export default MapCreateForm;