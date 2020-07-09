import { RESTDataSource } from 'apollo-datasource-rest';
require("dotenv").config();

export class TMDBAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.themoviedb.org/3/";
    this.authKey = process.env.TMDB_AUTH;
  }

  movieReducer({ id, title, poster_path, overview, genre_ids, vote_average } = {}) {
    return {
      id,
      title,
      image: poster_path,
      about: overview,
      genre_ids,
      rating: vote_average,
    }
  }

  async getPopularMovies() {
    const result = await this.get(`movie/popular?page={0}&api_key=${this.authKey}`);
    return result?.results?.map(movie => this.movieReducer(movie));
  }

}

