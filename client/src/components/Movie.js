import React from 'react';
import { MovieWrapper, MoviePoster, MovieTitle } from "../styles/MovieStyles";

export const Movie = ({ movie }) => {
  return (
    <MovieWrapper data-testid="movie" >
      <MoviePoster data-testid="movie-image" src={`http://image.tmdb.org/t/p/w185/${ movie.image }`} alt="poster"/>
      <MovieTitle data-testid="movie-title" >{ movie.title }</MovieTitle>
      <div data-testid="movie-about" >{ movie.about }</div>
      <div data-testid="movie-rating" >{ movie.rating }</div>
    </MovieWrapper>
  );
};