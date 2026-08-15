import Movie from "./Movie"
import "./favhero.css"
const FavHero=({favMovies,setFavMovies})=>{
    return(
        <>
         <div className="hero-container">
      <div className="movies-grid">
       {favMovies.length > 0 ? (
            favMovies.map((movie, index) => (
                <Movie
                  key={index}
                  img={movie.img}
                  movieName={movie.movieName}
                  releaseDate={movie.releaseDate}
                  setFavMovies={setFavMovies}
                />
            ))
       ) : (
            <h2 className="nofav">No Favourites Found</h2>
       )}
      </div>
    </div>
        </>
    )
}
export default FavHero