import React from 'react'
import './Title.css'
import leftarrow from '../../../assets/leftarrow.svg'
import demo from '../../../assets/demo.png'
import docs from '../../../assets/docs.svg'
const Title = () => {
  return (
    <div className='title'>
       <div className="titleleft">
        <button className='back-button'>
            <img src={leftarrow} alt="back" />
            </button>
            <img src={demo} alt="demo" />
            <h2>Paradox Productions Meet-Up</h2>
       </div>
       <div className="titleright">
        <img src={docs} alt="view-dcos" />
        <span>View Docs</span>
       </div>
    </div>
  )
}

export default Title
