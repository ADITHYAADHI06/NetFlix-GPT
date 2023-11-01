import React, { useState } from 'react'
import { BsFillPlayFill } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';
// import { useDispatch } from 'react-redux';
// import { setMainTrailerMovie } from '../../store/movieSlice';

const MainMovieTitle = ({ mainMovie }) => {
    // const dispatch = useDispatch();
    const [ismoreInfo, setismoreInfo] = useState(false);

    // const handleMainTrailerMovie = (movie) => {
    //     dispatch(setMainTrailerMovie(movie));
    // }
    // onClick={() => { handleMainTrailerMovie(mainMovie) }}
    const { original_title, overview, vote_average, original_language } = mainMovie;
    return (
        <div className='absolute z-5  text-white bg-gradient-to-r from-black h-screen min-[300px]:pt-[295px] min-[400px]:pt-[335px] min-[500px]:pt-[375px] min-[570px]:pt-[236px] pt-[38%] sm:pt-[35%]  md:pt-[33%]  lg:pt-[28%] pl-8 md:pl-10 lg:pl-20 '>
            <h1 className='text-xl md:text-3xl  lg:text-5xl mb-2 md:mb-5  font-bold'>{original_title}</h1>
            <p className='text-md hidden md:inline-block md:text-sm lg:text-md  md:w-2/4 mb-4 w-1/4'>{overview}</p>
            <div className="hideen sm:inline-block md:block ">
                <button className='px-1 pr-2 font-bold rounded-md py-1 md:py-1 md:px-3 lg:py-1 bg-white text-black text-xs md:text-md lg:text-xl hover:opacity-95' ><BsFillPlayFill className='inline-block text-lg md:text-2xl' /> Play</button>
                <button className='bg-gray-500  px-1 md:px-3 font-bold rounded-md   text-xs md:text-md lg:text-xl   py-1 md:py-1 lg:py-1 ml-3 md:ml-5' onClick={() => { setismoreInfo(!ismoreInfo) }}><AiOutlineInfoCircle className='inline text-xl md:text-2xl' /> More Info</button>
            </div>
            {ismoreInfo ? (<div className='mt-[6px]'>
                <span className='text-black bg-white rounded-md py-0 px-2 font-semibold text-sm mr-3'>{original_language}</span>
                <span className='text-black bg-white rounded-md py-0 px-2  font-semibold text-sm'>{vote_average}</span>
            </div>) : null
            }

        </div>
    )
}

export default MainMovieTitle