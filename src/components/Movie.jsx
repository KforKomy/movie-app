import "./movie.css"
const Movie=({img,movieName,releaseDate})=>{
    return(
        <>

        <div className="movie-container">
           <div className="poster">
            <img src={`${img}`} alt="film poster" />
            <button className="fav-btn">❤︎⁠</button>
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