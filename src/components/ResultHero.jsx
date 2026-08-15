import { useState } from "react"
import Movie from "./Movie"
import "./resulthero.css"
const ResultHero=({searchResult,setFavMovies})=>{
    return(
        <>
         <div className="hero-container">
      <div className="movies-grid">
        {
            searchResult.length>0?
            (searchResult.map((movie,index)=>(
                <Movie
                key={index}
                img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                movieName={movie.original_title}
                releaseDate={movie.release_date.split("-")[0]}
                setFavMovies={setFavMovies}
                />
            )))
            :
            (<h2 className="nores">No Movies Found</h2>)
        }
      
      </div>
    </div>
        </>
    )
}
export default ResultHero;