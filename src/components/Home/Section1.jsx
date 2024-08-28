import React from 'react';
import './Section1.css';
import SearchIcon from '../../assets/searchicon.png';
import HorizontalthreeDot from '../../assets/horizontalthreedot.png';

const Section1 = ({ data }) => {
  return (
    <div className="sectiondiv">
      <div className="searchdiv">
        <h1>Patients</h1>
        <img src={SearchIcon} alt="" id="searchicon" />
      </div>
      <div>
        {data.map((data, index) => (
          <div key={index} className="eachpeoplediv">
            <div>
              <img
                src={data.profile_picture}
                alt=""
                style={{
                  height: '48px',
                  width: '48px',
                  position: 'relative',
                  left: '10px',
                  top: '10px',
                }}
              />
            </div>
            <div style={{ position: 'relative', left: '10px', top: '10px' }}>
              <p>{data.name}</p>
              <div className="eachpeopledes">
                <p style={{ color: '#707070' }}>{data.gender}</p>
                <p style={{ color: '#707070' }}>, &nbsp;</p>
                <p style={{ color: '#707070' }}>{data.age}</p>
              </div>
            </div>
            <img
              src={HorizontalthreeDot}
              alt=""
              style={{
                marginLeft: 'auto',
                position: 'relative',
                left: '-10px',
                top: '10px',
                cursor: 'pointer',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section1;
