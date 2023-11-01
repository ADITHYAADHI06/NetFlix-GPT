import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../store/movieSlice';
import { Popular_URL, options } from "../utils/constants"


const usePopular = () => {
    const dispatch = useDispatch();
    const PopularMovies = useSelector((state) => state.movie.PopularMovies)


    async function fetchPopular() {
        const res = await fetch(Popular_URL, options)
        const data = await res.json();
        dispatch(addPopularMovies(data.results))
    }

    useEffect(() => {
        !PopularMovies && fetchPopular();
    }, []);
}

export default usePopular;