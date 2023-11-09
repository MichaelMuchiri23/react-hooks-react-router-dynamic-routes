import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function MovieShow({movies}){
    const params = useParams()

    const list = movies.filter((movie) => {
        return movie.id === parseInt(params.movieId)
    })

    return(
        <div>
            <h3>{list[0].title}</h3>
        </div>
    )
}

export default MovieShow