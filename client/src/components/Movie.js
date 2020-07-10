import React from 'react';
import { MovieWrapper} from "../styles/MovieStyles";

export const Movie = ({ movie }) => {
  return (
    <MovieWrapper data-testid="movie" >
      <img data-testid="movie-image" src={`http://image.tmdb.org/t/p/w185/${ movie.image }`} alt="poster"/>
      <div data-testid="movie-title" >{ movie.title }</div>
      <div data-testid="movie-about" >{ movie.about }</div>
      <div data-testid="movie-rating" >{ movie.rating }</div>
    </MovieWrapper>
  );
};