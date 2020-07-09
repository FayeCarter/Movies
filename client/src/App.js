import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { MoviesContainer } from "./containers/MoviesContainer";

export default function App () {
  const client = new ApolloClient({
    uri: "http://localhost:4000"
  });

  return (
    <ApolloProvider client={client}>
      <MoviesContainer />
    </ApolloProvider>
  )
};
