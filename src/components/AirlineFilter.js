import React from 'react';

export default function AirlineFilter(props) {

    return(
        <section>
            <form className="airline-filter">
                <h2>Search Airlines</h2>
                <input
                    type="text"
                    placeholder="search airline title"
                    value={props.searchTerm}
                    onChange={props.updateSearchTerm}
                />
            </form>
        </section>
    )
}