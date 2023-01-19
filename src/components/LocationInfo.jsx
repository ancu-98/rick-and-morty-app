import React from 'react'
import './styles/locationInfo.css'

const LocationInfo = ({ location }) => {

    return (
        <article className='location_info'>
            <ul className='location_info_list'>
                <li><span>Name: </span>{location?.name} </li>
                <li><span>Type: </span>{location?.type}</li>
                <li><span>Dimension: </span>{location?.dimension}</li>
                <li><span>Population: </span>{location?.residents.length}</li>
            </ul>
        </article>
    )
}

export default LocationInfo