import React, { Component } from 'react';
// import { getMovies } from '../services/fakeMovieService';
import TableHead from './tableHead';
import TableRow from './tableRow';
class Movie extends Component {
  // state = {
  //   movies: getMovies()
  // };

  render() {
    // const fetchMovie = this.state.movies;
    return (
      <table className='table'>
        <TableHead />
        <TableRow />
      </table>
    );
  }
}

export default Movie;
