import React from 'react'
import Homelogo from '../../assets/homeicon.png';
import './Navbar.css';
import Logo from "../../assets/TestLogo.png";
import People from '../../assets/people.png';
import MessageIcon from "../../assets/chaticon.png";
import TransactionIcon from "../../assets/transactionicon.png";
import CalenderIcon from "../../assets/calender.png";
import DoctorImg from "../../assets/seniorwoman.png";
import SettingIcon from "../../assets/settings.png";
import ThreedotIcon from "../../assets/threedot.png";


const Navbar = () => {
  return (
    <div className='maindiv'>
      <ul className='navbar'>
        <li className='logodiv'>
          <img src={Logo} className='logo' alt="" />
        </li>

        <div className='navbardiv'>
          <li>
            <img src={Homelogo} className='logoimg' alt="homeIcon" />
            <a href='#'> Overview </a>
          </li>
          <li>
            <img src={People} className='logoimg' alt="" style={{width:"20px"}}/>
            <a href='#'> Patients </a>
          </li>
          <li>
            <img src={CalenderIcon} className='logoimg' alt="" />
            <a href='#'> Schedule </a>
          </li>
          <li>
            <img src={MessageIcon} className='logoimg' alt="" />
            <a href='#'> Message </a>
          </li>
          <li>
            <img src={TransactionIcon} className='logoimg' alt="" />
            <a href=''> Transaction </a>
          </li>
        </div>

        <div className='doctorprofile'>
          <li>
            <img src={DoctorImg} alt="doctorimg" style={{height:"35px",width:"35px"}} />
            <div className='namediv'>
              <p>Dr. Jose Simmons</p>
              <p style={{color:"grey"}}>General Practitioner</p>
            </div>
          </li>
          <div class="vertical-line"></div>
          <img src={SettingIcon} alt="" style={{cursor:"pointer", height:"20px", width:"20px"}} />
          <img src={ThreedotIcon} alt="" style={{cursor:"pointer",height:"15px", width:"3px"}} />
        </div>
      </ul>
    </div>
  )
}

export default Navbar;
