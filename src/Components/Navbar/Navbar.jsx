import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import usericon from '../../assets/usericon.jpg'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navleft">
            <img src={logo} alt="mmp img" />
            <h1>MakeMyPass</h1>
        </div>
      <div className="navright">
        <span>Hi,adnankattekaden43</span>
        <img src={usericon} alt="user img" />
      </div>
    </div>
  )
}

export default Navbar
