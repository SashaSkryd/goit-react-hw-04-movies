import React, { Component, lazy } from "react"
import { fetchMovie } from "../../services/base-http.services.js"
import { Link, Route, Switch } from "react-router-dom"
import MoviePreview from "../../components/MoviePreview/MoviePreview.js"
import Button from "../../components/Button/Button.js"

export default class MovieDetailsView extends Component {
  state = {
    id: "",
    genres: [],
    release_date: "",
    overview: "",
    vote_average: 0,
    poster_path: "",
    title: "",
    original_title: "",
    name: "",
  }

  componentDidMount() {
    const { movieId } = this.props.match.params

    fetchMovie(movieId).then((movie) => {
      this.setState({ ...movie })
    })
  }

  handleGoBack = () => {
    const { location, history } = this.props

    if (!location.state) {
      history.push("/")
      return
    }
    history.goBack()
  }

  render() {
    const { id, name, original_title, title, release_date, vote_average, overview, poster_path, genres } = this.state
    const { match } = this.props

    return (
      <>
        <Button onClick={this.handleGoBack} caption="Go back" />

        <MoviePreview
          name={name}
          original_title={original_title}
          title={title}
          release_date={release_date}
          vote_average={vote_average}
          overview={overview}
          poster_path={poster_path}
          genres={genres}
        />
        <p>Additional information</p>
        <ul key={id}>
          <li>
            <Link to={`${match.url}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`${match.url}/reviews`}>Reviews</Link>
          </li>
        </ul>
        <Switch>
          <Route path={`${match.path}/cast`} exact component={lazy(() => import("../../components/Cast/Cast"))} />
          <Route path={`${match.path}/reviews`} exact component={lazy(() => import("../../components/Reviews/Reviews"))} />
        </Switch>
      </>
    )
  }
}
