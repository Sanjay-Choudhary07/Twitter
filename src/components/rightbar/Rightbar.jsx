import React from 'react'
import Searchbar from './search-bar/Searchbar'
import Trending from './trending/Trending'
import Follow from './who-to-follow/Follow'
import './Rightbar.css'

function Rightbar() {
  return (
    <div className='right'>
      <Searchbar/>
      <Trending/>
      <Follow/> 
    </div>
  );
}
export default Rightbar;
