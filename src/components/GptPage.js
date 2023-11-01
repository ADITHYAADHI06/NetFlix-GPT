import React from 'react'
import { BG_URL } from '../utils/constants'
import GptSearchBar from './subComponents/GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptPage = () => {
    return (
        <>
            <div className="fixed -z-10 ">
                <img className="h-screen w-screen object-cover" src={BG_URL} alt="Bg-img" />
            </div>
            <div className="">
                <GptSearchBar />
                <GptMovieSuggestions />
            </div>
        </>
    )
}

export default GptPage