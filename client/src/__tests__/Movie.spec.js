import React from 'react';
import { render, cleanup, fireEvent, waitForElement } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { Movie } from '../components/Movie';
import { popularMovies } from '../fixtures';

beforeEach(() => {
  cleanup();
  jest.resetAllMocks();
});

test("renders <Movie /> with a movie", async () => {
  const movie = popularMovies.popularMovies[0]

  const { queryByTestId } = render(
    <Movie key={movie.id} movie={movie} />
  );
  
  await waitForElement(() => [
    expect(queryByTestId("movie-title").textContent).toEqual(" Master and The ..."),
    expect(queryByTestId("movie-rating").textContent).toEqual("7"),
    expect(queryByTestId("movie-image").getAttribute("src")).toEqual("http://image.tmdb.org/t/p/w185//s1cVTQEZYn4nSjZLnFbzLP0j8y2.jpg"),
  ]);
});

test("onClick renders <Movie /> with a movie details", async() => {
  const movie = popularMovies.popularMovies[0]

  const { queryByTestId } = render(
    <Movie key={movie.id} movie={movie} />
  );

  fireEvent.click(queryByTestId("movie-title"));

  await waitForElement(() => [
    expect(queryByTestId("movie-about").textContent).toContain("After an abrupt and violent encounter with a French warship inflicts severe damage upon his ship, a captain of the British"),
  ]);
});