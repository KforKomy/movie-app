import Movie from "./Movie";
import "./resulthero.css";
const ResultHero = ({ favMovies = [], searchResult, setFavMovies }) => {
  return (
    <>
      <div className="hero-container">
        <div className="movies-grid">
          {searchResult.length > 0 ? (
            searchResult.map((movie, index) => (
              <Movie
                key={movie.id || index}
                img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                movieName={movie.original_title}
                releaseDate={
                  movie.release_date ? movie.release_date.split("-")[0] : "N/A"
                }
                movieId={movie.id}
                favMovies={favMovies}
                setFavMovies={setFavMovies}
              />
            ))
          ) : (
            <h2 className="nores">No Movies Found</h2>
          )}
        </div>
      </div>
    </>
  );
};
export default ResultHero;
