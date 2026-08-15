import Header from "../components/Header"
import FavHero from "../components/FavHero"
const Favourites=({favMovies,setFavMovies})=>{
    
    return(
        <>
        <Header/>
        <FavHero favMovies={favMovies} setFavMovies={setFavMovies}/>
        
        </>
    )

}
export default  Favourites