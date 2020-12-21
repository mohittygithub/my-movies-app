import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import FormInput from '../form-input/form-input.component'
import './movie-card.styles.css'

const MovieCard = ({ movie, ...otherProps }) => {
  // getting actions from GlobalState
  const {
    addToWatchList,
    removeFromWatchList,
    addToWatched,
    removeFromWatched,
    watchList,
    watched,
  } = useContext(GlobalContext)

  // checking if lists have a movie already
  let storedMovie = watchList.find((object) => object.id === movie.id)
  let watchedMovie = watched.find((object) => object.id === movie.id)

  const [poster, setPoster] = useState('')

  // disabling the add movie button
  const disableAddMovieButton = storedMovie ? true : watchedMovie ? true : false

  const disableWatchedMovieButton = watchedMovie ? true : false
  const handleClick = () => {
    addToWatchList(movie)
  }

  return (
    <div className='movie-card'>
      {movie.poster_path ? (
        <img
          className='card-image'
          // https://cors-anywhere.herokuapp.com/
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.title} Poster`}
        />
      ) : (
        <div className='filler-poster' />
      )}

      <div className='movie-details'>
        <h2>{movie.title}</h2>
        {movie.release_date ? <p>{movie.release_date}</p> : <p>NA</p>}
        <FormInput
          type='button'
          value='Add To WatchList'
          disabled={disableAddMovieButton}
          onClick={
            handleClick
            // addToWatchList(movie);
          }
        />
        <FormInput
          type='button'
          value='Add To Watched'
          disabled={disableWatchedMovieButton}
          onClick={() => {
            addToWatched(movie)
            removeFromWatchList(movie.id)
          }}
        />
        {!otherProps.noRemoveButton ? (
          <FormInput
            type='button'
            value='Remove'
            onClick={() => {
              removeFromWatched(movie.id)
              removeFromWatchList(movie.id)
            }}
          />
        ) : null}
      </div>
    </div>
  )
}
export default MovieCard
