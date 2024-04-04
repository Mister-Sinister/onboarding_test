import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TrainingForm from './TrainingForm';

function ActivityDetails() {
  const { id } = useParams();
  const [activity, setActivity] = useState(null);

  const [activityData, setActivityData] = useState({"message": "", "score": ""});

  const handleActivityComplete = (data) => {
    setActivityData(data);
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/activity_description/${id}`)
      .then(response => response.json())
      .then(data => setActivity(data))
      .catch(error => console.error('Error fetching activity:', error));
  }, [id]);

  if (!activity) {
    return <div>No activity data available</div>;
  }

  
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h2>{activity.name}</h2>
          <p><strong>Description: </strong>{activity.description}</p>
          <p><strong>Start Date:</strong> {new Date(activity.start_date).toLocaleDateString()}</p>
          <p><strong>End Date:</strong> {new Date(activity.end_date).toLocaleDateString()}</p>
          <TrainingForm activityId={activity.id} onActivityComplete={handleActivityComplete} />
        </div>
        <div className="col">
          <h2 className='text-primary'>Score: {activityData.score}</h2>
          </div>
      </div>
      <p>{activityData.message}</p>
    </div>
  );
}

export default ActivityDetails;
