import Header from "../components/Header";
import ResultHero from "../components/ResultHero";
const SearchResult = ({ favMovies, searchResult, setFavMovies }) => {
  return (
    <>
      <Header />
      <ResultHero
        favMovies={favMovies}
        searchResult={searchResult}
        setFavMovies={setFavMovies}
      />
    </>
  );
};
export default SearchResult;
