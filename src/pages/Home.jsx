import Header from "../components/Header";
import Search from "../components/Search";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { fetchMovies } from "../utils/fetchMovies";
import { scrollTop } from "../utils/scrollTop";
import { useState, useEffect } from "react";
const Home = ({ favMovies, setFavMovies, setSearchResult }) => {
  const API_KEY = import.meta.env.VITE_APP_ID;
  const BASE_URL = "https://api.themoviedb.org/3";
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies(setMovies, BASE_URL, API_KEY, page);
    scrollTop();
  }, [page]);
  return (
    <>
      <Header setPage={setPage} />
      <Search page={page} setSearchResult={setSearchResult} />
      <Hero favMovies={favMovies} movies={movies} setFavMovies={setFavMovies} />
      <Footer setPage={setPage} page={page} />
    </>
  );
};
export default Home;
