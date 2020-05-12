import React from 'react'

function LocationLinks(props) {
    return (
        <div className="locationLinks">
            <a href={props.location.website} target="_blank" rel="noopener noreferrer">
                Site {}
            </a>
            <a href={props.location.facebook} target="_blank" rel="noopener noreferrer">
                facebook
            </a>
            <a href={props.location.instagram} target="_blank" rel="noopener noreferrer">
                instagram
            </a>
            <a href={props.location.googleMap} target="_blank" rel="noopener noreferrer">
                gmap
            </a>
        </div>
    )
}

export default LocationLinks
