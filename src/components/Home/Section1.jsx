import React, { useEffect, useState } from 'react'
import "./Section1.css";
import SearchIcon from "../../assets/searchicon.png";
import HorizontalthreeDot from "../../assets/horizontalthreedot.png";


const Section1 = () => {

  const [Data,setData] = useState([]);

  useEffect(() => {
    const authenticateLogin = async () =>{
        try{
          const username = 'coalition';
          const password = 'skills-test';
          const credentials = btoa(`${username}:${password}`);

          const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
            method: 'GET',
            headers: {
              'Authorization': `Basic ${credentials}`,
              'Content-Type': 'application/json'
            }
          });

          if (response.ok) {
            const data = await response.json();
            console.log('Fetched data:', data);
          
            if (Array.isArray(data)) {
              setData(data);
            }
            else {
              setData([]); 
            }
          }
        }
        catch(error){
            console.log("Error in Calling Login Api");
        }
    }
    authenticateLogin();
  }, [])

  return (
    <div className='sectiondiv'>
      <div className='searchdiv'>
        <h1>Patients</h1>
        <img src={SearchIcon} alt="" id='searchicon' />
      </div>
      <div>
      {
          Data.map((data, index) => (
            <div key={index} className='eachpeoplediv'>
              <div>
                <img src={data.profile_picture} alt="" style={{height:"48px", width:"48px", position:"relative",left:"10px",top:"10px"}} />
              </div>
              <div  style={{position:"relative",left:"10px",top:"10px"}}>
                <p>{data.name}</p>
                <div className='eachpeopledes'>
                <p style={{color:"#707070"}}>{data.gender}</p>
                <p style={{color:"#707070"}}>, &nbsp;</p>
                <p style={{color:"#707070"}}>{data.age}</p>
                </div>
              </div>
              <img src={HorizontalthreeDot} alt="" style={{marginLeft:"auto", position:"relative", left:"-10px",top:"10px", cursor:"pointer"}} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Section1;
