import "../css/Fav.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCards from "../components/MovieCards"

function Fav(){
    const {fav} = useMovieContext();

    if(fav && fav.length> 0){
        return (
           <div className="fav">
               <h2>Your Favourites</h2>
               <div className="movies-grid">
                  {fav.map((movie)=> (
                  <MovieCards movie={movie} key={movie.id} />
                  ))}
                </div>  
           </div>
        );
       
    }

    return <div className="fav-empty">
       <h2>No favourite Movies yet</h2>
       <p>Start adding movies to your favourites and they will appear here</p>
    </div>
}
export default Fav