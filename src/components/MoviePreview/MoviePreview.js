import React from "react"
import PropTypes from "prop-types"

import style from "./MoviePreview.module.css"

const MoviePreview = ({ name, original_title, title, release_date, vote_average, overview, poster_path, genres }) => {
  return (
    <div className={style.card}>
      <div className={style.cardImage}>
        <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title}></img>
      </div>
      <div>
        <h1>
          {title || name || original_title} ({parseInt(release_date)})
        </h1>
        <p>User source {parseFloat(vote_average) * 10}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genras</h2>
        <ul>
          {genres.map((genre) => {
            return <li key={genre.id}>{genre.name}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default MoviePreview;

MoviePreview.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  original_title: PropTypes.string,
  release_date: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  poster_path: PropTypes.string.isRequired,
}
