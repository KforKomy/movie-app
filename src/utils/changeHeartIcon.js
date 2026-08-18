export function changeHeartIcon(favs, movie, buttonElement) {
  const exist = favs.some((m) => m.movieName === movie.movieName);

  if (exist) {
    buttonElement.style.setProperty("color", "red", "important");
  } else {
    buttonElement.style.setProperty("color", "white");
  }
}
