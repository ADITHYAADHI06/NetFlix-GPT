import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlaying from '../hooks/useNowPlaying';
import BrowseMainComponent from './BrowseMainComponent';
import BrowseSecondryComponent from './BrowseSecondryComponent';
import usePopular from '../hooks/usePopular';
import useTopRated from '../hooks/useTopRated';
import useUpComing from '../hooks/useUpcoming';
import { useSelector } from 'react-redux';
import GptPage from './GptPage';

const Browse = () => {

    const showGptSearch = useSelector((state) => state.gpt.showGptSearch)

    useNowPlaying();
    usePopular();
    useTopRated();
    useUpComing();

    return (
        <div className='w-screen'>

            <Header />
            {
                !showGptSearch ? (<>
                    <BrowseMainComponent />
                    <BrowseSecondryComponent />
                </>) : (<GptPage />)
            }
        </div>
    )
}

export default Browse