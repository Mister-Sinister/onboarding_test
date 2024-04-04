import React, { useState, useEffect } from 'react';

function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [filteredActivityId, setFilteredActivityId] = useState("");
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Fetch leaderboard data from API
    fetch('http://127.0.0.1:8000/leaderboard')
      .then(response => response.json())
      .then(data => {
        setLeaderboardData(data);
        // Extract activity names and set state
        const activityNames = [...new Set(data.map(entry => entry.activity_name))];
        setActivities(['All-time Leaderboard', ...activityNames]);
      })
      .catch(error => console.error('Error fetching leaderboard data:', error));
  }, []); 

  const handleChange = event => {
    const selectedActivity = event.target.value;
    if (selectedActivity === 'All-time Leaderboard') {
      setFilteredActivityId(null); // Clear filter
    } else {
      const selectedActivityId = leaderboardData.find(entry => entry.activity_name === selectedActivity)?.activity_id;
      setFilteredActivityId(selectedActivityId); // Set filter
    }
  };
  
  return (
    <div className="container">
      <select className="form-select mb-3" onChange={handleChange}>
        {activities.map((activity, index) => (
          <option key={index} value={activity}>{activity}</option>
        ))}
      </select>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Ranking</th>
            <th>Username</th>
            <th>Score</th>
            <th>Game</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData
            .filter(entry => filteredActivityId ? entry.activity_id === filteredActivityId : true)
            .map((entry, index) => (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{entry.username}</td>
                <td>{entry.score}</td>
                <td>{entry.activity_name}</td>
                <td>{new Date(entry.start_date).toLocaleString()}</td>
                <td>{new Date(entry.end_date).toLocaleString()}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
