import React from 'react'
import { useSelector } from 'react-redux'
import MainMovieTitle from './subComponents/MainMovieTitle'
import MovieVideoBG from './subComponents/MovieVideoBG'

const BrowseMainComponent = () => {
    const movies = useSelector((state) => state.movie.nowPlayingMovies)
    const main_movie = useSelector((store) => store.movie.main_movie);
    if (!movies) {
        return
    }
    const mainMovie = main_movie || movies?.[3];

    return (
        <div className='relative pt-[18%] sm:pt-20 md:pt-0 bg-black '>
            <MovieVideoBG MovieId={mainMovie?.id} />
            <MainMovieTitle mainMovie={mainMovie} />
        </div>
    )
}

export default BrowseMainComponent