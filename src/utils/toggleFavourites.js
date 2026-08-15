export function toggleFavourites(prev, movie) {
  const alreadyExists = prev.some(
    (item) =>
      item.img === movie.img &&
      item.movieName === movie.movieName &&
      item.releaseDate === movie.releaseDate
  );
  let updatedFavourites
  if (alreadyExists) {
     updatedFavourites = prev.filter((item) => 
        !(item.img === movie.img &&
        item.movieName === movie.movieName &&
        item.releaseDate === movie.releaseDate)
    );
  }
  else{
       updatedFavourites = [...prev, movie];
    
    
  }
  localStorage.setItem(
        "favourites",
        JSON.stringify(updatedFavourites));

  return updatedFavourites;
}