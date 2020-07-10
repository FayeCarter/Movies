import React, { useState } from 'react';
import { MovieWrapper, MoviePoster, MovieTitle, MovieRating } from "../styles/MovieStyles";

export const Movie = ({ movie }) => {
  const [ movieDetails, setMovieDetails ] = useState("");

  const activeMovie = (e) => {
    movieDetails === "" ? setMovieDetails(movie.about) : setMovieDetails("")
  }

  return (
    <MovieWrapper data-testid="movie" onClick={ activeMovie } >
      <MovieTitle data-testid="movie-title" >{ movie.title }</MovieTitle>
      <MoviePoster data-testid="movie-image" src={`http://image.tmdb.org/t/p/w185/${ movie.image }`} alt="poster"/>
      <MovieRating data-testid="movie-rating" >{ movie.rating }</MovieRating>
      <div data-testid="movie-about" >{movieDetails}</div>
    </MovieWrapper>
  );
};