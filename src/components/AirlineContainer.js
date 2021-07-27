import React from 'react';
import AirlineItem from './AirlineItem';

export default function AirlineContainer({airlines, deleteAirline, updateAirline}) {

    const showAirlines = () => {
        return airlines.map(airline => <AirlineItem key={airline.id} {...airline} updateAirline={updateAirline} deleteAirline={deleteAirline} />)
    }
    return (
        <ul className="airline-list">
            {showAirlines()}
        </ul>
    )
}