import React from 'react';
import { MovieWrapper, MoviePoster, MovieTitle, MovieRating } from "../styles/MovieStyles";

export const Movie = ({ movie }) => {
  return (
    <MovieWrapper data-testid="movie" >
      <MovieTitle data-testid="movie-title" >{ movie.title }</MovieTitle>
      <MoviePoster data-testid="movie-image" src={`http://image.tmdb.org/t/p/w185/${ movie.image }`} alt="poster"/>
      <div data-testid="movie-about" >{ movie.about }</div>
      <MovieRating data-testid="movie-rating" >{ movie.rating }</MovieRating>
    </MovieWrapper>
  );
};