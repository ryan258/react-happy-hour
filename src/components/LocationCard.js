import React from 'react'
import LocationDailySpecials from './LocationDailySpecials'
import LocationHappyHours from './LocationHappyHours'
import LocationLinks from './LocationLinks'

export default function LocationCard(props) {
    console.log(props)
    return (
        <article className="locationCard item-masonry">
            {/* <p>{props.location.location}</p> */}
            <h2 className="locationName">{props.location.name}</h2>
            {props.location.specials[props.dow].length > 0 ? (
                <LocationDailySpecials {...props} />
            ) : ''}
            {props.location.happyHours.filter(hh => hh.dow.includes(props.dow)).length > 0 ? (
                <LocationHappyHours {...props} />
            ) : ''}
            <LocationLinks {...props} />
        </article>
    )
}


