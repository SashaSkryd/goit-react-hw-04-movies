import React, { Component } from "react"
import { fetchReviews } from "../../services/base-http.services"

export default class Reviews extends Component {
  state = {
    content: [],
  }
  componentDidMount() {
    const { movieId } = this.props.match.params

    fetchReviews(movieId).then((data) => {
      this.setState({ content: data.results })
    })
  }
  render() {
    return (
      <>
        <ul>
          {this.state.content.length > 0 ? (
            this.state.content.map((dir) => {
              return (
                <li key={dir.id}>
                  <h2>Author: {dir.author}</h2>
                  <p>{dir.content}</p>
                </li>
              )
            })
          ) : (
            <p>We don't have any reviews for this movie</p>
          )}
        </ul>
      </>
    )
  }
}
