import React from 'react'
import './Usertype.css'
import dropped from '../../../assets/dropped.png'
import blacklisted from '../../../assets/blacklisted.png'
import exported from '../../../assets/exported.png'
import add from '../../../assets/add.png'
const Usertype = () => {
  return (
    <div className='usercontainer'>
      <button class='action-button'>Dropped Users<img src={dropped} alt="drop" /></button>
      <button class='action-button'> Blacklisted Users <img src={blacklisted} alt="blacklisted" /></button>
      <button class='action-button'>Export Data <img src={exported} alt="exported" /></button>
      <button class='action-button'>Add Guest <img src={add} alt="add" /></button>
    </div>
  )
}

export default Usertype
