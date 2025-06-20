import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Favorites() {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:5000/api/user/profile', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setFavs(res.data.favorites || []));
  }, []);

  return (
    <div>
      <h3>Your Favorites</h3>
      <ul>{favs.map((movie, i) => <li key={i}>{movie.title}</li>)}</ul>
    </div>
  );
}
