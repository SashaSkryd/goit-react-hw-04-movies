import React, { Component } from "react"
import { fetchPost } from "../../services/base-http.services.js"
import MovieList from "../../components/MovieList/MovieList.js"

export default class HomeView extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    fetchPost().then((data) => {
      this.setState({ data: data.results })
    })
  }
  render() {
    return (
      <>
        <h1>Treanding today</h1>
        <MovieList movies={this.state.data} location={this.props.location}/>
      </>
    )
  }
}
