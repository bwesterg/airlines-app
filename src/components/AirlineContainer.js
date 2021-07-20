import React from 'react';
import AirlineItem from './AirlineItem';

export default function AirlineContainer({airlines, deleteAirline}) {

    const showAirlines = () => {
        return airlines.map(airline => <AirlineItem key={airline.id} {...airline} deleteAirline={deleteAirline} />)
    }
    return (
        <ul className="airline-list">
            {showAirlines()}
        </ul>
    )
}