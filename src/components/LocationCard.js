import React from 'react'
import LocationDailySpecials from './LocationDailySpecials'
import LocationHappyHours from './LocationHappyHours'
import LocationLinks from './LocationLinks'

export default function LocationCard(props) {
    console.log(props)
    return (
        <article>
            <h2 className="locationName">{props.location.name}</h2>
            <p>{props.location.location}</p>
            <LocationDailySpecials />
            <LocationHappyHours />
            <LocationLinks />
        </article>
    )
}
