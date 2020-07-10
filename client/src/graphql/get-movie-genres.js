import gql from 'graphql-tag';

export const GET_MOVIE_GENRES = gql`
  query getMovieGenres {
    movieGenres {
      id
      genre
    }
  }
`;