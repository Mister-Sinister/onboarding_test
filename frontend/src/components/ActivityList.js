import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ActivityList = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Fetch activities from the backend when the component mounts
    fetch('http://127.0.0.1:8000/activity_list') 
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <ol className="list-group list-group-numbered">
      {activities.map(activity => (
        <li key={activity.id} className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              <Link to={`/activities/${activity.id}`} className="text-decoration-none">{activity.name}</Link>
            </div>
            <span>{activity.description}</span>
          </div>
          <span className={`badge ${activity.is_active ? 'bg-primary' : 'bg-secondary'} rounded-pill`}>{activity.is_active ? 'Active' : 'Inactive'}</span>
        </li>
      ))}
    </ol>
  );
};

export default ActivityList;
