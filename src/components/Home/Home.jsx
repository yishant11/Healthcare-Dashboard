import React from 'react'
import Navbar from "../Nabar/Navbar";
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

const Home = () => {
  return (
    <div style={{background:"#F6F7F8", height:"180vh"}}>
       <Navbar/>
       <div  style={{display:"flex", gap:"30px"}}>
       <Section1/>
       <Section2/>
       <Section3/>
       </div>
    </div>
  )
}

export default Home;
