import Home from "./pages/Home";
import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const SearchResult = lazy(() => import("./pages/SearchResult"));
const Favourites = lazy(() => import("./pages/Favourites"));
const MovieDetails = lazy(() => import("./pages/MovieDetails"));

const App = () => {
  const [favMovies, setFavMovies] = useState(() => {
    const saved = localStorage.getItem("favourites");
    return saved ? JSON.parse(saved) : [];
  });
  const [searchResult, setSearchResult] = useState([]);

  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                favMovies={favMovies}
                setFavMovies={setFavMovies}
                setSearchResult={setSearchResult}
              />
            }
          />
          <Route
            path="/favourites"
            element={
              <Favourites favMovies={favMovies} setFavMovies={setFavMovies} />
            }
          />
          <Route
            path="/Search"
            element={
              <SearchResult
                favMovies={favMovies}
                searchResult={searchResult}
                setFavMovies={setFavMovies}
              />
            }
          />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
