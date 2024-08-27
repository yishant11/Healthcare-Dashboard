import React, { useState, useEffect } from 'react'
import "./Section3.css";
import BirthIcon from "../../assets/BirthIcon.png";
import FemaleIcon from "../../assets/FemaleIcon.png";
import PhoneIcon from "../../assets/PhoneIcon.png";

const Section3 = () => {
    const [Data, setData] = useState([]);

    useEffect(() => {
        const authenticateLogin = async () => {
            try {
                const username = 'coalition';
                const password = 'skills-test';
                const credentials = btoa(`${username}:${password}`); // Base64 encode the credentials

                const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Basic ${credentials}`,
                        'Content-Type': 'application/json'
                    }
                });

                const data = await response.json();
                setData([data[3]]);
            } catch (error) {
                console.log("Error in Calling Login Api", error);
            }
        }
        authenticateLogin();
    }, []);
    return (
        <div className='section3div'>
            <div>
                {
                    Data.map((data, index) => (
                        <div key={index} className='onepeoplediv'>
                            <div>
                                <img src={data.profile_picture} alt="" id='onepeopleimg' />
                            </div>
                            <div style={{ position: "relative", left: "10px", top: "10px" }}>
                                <h1 style={{ position: "relative", left: "60px", top: "30px" }}>{data.name}</h1>
                                <div className='onepeopledes'>
                                    <li>
                                        <img src={BirthIcon} alt="" style={{ height: "42px", width: "42px" }} />
                                        <div>
                                            <p style={{fontSize:"14px", color:'#072635'}}>Date Of Birth</p>
                                            <p style={{fontWeight:"bold",fontSize:"14px"}}>{data.date_of_birth}</p>
                                        </div>
                                    </li>

                                    <li>
                                        <img src={FemaleIcon} alt="" style={{ height: "42px", width: "42px" }} />
                                        <div>
                                            <p style={{fontSize:"14px", color:'#072635'}}>Gender</p>
                                            <p style={{fontWeight:"bold",fontSize:"14px"}}>{data.gender}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={PhoneIcon} alt="" style={{ height: "42px", width: "42px" }} />
                                        <div>
                                            <p style={{fontSize:"14px", color:'#072635'}}>Contact Info.</p>
                                            <p style={{fontWeight:"bold",fontSize:"14px"}}>{data.phone_number}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={PhoneIcon} alt="" style={{ height: "42px", width: "42px" }} />
                                        <div>
                                            <p style={{fontSize:"14px", color:'#072635'}}>Emergency Contacts</p>
                                            <p style={{fontWeight:"bold",fontSize:"14px"}}>{data.emergency_contact}</p>
                                        </div>
                                    </li>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Section3;
