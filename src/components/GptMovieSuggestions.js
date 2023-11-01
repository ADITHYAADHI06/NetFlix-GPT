import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestions = () => {

    const { movieNames, movieDetails } = useSelector((store) => store.gpt)

    if (!movieNames) {
        return
    }
    return (
        <div className="bg-black py-2 md:py-3 md:px-2 bg-opacity-90 mt-8 mx-2 rounded-md">
            <h2 className='text-white text-xl md:text-3xl ml-3 text-center md:text-left '>Top Recommendations 🚀</h2>
            <div className="relative z-20">
                {
                    movieNames.map((movieName, i) => <MovieList key={movieName} title={movieName} movies={movieDetails[i].results} />)
                }
            </div>
        </div>
    )
}

export default GptMovieSuggestions