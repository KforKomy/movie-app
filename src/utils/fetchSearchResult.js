export async function fetchSearched(input, API_KEY, setSearchResult) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(input)}&api_key=${API_KEY}`,
    {
      headers: {
        accept: "application/json",
      },
    },
  );
  const data = await response.json();
  setSearchResult(data.results);
  console.log(data);
}
