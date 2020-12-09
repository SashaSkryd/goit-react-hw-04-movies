import React, { Component, lazy } from "react"
import { fetchMovie } from "../../services/base-http.services.js"
import { Link, Route, Switch } from "react-router-dom"
import MoviePreview from "../../components/MoviePreview/MoviePreview.js"
import Button from "../../components/Button/Button.js"
import Spinner from "../../components/Spinner/Spinner.js"

export default class MovieDetailsView extends Component {
  state = {
    movie: null,
    isLoad: false,
    isError: null,
  }

  componentDidMount() {
    const { movieId } = this.props.match.params
    this.setState({ isLoad: true })
    fetchMovie(movieId)
      .then((movie) => {
        this.setState({ movie: movie })
      })
      .catch((error) => this.setState({ isError: true }))
      .finally(this.setState({ isLoad: false }))
  }

  handleGoBack = () => {
    const { location, history } = this.props
    if (location.state) {
      history.push(location.state.from)
      return
    }
    history.push("/")
  }

  render() {
    const { movie, isLoad, isError } = this.state

    const { match } = this.props


    return (
      <>
        <Button onClick={this.handleGoBack} caption="Go back" />
        {isLoad ? <Spinner /> : !isError && movie ?
          (<>
        <MoviePreview
          name={movie.name}
          original_title={movie.original_title}
          title={movie.title}
          release_date={movie.release_date}
          vote_average={movie.vote_average}
          overview={movie.overview}
          poster_path={movie.poster_path}
          genres={movie.genres ? movie.genres : []}
        />
        <p>Additional information</p>
        <ul key={movie.id}>
          <li>
            <Link
              to={{
                pathname: `${match.url}/cast`,
                state:
                  this.props.location.state === undefined
                    ? undefined
                    : { from: this.props.location && this.props.location.state.from },
              }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `${match.url}/reviews`,
                state:
                  this.props.location.state === undefined
                    ? undefined
                    : { from: this.props.location &&  this.props.location.state.from},
              }}
            >
              Reviews
            </Link>
          </li>
        </ul>
        <Switch>
          <Route path={`${match.path}/cast` } exact component={lazy(() => import("../../components/Cast/Cast"))}/>
          <Route path={ `${match.path}/reviews` } exact component={lazy(() => import("../../components/Reviews/Reviews"))} />
        </Switch>
      </>) : (<p>NOT FOUND THIS PAGE</p>)}
      </>
    )
  }
}
