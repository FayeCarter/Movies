import React, { useState, useEffect } from 'react';
import { MovieWrapper, MoviePoster, MovieTitle, MovieRating } from "../styles/MovieStyles";

export const Movie = ({ movie }) => {
  const [ movieDetails, setMovieDetails ] = useState("");
  const [ movieTitle, setMovieTitle ] = useState( movie.title );

  const getShortTitle = () => {
    if (movieTitle.length > 20 ){
      let titleArray = movieTitle.split(" ");
      let count = 0;
      let shortTitle = ""
      for (let i = 0; count < 18 && i < titleArray.length; i ++){
        if (titleArray[i].length + count < 17 ){
          count += ( titleArray[i].length + 1 )
          shortTitle += ` ${titleArray[i]}`
        }
        setMovieTitle(`${shortTitle} ...`)
      }
    }
  }

  const activeMovie = () => {
    movieDetails === "" ? setMovieDetails(movie.about) : setMovieDetails("");
    movieTitle === movie.title ? getShortTitle() : setMovieTitle(movie.title);
  }

  useEffect(() => {
    getShortTitle()
  }, []);

  return (
    <MovieWrapper data-testid="movie" onClick={ activeMovie } >
      <MovieTitle data-testid="movie-title" >{ movieTitle }</MovieTitle>
      <MoviePoster data-testid="movie-image" src={`http://image.tmdb.org/t/p/w185/${ movie.image }`} alt="poster"/>
      <MovieRating data-testid="movie-rating" >{ movie.rating }</MovieRating>
      <div data-testid="movie-about" >{movieDetails}</div>
    </MovieWrapper>
  );
};