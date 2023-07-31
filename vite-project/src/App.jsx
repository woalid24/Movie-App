import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import { useState } from "react";

const apiUrl = "https://omdbapi.com?apikey=7d10ff32";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTearm, setSearchTearm] = useState(" ");

  const searchMovies = async (title) => {
    const respose = await fetch(`${apiUrl}&s=${title}`);
    const data = await respose.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Batman");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="search for a movie"
          value={searchTearm}
          onChange={(e) => setSearchTearm(e.target.value)}
        />
        <img src="https://icons8.com/icon/44045/search" alt="search" onClick={() => searchMovies(searchTearm)} />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie,index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
