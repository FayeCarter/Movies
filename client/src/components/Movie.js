import React from 'react';

export const Movie = ({ movie }) => {
  return (
    <div data-testid="movie" >
      <div data-testid="movie-title" >{ movie.title }</div>
    </div>
  );
};