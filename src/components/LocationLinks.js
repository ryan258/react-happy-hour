import React from 'react'
import { FaGlobe, FaFacebook, FaInstagram,  } from 'react-icons/fa'
import { GrMap  } from 'react-icons/gr'

function LocationLinks(props) {
    return (
        <div className="locationLinks">
            <a className="locationLinksSite" href={props.location.website} target="_blank" rel="noopener noreferrer">
                <FaGlobe />
            </a>
            <a className="locationLinksFacebook" href={props.location.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebook />
            </a>
            <a className="locationLinksInstagram" href={props.location.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
            <a className="locationLinksGMap" href={props.location.googleMap} target="_blank" rel="noopener noreferrer">
                <GrMap />
            </a>
        </div>
    )
}

export default LocationLinks
