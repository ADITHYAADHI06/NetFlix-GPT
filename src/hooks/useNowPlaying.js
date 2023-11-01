import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlaying } from '../store/movieSlice';
import { Now_Playing_URL, options } from "../utils/constants"

const useNowPlaying = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((state) => state.movie.nowPlayingMovies)

    async function fecthNowplaying() {
        const res = await fetch(Now_Playing_URL, options);
        const data = await res.json();
        dispatch(addNowPlaying(data.results))
    }
    useEffect(() => {
        !nowPlayingMovies && fecthNowplaying();
    }, []);
}

export default useNowPlaying