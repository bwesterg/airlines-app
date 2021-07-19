import React from 'react';
import AirlineItem from './AirlineItem';

export default function AirlineContainer({airlines}) {

    const showAirlines = () => {
        return airlines.map(airline => <AirlineItem key={airline.id} {...airline} />)
    }
    return (
        <ul className="airline-list">
            {showAirlines()}
        </ul>
    )
}