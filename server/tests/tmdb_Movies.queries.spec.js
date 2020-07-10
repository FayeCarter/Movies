import { createTestClient } from 'apollo-server-testing';
import { ApolloServer, gql } from 'apollo-server';
import { TMDBAPI } from "../datasources/TMDB";
import { resolvers } from '../resolvers';
import { typeDefs } from '../typedefs';
import { getMoviePreReducerStub } from '../fixtures/TMDB_Movies';

const GET_POPULAR_MOVIES= gql`
  query getPopularMovies {
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

const constructTestServer = () => {
  const tmdbAPI = new TMDBAPI();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      tmdb: tmdbAPI
    })
  });

  return { server, tmdbAPI };
}

describe('[Queries.TMDBAPI]', () => {
  it('fetches an array of articles from the TMDB API', async () => {
    const { server, tmdbAPI } = constructTestServer();

    tmdbAPI.get = jest.fn(() => ({
      results: [getMoviePreReducerStub],
    }));

    const { query } = createTestClient(server);

    const response = await query({
      query: GET_POPULAR_MOVIES,
      variables: { ids: [8619] },
    });

    expect(response).toMatchSnapshot();
  });
});