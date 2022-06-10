import { Link } from 'react-router-dom';


export default function MovieCard({movie}){
    return(
        <>
        <h1><Link to={`/movies/${movie.title}`}>{movie.title}</Link></h1>

        </>
    )
}