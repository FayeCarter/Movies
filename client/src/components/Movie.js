import React, { useState, useEffect } from 'react';
import { MovieWrapper, MoviePoster, MovieTitle, MovieDetails, MovieInfo } from "../styles/MovieStyles";

export const Movie = ({ movie }) => {
  const [active, setActive] = useState(false);
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
    active ? setActive(false) : setActive(true);
    movieDetails === "" ? setMovieDetails(movie.about) : setMovieDetails("");
    movieTitle === movie.title ? getShortTitle() : setMovieTitle(movie.title);
  }

  useEffect(() => {
    getShortTitle()
  }, []);

  return (
    <MovieWrapper data-testid="movie" active={active} onClick={ activeMovie } >
      <MovieTitle data-testid="movie-title" >{ movieTitle }</MovieTitle>
      <div>
        <MoviePoster data-testid="movie-image" src={`http://image.tmdb.org/t/p/w185/${ movie.image }`} alt="poster"/>
        <MovieInfo active={active} >
          <div data-testid="movie-about" >{movieDetails}</div>
          <div data-testid="movie-rating">{ movie.rating }</div>
        </ MovieInfo>
      </ div>
    </MovieWrapper>
  );
};