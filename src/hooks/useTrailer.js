import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMainTrailer } from "../store/movieSlice"

const useTrailer = (MovieId) => {

    const dispatch = useDispatch();
    const MainTrailer = useSelector((state) => state.movie.MainTrailer)


    let fecthMovieTrailer = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${MovieId}/videos?language=en-US`, options)
        const data = await res.json();
        const filterTrailers = data.results.filter((video) => { return video?.type === "Trailer" })
        const Trailer = filterTrailers.length ? filterTrailers[0] : data?.results[0];
        dispatch(addMainTrailer(Trailer));
    }

    useEffect(() => {
        fecthMovieTrailer();
    }, [MovieId])

}

export default useTrailer;