import React, { useEffect, useState } from 'react';

const API_URL = 'https://congenial-fiesta-x5xv5jvwv4fpv6g-8000.app.github.dev/api/activities/';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setActivities(data));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Activities</h2>
      <ul className="list-group">
        {activities.map(activity => (
          <li key={activity._id} className="list-group-item">
            {activity.activity_type} - {activity.duration}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Activities;
