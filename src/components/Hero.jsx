import "./hero.css";
import Movie from "./Movie";

const Hero = ({ movies = [] }) => {
    movies.push({img:`/images.jpg` , movieName:`Venom: The Last Dance` , releaseDate:2024})
  return (
    <div className="hero-container">
      <div className="movies-grid">
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <Movie
              key={index}
              img={movie.img}
              movieName={movie.movieName}
              releaseDate={movie.releaseDate}
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
