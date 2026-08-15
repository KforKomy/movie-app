
A modern React application for discovering, searching, and managing your favorite movies using the TMDB (The Movie Database) API.

## ✨ Features

- **Browse Popular Movies** - Discover trending movies with pagination
- **Search Movies** - Search for any movie by title
- **Favorites Management** - Add/remove movies to your favorites list
- **Persistent Storage** - Favorites are saved to localStorage
- **Responsive Design** - Works seamlessly on desktop and mobile
- **Code Splitting** - Lazy-loaded pages for better performance
- **Fast Navigation** - Built with React Router v7+ for smooth transitions

## 🛠️ Tech Stack

- **React** 19.2+ - UI library
- **React Router** 7.18+ - Client-side routing
- **Vite** 8.2+ - Build tool & dev server
- **TMDB API** - Movie database
- **CSS3** - Styling
- **localStorage** - Data persistence

## 🚀 Getting Started



### Browsing Movies
- Visit the home page to see popular movies
- Use pagination buttons at the bottom to load more movies
- Click the ❤︎ button to add a movie to your favorites

### Searching Movies
- Click the "Search" button in the navigation or use the search bar
- Enter a movie title and click search
- Results will display all matching movies from TMDB

### Managing Favorites
- Click the ❤︎ button on any movie to add/remove from favorites
- Visit the "Favourites" page to see all saved movies
- Favorites persist even after closing the browser

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── Hero.jsx            # Home page movie grid
│   ├── FavHero.jsx         # Favorites page movie grid
│   ├── ResultHero.jsx      # Search results grid
│   ├── Movie.jsx           # Individual movie card
│   ├── Search.jsx          # Search input component
│   ├── Footer.jsx          # Pagination footer
│   └── *.css               # Component styles
├── pages/
│   ├── Home.jsx            # Home page
│   ├── Favourites.jsx      # Favorites page
│   └── SearchResult.jsx    # Search results page
├── utils/
│   ├── fetchMovies.js      # Popular movies API call
│   ├── fetchSearchResult.js # Search API call
│   ├── toggleFavourites.js # Add/remove favorite logic
│   └── scrollTop.js        # Scroll utility
├── App.jsx                 # Main app component
└── main.jsx                # React entry point
```



## 🐛 Known Issues & Future Improvements

### Current Limitations
- No loading spinners during API calls
- No error messages if API fails

### Planned Improvements
- Add loading states and error handling
- Implement search debouncing
- Add movie detail page
- Implement user ratings and reviews
- Add movie categories/genres filtering
- Improve responsive design for tablets
- Add dark mode toggle
- Better error boundaries for component crashes

## 🎨 Component Flow

```
App
├── Home
│   ├── Header
│   ├── Search
│   ├── Hero (Popular Movies)
│   └── Footer (Pagination)
├── Favourites
│   ├── Header
│   └── FavHero (Favorite Movies)
└── SearchResult
    ├── Header
    └── ResultHero (Search Results)
```



## 📄 License

This project is open source and available under the MIT License.


**Happy movie browsing!** 🎬🍿
