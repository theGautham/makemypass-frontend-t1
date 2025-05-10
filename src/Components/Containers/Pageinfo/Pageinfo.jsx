import React from 'react'
import './Pageinfo.css'
import backwardarrow from '../../../assets/backwardarrow.svg'
const Pageinfo = () => {
  return (
    <div className='pageinfo'>
      <div className="record">69 Records</div>
      <div className="per-page">Per Page:30</div>
      <div className="pagination">
        <span>1 of 3</span>
        <img src={backwardarrow} alt="" />
      </div>
    </div>
  )
}

export default Pageinfo
