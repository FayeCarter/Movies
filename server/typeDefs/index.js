import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {

  }

  type Movie {
    id: ID!
    title: String
  }
`;
