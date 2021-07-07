import React from 'react'
import './search-box.style.css'

export default function SearchBox({ placeholder, handleChange }) {
    return (
        <div>
            <input className='searchbox center-block' type="search" placeholder={placeholder} onChange={handleChange}></input>
        </div>
    )
}

