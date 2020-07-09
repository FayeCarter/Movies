import React from 'react';

export const Movie = ({ movie }) => {
  return (
    <div data-testid="movie" >
      <div data-testid="movie-title" >{ movie.title }</div>
      <div data-testid="movie-about" >{ movie.about }</div>
      <div data-testid="movie-rating" >{ movie.rating }</div>
    </div>
  );
};