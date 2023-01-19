import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './styles/cardResident.css'

const CardResident = ({ url }) => {
    // La URL que recibimos es otra URL distinta a location
    // Con esta URL realizamos una nueva petición.
    const [resident, setResident] = useState()

    useEffect(() => {
        axios.get(url)
            .then(res => setResident(res.data))
            .catch(err => console.log(err))
    }, [])

    console.log(resident)

    return (
        <article className='card'>
            <header className='card--header'>
                <img className='card--img' src={resident?.image} alt="image resident" />
                <div className='card--container-status'>
                    <div className={`card--circle-status ${resident?.status}`}></div>
                    <span className='card--status'>{resident?.status}</span>
                </div>
            </header>
            <section className='card--body' >
                <h3 className='card--name' >{resident?.name}</h3>
                <ul className='card--list' >
                    <li className='card--item'><span className='card-span' >Specie </span>{resident?.species}</li>
                    <li className='card--item'><span className='card-span' >Origin </span>{resident?.origin.name}</li>
                    <li className='card--item'><span className='card-span' >Episodes where appear </span>{resident?.episode.length}</li>
                </ul>
            </section>
        </article>
    )

    //resident -> si necesita encadenamiento opcional (?) porque es una nueva peticion
    // distinta a location.
}

export default CardResident