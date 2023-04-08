import Movie from '../Movie/Movie'
import './MovieList.css'
export default function MovieList(props) {
    
    return (
        <div id='list'>
            {
                props.movies.map(singleMovie => {
                    return (
                        <Movie singleMovie={singleMovie} />
                    )
                })
            }

        </div>
    )

}