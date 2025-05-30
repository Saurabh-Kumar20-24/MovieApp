import React, { useState } from 'react'
const genres = ["All", "Drama", "Crime", "Action", "Fantasy", "Western", "Science Fiction", "Thriller", "War", "Animation", ];
const movies = [
  { title: "The Shawshank Redemption", genre: "Drama", year: 1994 },
  { title: "The Godfather", genre: "Crime", year: 1972 },
  { title: "The Dark Knight", genre: "Action", year: 2008 },
  { title: "12 Angry Men", genre: "Drama", year: 1957 },
  { title: "Schindlers List", genre: "Drama", year: 1993 },
  {
    title: "The Lord of the Rings: The Return of the King",
    genre: "Fantasy",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", genre: "Western", year: 1966 },
  { title: "Forrest Gump", genre: "Drama", year: 1994 },
  { title: "Inception", genre: "Science Fiction", year: 2010 },
  { title: "The Matrix", genre: "Science Fiction", year: 1999 },
  { title: "The Silence of the Lambs", genre: "Thriller", year: 1991 },
  { title: "Saving Private Ryan", genre: "War", year: 1998 },
  { title: "Jurassic Park", genre: "Science Fiction", year: 1993 },
  { title: "Terminator 2: Judgment Day", genre: "Science Fiction", year: 1991 },
  { title: "The Lion King", genre: "Animation", year: 1994 },
];
const GenreFilter = ({setMovie}) => {
    const handleClick = (val) =>{
        if(val=="All"){
            setMovie(movies)
        }else{
            const filterMovies=movies.filter((movie)=> movie.genre===val)
             setMovie(filterMovies)
        }
    }
    
  return (
    <div className='filter-section'>
      <h2>Filter by Genre</h2>
      <div className='genre-container'>
         <div className='btn'>
        {genres.map((val,idx)=>(
            <button onClick={()=>handleClick(val)} key={idx}>{val}</button>
        ))}
        </div>
      </div>
    </div>
  )
}

export default GenreFilter
