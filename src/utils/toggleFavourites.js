export function toggleFavourites(prev, movie) {
  const sameMovie = (item) => {
    if (movie.movieId && item.movieId) {
      return item.movieId === movie.movieId;
    }

    return (
      item.img === movie.img &&
      item.movieName === movie.movieName &&
      item.releaseDate === movie.releaseDate
    );
  };

  const alreadyExists = prev.some(sameMovie);
  let updatedFavourites;

  if (alreadyExists) {
    updatedFavourites = prev.filter((item) => !sameMovie(item));
  } else {
    updatedFavourites = [...prev, movie];
  }

  localStorage.setItem("favourites", JSON.stringify(updatedFavourites));

  return updatedFavourites;
}
