import React from 'react';

export default function AirlineItem({id, name, image, review, rating, high_marks, deleteAirline}) {
    
    const handleClick = (event) => deleteAirline(id)
    
    return (
        <li className="airline-item">
            <h4>{name}</h4>
            <img src={image} alt={name} />
            <h5>Review: <i>"{review}"</i></h5>
            <h5>Overall Rating:</h5><h4>{rating}/10</h4>
            <h4>{high_marks}</h4>
            <button onClick={handleClick} className="delete-button">DELETE</button>
        </li>
    )
}