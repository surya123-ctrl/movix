import React, { useEffect } from "react";
import movieApi from "../../common/apis/movieApi";
import { movieApiKey } from "../../common/apis/movieApiKey";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/moviesSlice";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const movieText = "Fight";
    const fetchMovies = async () => {
      try {
        const response = await movieApi.get(
          `?apiKey=${movieApiKey}&s=${movieText}&type=movie`
        );
        console.log(response);
        dispatch(addMovies(response.data));
      } catch (error) {
        console.log("Error getting movies: ", error);
      }
    };
    fetchMovies();
  }, []);
  return (
    <>
      <div className="banner-image"></div>
      <MovieListing />
    </>
  );
};

export default Home;
