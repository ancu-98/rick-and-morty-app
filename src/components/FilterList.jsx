import React from 'react'
import './styles/filterList.css'

const FilterList = ({suggeredList, setSearchInput}) => {

    console.log(suggeredList)

    const handleClick = id => setSearchInput(id)

    return (
        <ul className='filter_list' >
            {
                suggeredList?.map(location => (
                    <li onClick={() => handleClick(location.id)} key={location.id}
                    >{location.name}</li>
                ))
            }
        </ul>
    )
}

export default FilterList