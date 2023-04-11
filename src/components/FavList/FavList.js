import { useState } from "react";
import { useEffect } from "react";
import "./FavList.css"
import FavMovie from "../FavMovie/FavMovie";

export default function FavList() {

    const [movies, setfmovies] = useState([])

    const [count, setCount] = useState(0);
    const updateCount = () => {
        setCount(count + 1);
      };




    let url = process.env.REACT_APP_API_SERVER_URL

    async function FavData() {




        const response = await fetch(`${url}/allMovies`);
        const movies = await response.json();



        console.log(11111111, response);

        setfmovies(movies);
        console.log(5555, movies);
    }











    
    useEffect(() => {
        FavData();

    }, [count])


    return (
        <>

            <div id='favlist'>
                {
                    movies.map(singleMovie => {
                        return (
                            <FavMovie singleMovie={singleMovie} onTriggerEffect={updateCount}/>
                        )
                    })
                }


            </div>

        </>
    )

}

























