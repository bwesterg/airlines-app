import React, { useState } from 'react';
import AirlineForm from './AirlineForm';

export default function AirlineItem({id, name, image, review, rating, high_marks, deleteAirline, updateAirline}) {
    
    const airline = {id, name, image, review, rating, high_marks, deleteAirline}
    const [isToggled, setIsToggled] = useState(false)
    const handleClick = (event) => deleteAirline(id)
    const handleToggle = (event) => setIsToggled(!isToggled)
    const airlineCard = () => (
        <li className="airline-item">
            <img src={image} alt={name} />
            <h5>Review: <i>"{review}"</i></h5>
            <h5>Overall Rating for {name}</h5><h4>{rating}/10</h4>
            <h4>{high_marks}</h4>
            <button onClick={handleClick} className="delete-button">DELETE</button>
            <button onClick={() => setIsToggled(!isToggled)} className="edit-button">EDIT</button>
        </li>
    )
    
    return isToggled 
        ? <AirlineForm 
            handleToggle={handleToggle} 
            submitAction={updateAirline} 
            airline={airline}
        /> 
        : airlineCard()
}