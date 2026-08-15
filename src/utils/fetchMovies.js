 export async function fetchMovies(setMovies,BASE_URL,API_KEY,page){
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