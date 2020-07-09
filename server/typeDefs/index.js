import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    popularMovies: [Movie!]!
  }

  type Movie {
    id: ID
    title: String
    image: String
    about: String
    genre_ids: [Int]
    rating: String
  }
`;
