import React from 'react'
import './Guest.css'
const Guest = () => {
  return (
    <div className='guest'>
        <div className="gleft">
            <span className='number'>80</span>
            <span className='label'>unique guests</span>
        </div>
      <div className="gright">
      <span className='number1'>59</span>
      <span className='label1'>shortlisted</span>
      <span className='number1'>11</span>
      <span className='label1'>unclaimed</span>
      </div>
    </div>
  )
}

export default Guest
