import "./movie.css";
import { toggleFavourites } from "../utils/toggleFavourites";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Movie = ({
  img,
  movieName,
  releaseDate,
  setFavMovies,
  favMovies = [],
  movieId,
}) => {
  const favBtnRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (favBtnRef.current && favMovies) {
      const isFavorite = favMovies.some((m) => m.movieName === movieName);
      if (isFavorite) {
        favBtnRef.current.classList.add("favorite");
      } else {
        favBtnRef.current.classList.remove("favorite");
      }
    }
  }, [favMovies, movieName]);

  const handleFavClick = (event) => {
    event.stopPropagation();
    setFavMovies((prev) => {
      const updated = toggleFavourites(prev, {
        img,
        movieName,
        releaseDate,
        movieId,
      });
      return updated;
    });
  };

  const handleMovieClick = () => {
    if (movieId) {
      navigate(`/movie/${movieId}`);
    }
  };

  return (
    <div
      className="movie-container"
      onClick={handleMovieClick}
      onKeyDown={(event) => {
        if ((event.key === "Enter" || event.key === " ") && movieId) {
          event.preventDefault();
          handleMovieClick();
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div className="poster">
        <img src={`${img}`} alt="film poster" />
        <button className="fav-btn" ref={favBtnRef} onClick={handleFavClick}>
          ❤︎⁠
        </button>
      </div>
      <div className="movie-text">
        <h4>{movieName}</h4>
        <h5>{releaseDate}</h5>
      </div>
    </div>
  );
};

export default Movie;
