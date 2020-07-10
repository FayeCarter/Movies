import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Movie } from "../components/Movie";
import { GenreContainer } from "../containers/GenreContainr";
import { GET_POPULAR_MOVIES } from "../graphql/get-popular-movies";
import { GlobalStyle, MoviesContainerWrapper } from "../styles/MoviesContainerStyles";

export const MoviesContainer = () => {
  const{ data: { popularMovies = [] } = {} } = useQuery(GET_POPULAR_MOVIES)
  return (
    <>
      <GlobalStyle />
      <h1>Movies</h1>
      <GenreContainer />
      <MoviesContainerWrapper data-test-id="movies-container">
        {popularMovies && popularMovies
          .map(movie => <Movie key={movie.id} movie={movie} />)}
      </MoviesContainerWrapper>
    </>
  );
};
