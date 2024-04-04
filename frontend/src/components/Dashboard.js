import React, { useState, useEffect } from 'react';
function Dashboard({ userData }) {
    // const { user_id } = useParams();

    // console.log(user_id);

  const [userLogs, setUserLogs] = useState(null);

  useEffect(() => {
    // Fetch user activity logs from API
    fetch(`http://127.0.0.1:8000/dashboard/${userData.user_id}`)
      .then(response => response.json())
      .then(data => setUserLogs(data))
      .catch(error => console.error('Error fetching user activity logs:', error));
  }, [userData.user_id]); // Fetch data whenever userId changes

  if (!userLogs) {
    return <div>No dashboard data available</div>;
  }

  return (
    <div className="container mt-5">
      <h2>User Dashboard</h2>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Activity Name</th>
            <th>Score</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {userLogs.map((log, index) => (
            <tr key={index}>
              <td>{log.activity_name}</td>
              <td>{log.score}</td>
              <td>{new Date(log.start_date).toLocaleDateString()}</td>
              <td>{new Date(log.end_date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
