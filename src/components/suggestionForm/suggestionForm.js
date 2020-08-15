import React from 'react';
// import "./suggestionForm.css";


function SuggestionCreateForm(props){
    return(
        <div>
            <form className="suggestion-form">
                <label>suggestion title</label>
                <input
                    value={props.formData.title}
                    name="title"
                    onChange={props.handleChange}
                    type="text"
                    placeholder="title"
                />
                 <label>category</label>
                <input
                    value={props.formData.category}
                    name="category"
                    onChange={props.handleChange}
                    type="text"
                    placeholder="category"
                />
                 <label>description</label>
                <input
                    value={props.formData.description}
                    name="description"
                    onChange={props.handleChange}
                    type="text"
                    placeholder="start date"
                />
                <label>start date</label>
                <input
                    value={props.formData.startDate}
                    name="startDate"
                    onChange={props.handleChange}
                    type="date"
                    placeholder="start date"
                />
                 <label>end date</label>
                <input
                    value={props.formData.endDate}
                    name="endDate"
                    onChange={props.handleChange}
                    type="date"
                    placeholder="end date"
                />
                 <label>destinations</label>
                <input
                    value={props.formData.destinations}
                    name="link"
                    onChange={props.handleChange}
                    type="text"
                    placeholder="destinations"
                />
                <button onClick={props.handleSave}>create suggestion</button>
            </form>
        </div>
    )
}

export default SuggestionCreateForm;