import React from 'react'
import './Search.css'
import search from '../../../assets/search.png' 
const Search = () => {
  return (
    <div className='container-search'>
    <div className='search'>
        <img src={search} alt="search icon" />
        <input type="text" placeholder='Search'/>
    </div>
    </div>
  )
}

export default Search
