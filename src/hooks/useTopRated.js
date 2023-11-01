import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTopRatedMovies } from '../store/movieSlice';
import { Top_Rated_URL, options } from "../utils/constants"


const useTopRated = () => {
    const dispatch = useDispatch();
    const TopRatedMovies = useSelector((state) => state.movie.TopRatedMovies)



    async function fetchTopRated() {
        const res = await fetch(Top_Rated_URL, options)
        const data = await res.json();
        dispatch(addTopRatedMovies(data.results))
    }

    useEffect(() => {
        !TopRatedMovies && fetchTopRated();
    }, []);
}

export default useTopRated;