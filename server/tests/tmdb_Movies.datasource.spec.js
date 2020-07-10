import { TMDBAPI } from "../datasources/TMDB";
import { 
  emptyReducerReturnValue, 
  getMoviePreReducerStub, 
  getMoviePostReducerStub 
} from '../fixtures/TMDB_Movies';

const datasource = new TMDBAPI();
datasource.get = jest.fn();

describe("[TMDBAPI.movieReducer]", () => {
  it("transforms using the movie reducer", () => {
    expect(datasource.movieReducer(getMoviePreReducerStub)).toEqual(
      getMoviePostReducerStub
    )
  });

  it("doesn't transform using the movie reducer if no movie passed to it", () => {
    expect(datasource.movieReducer()).toEqual(emptyReducerReturnValue)
  });
});
