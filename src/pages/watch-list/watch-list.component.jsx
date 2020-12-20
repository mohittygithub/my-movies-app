import React, { useContext } from "react";
import MovieCard from "../../components/movie-card/movie-card.component";
import { GlobalContext } from "../../context/GlobalState";
import "./watch-list.styles.css";

const WatchList = () => {
  // getting state from GlobalState
  const { watchList } = useContext(GlobalContext);

  return (
    <div className="watch-list">
      <h1 className="page-title">Movie WatchList</h1>
      {watchList.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};
export default WatchList;
