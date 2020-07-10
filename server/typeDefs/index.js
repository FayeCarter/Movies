import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    popularMovies: [Movie!]!
    movieGenres: [Genre!]!
  }

  type Movie {
    id: ID
    title: String
    image: String
    about: String
    genre_ids: [Int]
    rating: String
  }

  type Genre {
    id: ID
    genre: String
  }
`;
