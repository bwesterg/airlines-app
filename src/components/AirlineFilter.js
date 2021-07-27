import React from 'react';

export default function AirlineFilter(props) {

    return(
        <section>
            <form>
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