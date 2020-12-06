import React, {Component} from 'react'
import queryString from 'query-string'
import {fetchQuery} from '../../services/base-http.services.js'
import MovieList from '../../components/MovieList/MovieList.js'


export default class MovieView extends Component {
 state = {
      results: [],
      value: "",
    };

    componentDidMount() {
    const { query } = queryString.parse(this.props.location.search);
    if (query) {
      this.searchMovie(query);
    }
  }

    componentDidUpdate(prevProps, prevState) {
        
    const { query: oldQuery } = queryString.parse(prevProps.location.search);
    const {query: newQuery} = queryString.parse(this.props.location.search);
      if (oldQuery !== newQuery) {
        this.setState({resulst: []})
      this.searchMovie(newQuery);
    }
  }

    searchMovie(value) {
    fetchQuery(value)
        .then(data => {
            console.log(data);
        this.setState({results: data.results})
    })
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.value) {
      return;
    }
 
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${this.state.value}`,
    });
 
    this.setState({value: ''})

    // this.searchMovie(this.state.value)
  };

  render() {
    console.log(this.state);
    const { value,results } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            name="value"
            onChange={this.handleChange}
            value={value}
            autoFocus
          />
          <button type="submit">Search</button>
            </form>
        <MovieList movies={results}/>
      </>
    );
  }
}