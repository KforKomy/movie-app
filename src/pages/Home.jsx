import Header from "../components/Header";
import Search from "../components/Search"
import Hero from "../components/Hero"
import { useState,useEffect } from "react";
const Home=()=>{
    const API_KEY = import.meta.env.VITE_APP_ID; 
    const BASE_URL = "https://api.themoviedb.org/3";
    const [movies,setMovies]=useState([]);
    useEffect(()=>{
        async function fetchMovies(){
            try{
                const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
                if(!response.ok) throw new Error("Couldnt Fetch movies");
                const data=await response.json();
                setMovies(data.results);
            }
            catch(error){
                console.log(error);
                return [];
            }

        }
        fetchMovies();
    },[])
return(
    <>
     <Header/>
    <Search/>
    <Hero movies={movies}/>
    </>
)
}
export default Home;