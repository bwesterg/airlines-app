import React, { Component } from 'react';

const initialState = {
    name: "",
    image: "",
    review: "",
    rating: "",
    high_marks: false,
}

export default class AirlineForm extends Component {

    state = initialState

    handleChange = (event) => {
        let {name, value, checked} = event.target

        value = (name === "high_marks") ? checked : value
        this.setState({
            [name]: value
        })
    }


    render(){
        const {name, image, review, rating, high_marks} = this.state
        return(
            <form className="airline-form">
                <h2>Add a New Airline Review</h2>
                <label>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Title" 
                    value={name} 
                    onChange={this.handleChange}
                />
                <label>Image Link</label>
                <input 
                    type="text" 
                    name="image" 
                    placeholder="Paste image link here" 
                    value={image} 
                    onChange={this.handleChange}
                />
                <label>Review</label>
                <input 
                    type="text" 
                    name="review" 
                    placeholder="Type review here" 
                    value={review} 
                    onChange={this.handleChange}
                />
                <label>Rating</label>
                <input 
                    type="number" 
                    min="1"
                    max="10"
                    name="rating" 
                    placeholder="5" 
                    value={rating} 
                    onChange={this.handleChange}
                />
                <div className="recommended-input">
                    <label>Recommended?</label>
                        <input 
                            type="checkbox" 
                            name="high_marks" 
                            checked={high_marks} 
                            onChange={this.handleChange}
                        />
                </div>
                <input type="submit" />
            </form>
        )
    }
}