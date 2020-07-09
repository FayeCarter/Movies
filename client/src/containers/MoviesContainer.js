import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Movie } from "../components/Movie";
import { GET_POPULAR_MOVIES } from "../graphql/get-popular-movies";

export const MoviesContainer = () => {
  const{ data: { popularMovies = [] } = {} } = useQuery(GET_POPULAR_MOVIES)
  return (
    <>
      <div data-test-id="movies-container">
        <h1>Movies</h1>
        {popularMovies && popularMovies
          .map(movie => <Movie key={movie.id} movie={movie} />)}
      </div>
    </>
  );
};
