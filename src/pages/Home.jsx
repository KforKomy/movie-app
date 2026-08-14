import Header from "../components/Header";
import Search from "../components/Search"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import { useState,useEffect } from "react";
const Home=()=>{
    const API_KEY = import.meta.env.VITE_APP_ID; 
    const BASE_URL = "https://api.themoviedb.org/3";
    const[page,setPage]=useState(1);
    const [movies,setMovies]=useState([]);
    useEffect(()=>{
        async function fetchMovies(){
            try{
                const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
                if(!response.ok) throw new Error("Couldnt Fetch movies");
                const data=await response.json();
                setMovies(data.results);
            }
            catch(error){
                console.log(error);
                return [];
            }

        }
        function scrollTop(){
             window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
        }
        fetchMovies();
        scrollTop();
    }, [page, API_KEY])
return(
    <>
     <Header setPage={setPage} />
    <Search page={page}/>
    <Hero movies={movies}/>
    <Footer setPage={setPage} page={page}/>

    </>
)
}
export default Home;