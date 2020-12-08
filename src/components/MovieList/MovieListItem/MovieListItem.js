import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const MovieListItem = (props) => {
  const { link, title, name, original_title, location } = props

  return (
    <li>
      <Link to={{ pathname: `movie/${link}`, state: { from: location} }}>{title || name || original_title}</Link>
    </li>
  )
}

MovieListItem.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string,
  name: PropTypes.string,
  original_title: PropTypes.string,
}

export default MovieListItem
