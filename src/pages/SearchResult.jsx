import Header from "../components/Header";
import ResultHero from "../components/ResultHero";
import Search from "../components/Search"
const SearchResult = ({ favMovies, searchResult, setFavMovies,page="",setSearchResult }) => {
  return (
    <>
      <Header />
      <Search page={page} setSearchResult={setSearchResult} />
      <ResultHero
        favMovies={favMovies}
        searchResult={searchResult}
        setFavMovies={setFavMovies}
      />
    </>
  );
};
export default SearchResult;
