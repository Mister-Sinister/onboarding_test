import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Leaderboard from './components/Leaderboard';
import ActivityDetails from './components/ActivityDetails';
import ActivityList from './components/ActivityList';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch('http://127.0.0.1:8000/login')
      .then(response => response.json())
      .then(data => {
        setUserData(data);
      })
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  // console.log(userData);
  return (
      <BrowserRouter>
        <div>
          <Navbar userData={userData} />
          <div className='m-5'>
            <Routes>
              <Route path='' element={<Leaderboard  />} />
              <Route path="activities" element={<ActivityList />} />
              <Route path="activities/:id" element={<ActivityDetails />} />
              <Route path="dashboard/:id" element={<Dashboard userData={userData} />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
