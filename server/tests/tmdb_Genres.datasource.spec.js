import { TMDBAPI } from "../datasources/TMDB";
import { 
  emptyReducerReturnValue, 
  getGenrePreReducerStub, 
  getGenrePostReducerStub 
} from '../fixtures/TMDB_Genres';

const datasource = new TMDBAPI();
datasource.get = jest.fn();

describe("[TMDBAPI.genreReducer]", () => {
  it("transforms using the genre reducer", () => {
    expect(datasource.genreReducer(getGenrePreReducerStub)).toEqual(
      getGenrePostReducerStub
    )
  });

  it("doesn't transform using the genre reducer if no genre passed to it", () => {
    expect(datasource.genreReducer()).toEqual(emptyReducerReturnValue)
  });
});
