import "./hero.css";
import Movie from "./Movie";

const Hero = ({ movies = [], favMovies = [], setFavMovies }) => {
  return (
    <div className="hero-container">
      <div className="movies-grid">
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <Movie
              key={movie.id || index}
              img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              movieName={movie.title}
              releaseDate={
                movie.release_date ? movie.release_date.split("-")[0] : "N/A"
              }
              movieId={movie.id}
              favMovies={favMovies}
              setFavMovies={setFavMovies}
            />
          ))
        ) : (
          <p className="no-movies">No movies found</p>
        )}
      </div>
    </div>
  );
};

export default Hero;
