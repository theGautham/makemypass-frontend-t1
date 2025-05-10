import React from 'react'
import './Home.css'
import Navbar from '../../Navbar/Navbar'
import Title from '../../Containers/Title/Title'
import Mini from '../../Containers/MiniNavbar/Mini'
import Glance from '../../Containers/Glance/Glance'
import Guest from '../../Containers/Guest/Guest'
import Progress from '../../Containers/Progressbar/Progress'
import Ticket from '../../Containers/Ticket/Ticket'
import Usertype from '../../Containers/Usertype/Usertype'
import Search from '../../Containers/Search/Search'
import downarrow from '../../../assets/downarrow.png'
import Userlist from '../../Containers/Userlist/Userlist'
import Pageinfo from '../../Containers/Pageinfo/Pageinfo'
import Footer from '../../Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Title/>
      <Mini/>
      <Glance/>
      <Guest/>
      <Progress/>
      <Ticket/>
      <Usertype/>
      <div className='guestlist'>
      <span>Guests List</span>
    </div>
      <Search/>
      <div className="recentg">
        <div className="recentleft">
          <span>Recent Guests(8)</span>
        </div>
        <div className="recentright">
          <button class='normal'>Select Multiple</button>
          <button class='normal-arrow'>Checked In 
            <span class='arrow-end'>|
              <img src={downarrow} alt="" /></span>
          </button>
          <button class='normal-arrow'>Approval Status 
            <span class='arrow-end'>|
            <img src={downarrow} alt="" /></span></button>
          <button class='normal-arrow'>Reg Status
            <span class='arrow-end'>|
            <img src={downarrow} alt="" />
            </span>
            </button>
        </div>
      </div>
      <Userlist/>
      <Pageinfo/>
      <Footer/>
    </div>
  )
}

export default Home
