import "./footer.css"
const Footer=({setPage})=>{
    return(
        <>
        <div className="footer-container">
            <button className="page-ctrl" onClick={()=>{
                setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
            }}>Previous page</button>
            <button className="page-ctrl" onClick={()=>{
                setPage((prevPage) => prevPage + 1);
            }}>Next Page</button>
        </div>
        </>
    )

}
export default Footer