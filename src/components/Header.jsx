import "./header.css"
const Header=({setPage})=>{
    return(
        <>
        <nav>
            <h1>Movie App</h1>
            <div className="links">
                <a href="/" onClick={()=>setPage(1)}>Home</a>
                <a href="#">Favourites</a>
            </div>
        </nav>
        
        </>
    )


}
export default Header;