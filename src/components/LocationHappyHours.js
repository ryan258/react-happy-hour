import React from 'react'

function LocationHappyHours(props) {
    const happyHours = props.location.happyHours
                            .filter(hhOfDay => hhOfDay.dow.includes(props.dow))
                            .map(happyHour => (
                                <>
                                    <h4>{happyHour.time}</h4>
                                    <ul>
                                        {happyHour.specials.map(special => <li>{special}</li> )}
                                    </ul>
                                </>
                            ))

    return (
        <div>
            <h3>Happy Hours</h3>
            {happyHours}
        </div>
    )
}

export default LocationHappyHours
