import React, { useState } from "react";
import "../components/style.css";



const MovieList = ({ movie }) => {
  return (
    <div>
      {
        <table border="1">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {movie.map((movie, idx) => (
              <tr key={idx}>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  );
};

export default MovieList;
