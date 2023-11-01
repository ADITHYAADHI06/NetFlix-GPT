import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUpComingMovies } from '../store/movieSlice';
import { UpComing_URL, options } from "../utils/constants"


const useUpComing = () => {
    const dispatch = useDispatch();
    const UpComingMovies = useSelector((state) => state.movie.UpComingMovies)

    async function fetchUpComing() {
        const res = await fetch(UpComing_URL, options)
        const data = await res.json();
        dispatch(addUpComingMovies(data.results))
    }

    useEffect(() => {
        !UpComingMovies && fetchUpComing();
    }, []);
}

export default useUpComing;