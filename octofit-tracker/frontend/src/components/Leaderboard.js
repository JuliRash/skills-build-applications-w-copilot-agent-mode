import React, { useEffect, useState } from 'react';

const API_URL = 'https://congenial-fiesta-x5xv5jvwv4fpv6g-8000.app.github.dev/api/leaderboard/';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setLeaderboard(data));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Leaderboard</h2>
      <ul className="list-group">
        {leaderboard.map(entry => (
          <li key={entry._id} className="list-group-item">
            User: {entry.user} - Score: {entry.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
