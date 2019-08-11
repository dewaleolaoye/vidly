// import React, { Component } from 'react';
// import { getMovies } from '../services/fakeMovieService';

// class Rows extends Component {
//   state = {
//     movies: getMovies()
//   };

//   render() {
//     const fetchMovie = this.state.movies;
//     return (
//       <React.Fragment>
//         {fetchMovie.map(movie => (
//           <tbody key={movie._id}>
//             <tr>
//               <td>{movie.title}</td>
//               <td>{movie.genre.name}</td>
//               <td>{movie.numberInStock}</td>
//               <td>{movie.dailyRentalRate}</td>
//               <td>
//                 <button className='btn bg-danger' style={{ color: '#fff' }}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           </tbody>
//         ))}
//       </React.Fragment>
//     );
//   }
// }

// export default Rows;
