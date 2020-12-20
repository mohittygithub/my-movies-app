import React, { useContext } from "react";
import "./watched-list.styles.css";
import { GlobalContext } from "../../context/GlobalState";
import MovieCard from "../../components/movie-card/movie-card.component";

const Watched = () => {
  // getting state from Global State
  const { watched } = useContext(GlobalContext);

  return (
    <div className="watched-list">
      <h1 className="page-title">Watched Movies</h1>
      {watched.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};
export default Watched;
