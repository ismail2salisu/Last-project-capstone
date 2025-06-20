import React, { useEffect, useState } from 'react';
import API from '../api/api';

export default function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  const getWatchlist = async () => {
    const res = await API.get('/user/watchlist');
    setWatchlist(res.data);
  };

  const removeFromWatchlist = async (id) => {
    await API.delete(`/user/watchlist/${id}`);
    getWatchlist(); // refresh list
  };

  useEffect(() => {
    getWatchlist();
  }, []);

  return (
    <div>
      <h2>Your Watchlist</h2>
      <ul>
        {watchlist.map(movie => (
          <li key={movie.id}>
            {movie.title}
            <button onClick={() => removeFromWatchlist(movie.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
