import React from 'react'
import Navigationbar from './navigationbar/Navigationbar' 
import Profile from './profile/Profile'
import './Sidebar.css'
function Sidebar() {
  return (
    <div className='side'>
      <Navigationbar/>
      <Profile/>
    </div>
  )
}
export default Sidebar
