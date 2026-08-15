import Home from "./pages/Home"
import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const SearchResult =lazy(()=>import("./pages/SearchResult"))
const Favourites = lazy(() => import("./pages/Favourites"));
const App=()=>{
  const [favMovies,setFavMovies]=useState(() => {
    const saved = localStorage.getItem("favourites");
    return saved ? JSON.parse(saved) : [];
  });
  const [searchResult,setSearchResult]=useState([]);
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home setFavMovies={setFavMovies} setSearchResult={setSearchResult} />}  />
          <Route path="/favourites" element={<Favourites favMovies={favMovies} setFavMovies={setFavMovies} />}   />
          <Route path="/Search" element={<SearchResult searchResult={searchResult} setFavMovies={setFavMovies}/>    }/>

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;