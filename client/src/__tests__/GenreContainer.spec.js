import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { GenreContainer } from '../containers/GenreContainr';
import { movieGenres } from '../fixtures';
import { GET_MOVIE_GENRES } from '../graphql/get-movie-genres';

beforeEach(() => {
  cleanup();
  jest.resetAllMocks();
});


test('renders the <GenreContainer /> with a genre', async () => {

  const popularGenreMocks = [
    {
      request: {
        query: GET_MOVIE_GENRES ,
      },
      result: {
        data: {
          ... movieGenres
        },
      },
    },
  ];

  const { getByText } = render(
    <MockedProvider mocks={popularGenreMocks} >
      <GenreContainer />
    </ MockedProvider>
  );

  await waitForElement(() => [
    expect(getByText("action")).toBeTruthy(),
  ]);
});
