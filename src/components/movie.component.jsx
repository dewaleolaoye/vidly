import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import TableHead from './tableHead';

class Movie extends Component {
  state = {
    movies: getMovies()
  };

  render() {
    // const fetchMovie = this.state.movies;
    return (
      <table className='table'>
        <TableHead />
      </table>
    );
  }
}

export default Movie;
