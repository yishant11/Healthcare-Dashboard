import React, { useEffect, useState } from 'react';
import HeartIcon from '../../assets/HeartIcon.png';
import RespiIcon from "../../assets/respiratoryIcon.png"
import TempIcon from "../../assets/temperatureIcon.png";

import './Section2.css';
import ColorPoint from '../ColorPoints/ColorPoints';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Section2 = ({ data }) => {
  const [bloodPressureData, setBloodPressureData] = useState();
  const [graphData, setGraphData] = useState([]);
  const [Data, setData] = useState([]);

  

  useEffect(() => {
    const authenticateLogin = async () => {
      try {
        const username = 'coalition';
        const password = 'skills-test';
        const credentials = btoa(`${username}:${password}`);

        const response = await fetch(
          'https://fedskillstest.coalitiontechnologies.workers.dev',
          {
            method: 'GET',
            headers: {
              Authorization: `Basic ${credentials}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.ok) {
          const dat = await response.json();
          console.log('Fetched data:', dat[3].diagnosis_history[0]);
          // console.log(dat[3].diagnosis_history[0].blood_pressure.diastolic.value)

          if (Array.isArray(dat)) {
            setData(dat);
          } else {
            setData([]);
          }
        }
      } catch (error) {
        console.log('Error in Calling Login Api');
      }
    };
    authenticateLogin();
    setBloodPressureData(data[0]?.diagnosis_history.reverse());
  }, [data]);

  useEffect(() => {
    setGraphData(
      bloodPressureData?.map((item) => ({
        xLabel: item?.month + ',' + item?.year,
        diastolic: item?.blood_pressure?.diastolic?.value,
        systolic: item?.blood_pressure?.systolic?.value,
      }))
    );
  }, [bloodPressureData]);

  return (
    <div className="section2div">
      <div className="searchdiv">
        <h1>Diagnostic History</h1>
      </div>

      <div className="graph-box">
        <div className="graph-box-left-section">
          <div className="graph-box-heading-box">
            <h2 className="graph-box-heading">Blood Pressure</h2>
            <div className="select-time">
              <span>Last 6 months</span>
              {/* Paste the dropdown icon here from MUI */}
            </div>
          </div>

          <div style={{ padding: '10px' }}>
            <ResponsiveContainer width={800} height={300}>
              <LineChart
                data={graphData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="xLabel" tickFormatter={(month) => `${month}`} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="systolic" stroke="#C26EB4" />
                <Line type="monotone" dataKey="diastolic" stroke="#7E6CAB" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="graph-box-right-section">
          <div className="systolc-section">
            <ColorPoint color="pink" />
            <span>Systolic</span>
            <p>160</p>
            <div className="bottom-section">
              {/* Paste the dropup icon here from MUI */}
              <span>Higher than average</span>
            </div>
          </div>
          <div className="divider"></div>
          <div className="diastolic-section">
            <div className="systolc-section">
              <ColorPoint color="purple" />
              <span>Diastolic</span>
              <p>78</p>
              <div className="bottom-section">
                {/* Paste the dropdown icon here from MUI */}
                <span>Lower than average</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='threediv'>
        <div className='respidiv'>
          <img src={RespiIcon} alt="respimg" style={{position:"relative",top:"15px",left:"15px", width: "96px", height: "96px"}}/>
          <p className='three'>Respiratory Rate</p>
          {/* <p className='commondata'>{Data[3].diagnosis_history[0].respiratory_rate.value} bpm</p> */}
          {/* <p>{Data[3].diagnosis_history[0].respiratory_rate.levels}</p> */}
        </div>
        <div className='tempdiv'>
          <img src={TempIcon} alt="tempimg" style={{position:"relative",top:"15px",left:"15px", width: "96px", height: "96px"}}/>
          <p className='three'>Temperature</p>
          {/* <p className='commondata'>{Data[3].diagnosis_history[0].temperature.value} °F</p> */}
          {/* <p>{Data[3].diagnosis_history[0].blood_pressure.diastolic.levels}</p> */}
        </div>
        <div className='blooddiv'>
          <img src={HeartIcon} alt="heartimg" style={{position:"relative",top:"15px",left:"15px", width: "96px", height: "96px"}} />
          <p className='three'>Heart Rate</p>
          {/* <p className='commondata'>{Data[3].diagnosis_history[0].blood_pressure.diastolic.value} bpm</p> */}
          {/* <p>{Data[3].diagnosis_history[0].blood_pressure.diastolic.levels}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Section2;
