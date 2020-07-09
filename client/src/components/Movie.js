import React from 'react';

export const Movie = ({ movie }) => {
  return (
    <div data-testid="movie" >
      <img data-testid="movie-image" src={`http://image.tmdb.org/t/p/w185/${ movie.image }`} alt="poster"/>
      <div data-testid="movie-title" >{ movie.title }</div>
      <div data-testid="movie-about" >{ movie.about }</div>
      <div data-testid="movie-rating" >{ movie.rating }</div>
    </div>
  );
};