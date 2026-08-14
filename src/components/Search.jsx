import "./search.css"
const Search=({page})=>{
    return(

    <>
    <div className="search-container">
        <input type="text" placeholder="Search for movies" />
        <button className="search-btn">Search</button>
    </div>
    <h2 className="page">{page}</h2>
    </>
    )

}
export default Search