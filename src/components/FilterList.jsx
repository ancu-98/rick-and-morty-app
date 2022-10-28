import React from 'react'

const FilterList = ({suggeredList, setSearchInput}) => {

    console.log(suggeredList)

    const handleClick = id => setSearchInput(id)

    return (
        <ul>
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