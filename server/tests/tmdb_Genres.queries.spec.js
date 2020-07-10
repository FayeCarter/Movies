import { createTestClient } from 'apollo-server-testing';
import { ApolloServer, gql } from 'apollo-server';
import { TMDBAPI } from "../datasources/TMDB";
import { resolvers } from '../resolvers';
import { typeDefs } from '../typedefs';
import { getGenrePreReducerStub } from '../fixtures/TMDB_Genres';

const GET_MOVIE_GENRES= gql`
  query getGenres{
    movieGenres {
      id
      genre
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
  it('fetches an array of genres from the TMDB API', async () => {
    const { server, tmdbAPI } = constructTestServer();

    tmdbAPI.get = jest.fn(() => ({
      results: [getGenrePreReducerStub],
    }));

    const { query } = createTestClient(server);

    const response = await query({
      query: GET_MOVIE_GENRES,
      variables: { ids: [28] },
    });

    expect(response).toMatchSnapshot();
  });
});