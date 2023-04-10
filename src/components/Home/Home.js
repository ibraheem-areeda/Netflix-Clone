import { useState, useEffect } from 'react';
import MovieList from '../MovieList/MovieList';

export default function Home() {
    const [movies, setmovies] = useState([])

    async function getmovies() {
        const url = process.env.REACT_APP_API_SERVER_URL;
        
        
        const response = await fetch(`${url}/trending`);
       

        const moviesData = await response.json();
        

        setmovies(moviesData);


    }
   

    useEffect(() => {
        getmovies();
    }, [])

    return (
        <>
            <h2> this is Home Page</h2>

          <MovieList movies={movies} />   
            

         
        </>
    )

}