import React, { useState } from 'react';
import API from '../api/api';

export default function RatingForm({ movieId }) {
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/user/rate', {
      movieId,
      rating,
      review,
    });
    alert('Rating submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Rate this movie</h3>
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n} Star</option>)}
      </select>
      <br />
      <textarea
        placeholder="Write a short review..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
