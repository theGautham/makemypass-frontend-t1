import React from 'react'
import './Ticket.css'
const Ticket = () => {
  return (
    <div className='ticket'>
      <span className='spl'>• (280) Special Ticket</span>
          <span className='demo'>• (3) Demo Paid Ticket</span>
          <span className='hack'>• (4) Hackathon</span>
          <span className='new'>• (50)New Ticket</span>
    </div>
  )
}

export default Ticket
