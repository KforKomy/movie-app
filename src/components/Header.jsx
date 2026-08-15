import "./header.css"
import { Link } from "react-router-dom";
const Header=({setPage})=>{
    return(
        <>
        <nav>
            <h1>Moraflix</h1>
            <div className="links">
                <Link to="/" onClick={()=>setPage(1)}>Home</Link>
                <Link to="/favourites">Favourites</Link>
            </div>
        </nav>
        
        </>
    )


}
export default Header;