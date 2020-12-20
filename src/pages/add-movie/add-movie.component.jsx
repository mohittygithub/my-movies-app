import React, { useState } from "react";
import FormInput from "../../components/form-input/form-input.component";
import MovieCard from "../../components/movie-card/movie-card.component";
import "./add-movie.styles.css";

const AddMovie = () => {
  const [query, setQuery] = useState([]);
  const [movies, setMovies] = useState([]);

  // handleChange method
  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);

    const API_KEY = "eacb3b076966db59ee7c7594bc09d5a1";
    // fetch method to get movies data
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setMovies(data.results);
          console.log(movies);
        } else {
          setMovies([]);
        }
      });
  };
  return (
    <div className="add-movie">
      <div className="page-top">
        <h1>Add Movies to Watch List</h1>
        <FormInput
          type="text"
          placeholder="search movies here..."
          onChange={handleChange}
        />
      </div>
      <div className="movie-list">
        <ul>
          {movies.length > 0 &&
            movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} noRemoveButton />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default AddMovie;
