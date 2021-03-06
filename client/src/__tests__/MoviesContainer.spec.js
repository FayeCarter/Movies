import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { MoviesContainer } from '../containers/MoviesContainer';
import { popularMovies } from '../fixtures';
import { GET_POPULAR_MOVIES } from '../graphql/get-popular-movies';

beforeEach(() => {
  cleanup();
  jest.resetAllMocks();
});


test('renders the <ArticlesContainer /> with an article', async () => {

  const popularMoviesMocks = [
    {
      request: {
        query: GET_POPULAR_MOVIES,
      },
      result: {
        data: {
          ... popularMovies,
        },
      },
    },
  ];

  const { getByText, queryByTestId } = render(
    <MockedProvider mocks={popularMoviesMocks} >
      <MoviesContainer />
    </ MockedProvider>
  );

  await waitForElement(() => [
    expect(getByText("Movies")).toBeTruthy(),
    expect(queryByTestId("movie-title").textContent).toEqual(" Master and The ..."),
    expect(queryByTestId("movie-rating").textContent).toEqual("7"),
    expect(queryByTestId("movie-image").getAttribute("src")).toEqual("http://image.tmdb.org/t/p/w185//s1cVTQEZYn4nSjZLnFbzLP0j8y2.jpg"),
  ]);
});
