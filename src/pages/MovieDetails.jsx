import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./movieDetails.css";

const MovieDetails = () => {
  const { id } = useParams();
  const API_KEY = import.meta.env.VITE_APP_ID;
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
        );

        if (!response.ok) {
          throw new Error("Movie not found");
        }

        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [API_KEY, id]);

  if (loading) {
    return (
      <div className="movie-details-loading">Loading movie details...</div>
    );
  }

  if (!movie) {
    return <div className="movie-details-not-found">Movie not found.</div>;
  }

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://placehold.co/500x750/121821/e63946?text=No+Poster";

  return (
    <div className="movie-details-page">
      <div className="movie-details-card">
        <div className="movie-details-header">
          <Link to="/" className="movie-details-back">
            ← Back to Home
          </Link>
        </div>

        <div className="movie-details-body">
          <img
            className="movie-details-poster"
            src={posterUrl}
            alt={movie.title}
          />

          <div className="movie-details-content">
            <h1 className="movie-details-title">{movie.title}</h1>
            {movie.tagline && (
              <p className="movie-details-tagline">"{movie.tagline}"</p>
            )}

            <div className="movie-details-meta">
              <span className="movie-details-badge">
                {movie.release_date?.split("-")[0] || "N/A"}
              </span>
              <span className="movie-details-badge">
                ⭐ {movie.vote_average?.toFixed(1) || "N/A"}/10
              </span>
              <span className="movie-details-badge">
                {movie.runtime || 0} min
              </span>
            </div>

            <p className="movie-details-overview">
              {movie.overview || "No overview available."}
            </p>

            <div className="movie-details-info">
              <div className="movie-info-item">
                <span className="movie-info-label">Genres</span>
                <span className="movie-info-value">
                  {movie.genres?.map((genre) => genre.name).join(", ") || "N/A"}
                </span>
              </div>

              <div className="movie-info-item">
                <span className="movie-info-label">Language</span>
                <span className="movie-info-value">
                  {movie.original_language?.toUpperCase() || "N/A"}
                </span>
              </div>

              <div className="movie-info-item">
                <span className="movie-info-label">Status</span>
                <span className="movie-info-value">
                  {movie.status || "N/A"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
