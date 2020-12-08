import React from "react"
import PropTypes from "prop-types"
import MovieListItem from "./MovieListItem/MovieListItem.js"

const MovieList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(({ id, ...rest }) => (
        <MovieListItem key={id} {...rest} link={id + ""} location={location}/>
      ))}
    </ul>
  )
}
MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}
export default MovieList
