import React, { useEffect, useState } from 'react';
import API from '../api/api';

export default function RatingsHistory() {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    API.get('/user/ratings').then(res => setRatings(res.data));
  }, []);

  return (
    <div>
      <h2>Your Ratings</h2>
      <ul>
        {ratings.map(r => (
          <li key={r.movieId}>
            <strong>{r.title}</strong>: {r.rating} ⭐ – {r.review}
          </li>
        ))}
      </ul>
    </div>
  );
}
