import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_MOVIE_GENRES } from "../graphql/get-movie-genres";

export const GenreContainer = () => {
  const{ data: { movieGenres = [] } = {} } = useQuery(GET_MOVIE_GENRES)
  return (
    <>
      <select data-test-id="genre-container">
        {movieGenres && movieGenres
          .map(genre => <option key={genre.id} >{genre.genre}</option>)}
      </select>
    </>
  );
};
