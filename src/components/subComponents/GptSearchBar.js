import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import language from '../../utils/langConstants'
import openai from "../../utils/openAI"
import { options } from '../../utils/constants'
import { toggleLoadingState } from "../../store/gptSlice"
import { addMovieDetails } from '../../store/gptSlice'

const GptSearchBar = () => {
    const lang = useSelector((store) => store.config.lang)
    const isLoading = useSelector((store) => store.gpt.isLoading)
    const searchText = useRef();

    const dispatch = useDispatch();


    const fecthMovieDeatils = async (moviename) => {
        const res = await fetch('https://api.themoviedb.org/3/search/movie?query=' + moviename + '&include_adult=false&language=en-US&page=1', options)
        const data = await res.json();
        return data;
    }

    const handleGptSearchClick = async () => {
        dispatch(toggleLoadingState())

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: 'work as movie recommendation system for given text :' + searchText.current.value + 'give me only 5 names of movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya' }],
            model: 'gpt-3.5-turbo',
        });
        const movieNames = gptResults?.choices[0]?.message?.content.split(",");
        let movie_D_Promises = movieNames.map((moviename) => fecthMovieDeatils(moviename));
        let movieDetails = await Promise.all(movie_D_Promises);
        dispatch(addMovieDetails({ names: movieNames, details: movieDetails }));
        dispatch(toggleLoadingState())

    }
    return (
        <>


            <div className="pt-[40%] sm:pt-[22%] md:pt-[15%]  xl:pt-[10%]">
                <div className='flex items-center justify-center lg:justify-start xl:justify-center pl-0 lg:pl-[42px] xl:pr-[60px] sm:ml-0  mr-0 sm:mr-0 lg:mr-5 mt-2 min-[300px]:mt-8 min-[400px]:mt-0 sm:mt-0 mb-2 sm:mb-4 md:mb-3 gap-3'>
                    <img className='w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 inline-block' src={`https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/chatgpt-icon.png`} alt="gpt" />
                    <span className='text-sm sm:text-lg md:text-xl lg:text-2xl inline-block  text-white font-semibold '>  {language[lang].gptHeading}</span>
                </div>
                <div className='flex justify-center md:px-10'>
                    <form
                        className="w-full  md:w-4/4   xl:w-3/4  bg-black  grid grid-cols-12"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <input
                            ref={searchText}
                            type="text"
                            className="px-2 py-2 m-3 my-4 md:p-4 md:m-4 col-span-9"
                            placeholder={language[lang].gptSearchPlaceholder}
                        />
                        <button
                            className="col-span-3 ml-1 my-4 mr-2 md:m-4 p-2 md:px-4 bg-red-700 text-white rounded-lg"
                            onClick={handleGptSearchClick}
                        >
                            {/* {lang[langKey].search} */}
                            {language[lang].Search}
                        </button>
                    </form>
                </div>
            </div>
            {
                isLoading ? (<>



                    <div className=" mt-20 flex justify-center">
                        {/* <svg aria-hidden="true" class="inline w-16 h-16 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg> */}
                        <svg aria-hidden="true" class="inline w-16 h-16 sm:w-20 sm:h-20  mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>

                </>
                ) : null
            }
        </>
    )
}

export default GptSearchBar