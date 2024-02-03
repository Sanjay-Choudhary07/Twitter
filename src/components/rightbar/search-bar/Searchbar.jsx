import React from 'react'
import './Searchbar.css'
import search from './search-icon.png'

 const Searchbar= ()=> {
  return (
    <div className='search-container'>
      <div className='search-icon'>
       <img src= {search} alt='search-icon'/>
      </div>
      <div className='search'>
        <input type='text' placeholder='Search Twitter'/>
      </div>
    </div> 
  )
}
export default Searchbar;