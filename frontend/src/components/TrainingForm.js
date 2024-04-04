import React from 'react';

function TrainingForm({ activityId, onActivityComplete }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Hardcoded user ID
    fetch('http://127.0.0.1:8000/perform_activity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ activityId }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle response data as needed (e.g., update state)
        if (onActivityComplete) {
          onActivityComplete(data);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <button type="submit" className="btn btn-primary">Do Training</button>
    </form>
  );
}

export default TrainingForm;
