import React, { useEffect, useState } from 'react';
import Navbar from '../Nabar/Navbar';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

const Home = () => {
  const [data, setData] = useState([]);

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
          const data = await response.json();
          console.log('Fetched data:', data);

          if (Array.isArray(data)) {
            setData(data);
          } else {
            setData([]);
          }
        }
      } catch (error) {
        console.log('Error in Calling Login Api');
      }
    };
    authenticateLogin();
  }, [data]);

  return (
    <div style={{ background: '#F6F7F8', height: '180vh' }}>
      <Navbar />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '30px',
        }}
      >
        <Section1 data={data} />
        <Section2 data={data} />
        <Section3 />
      </div>
    </div>
  );
};

export default Home;
