import React, { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const search = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=YOUR_TMDB_KEY&query=${query}`);
    setMovies(res.data.results);
  };

  return (
    <div>
      <input placeholder="Search movie..." onChange={e => setQuery(e.target.value)} />
      <button onClick={search}>Search</button>
      <ul>
        {movies.map(movie => <li key={movie.id}>{movie.title}</li>)}
      </ul>
    </div>
  );
}
