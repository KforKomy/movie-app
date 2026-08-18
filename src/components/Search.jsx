import "./search.css";
import { useState } from "react";
import { fetchSearched } from "../utils/fetchSearchResult";
import { Link,useNavigate } from "react-router-dom";
const Search = ({ page, setSearchResult }) => {
  const [input, setInput] = useState("");
  const API_KEY = import.meta.env.VITE_APP_ID;
  const navigate=useNavigate();
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for movies"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e)=>{
            if(e.key=="Enter"){
              fetchSearched(input, API_KEY, setSearchResult);
              navigate("/Search");

            };
          }}
        />
        <Link
          to="/Search"
          className="search-btn"
          onClick={() => fetchSearched(input, API_KEY, setSearchResult)}
        >
          Search
        </Link>
      </div>
      <h2 className="page">{page}</h2>
    </>
  );
};
export default Search;
