import Header from "../components/Header"
import ResultHero from "../components/ResultHero"
const SearchResult=({searchResult,setFavMovies})=>{
    return(
        <>
        <Header/>
        <ResultHero searchResult={searchResult} setFavMovies={setFavMovies}/>




        </>
    )
}
export default SearchResult