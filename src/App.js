import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

const [movies, setMovies] = useState([]);
const [isLoading, setIsLoading] = useState(false);

  async function fetchMovies() {
    setIsLoading(true);
    const response = await fetch('https://swapi.dev/api/films');
    const data = await response.json();

      const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        };
      });
      setMovies(transformedMovies);
      setIsLoading(false)
    };


  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Oh dear! Found no movies!</p>}
        {isLoading && <p>Beep boop. Loading... Boop...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
