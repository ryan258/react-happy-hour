import React from 'react'

function LocationDailySpecials(props) {
    const day = props.dow
    const specials = props.location.specials[day].map(special => <li>{special}</li>)

    return (
        <div>
            <h3>Specials of the Day</h3>
            <ul>{specials}</ul>
        </div>
    )
}

export default LocationDailySpecials
