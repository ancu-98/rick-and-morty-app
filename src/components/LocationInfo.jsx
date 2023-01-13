import React from 'react'
import './styles/locationInfo.css'

const LocationInfo = ({ location }) => {

    return (
        <article className='location_info'>
            <ul className='location_info_list'>
                <li className='location_info_name'><span> Name: {location?.name} </span>{location?.type}</li>
                <li className='location_info_type'><span>Type: </span>{location?.type}</li>
                <li className='location_info_dimension'><span>Dimension: </span>{location?.dimension}</li>
                <li className='location_info_residents'><span>Population: </span>{location?.residents.length}</li>
            </ul>
        </article>
    )
}

export default LocationInfo