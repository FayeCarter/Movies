import gql from 'graphql-tag';

export const GET_POPULAR_MOVIES = gql`
  query getPopularMoviess {
    popularMovies {
      id
      title
      image
      about
      genre_ids
      rating
    }
  }
`;