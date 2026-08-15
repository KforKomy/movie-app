import "./movie.css"
import{toggleFavourites} from "../utils/toggleFavourites"
const Movie=({img,movieName,releaseDate,setFavMovies})=>{
    return(
        <>

        <div className="movie-container">
           <div className="poster">
            <img src={`${img}`} alt="film poster" />
            <button className="fav-btn" onClick={()=>{
               setFavMovies((prev)=>{
                return toggleFavourites(prev,{img,movieName,releaseDate})
               })
            }}>❤︎⁠</button>
           </div>
           <div className="movie-text">
            <h4>{movieName}</h4>
            <h5>{releaseDate}</h5>

           </div>
        </div>
        </>
    )

}
export default Movie;