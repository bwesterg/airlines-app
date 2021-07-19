import React from 'react';

export default function AirlineItem({name, image, review, rating, high_marks}) {
    return (
        <li className="airline-item">
            <h2>{name}</h2>
            <h3>{image}</h3>
            <h4>{review}</h4>
            <h4>{rating}</h4>
            <h4>{high_marks}</h4>

        </li>
    )
}