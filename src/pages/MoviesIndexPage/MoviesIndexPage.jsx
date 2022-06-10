import MovieCard from '../../components/MovieCard/MovieCard'
import "./MovieIndexPage.css"

export default function MoviesIndexPage({user, movies}){
    return(
        <>
        {movies.map((movie,idx)=><MovieCard key={idx} movie={movie}/>)}
        </>
    )
}