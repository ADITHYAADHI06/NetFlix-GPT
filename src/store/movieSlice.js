import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        main_movie: null,
        MainTrailer: null,
        PopularMovies: null,
        TopRatedMovies: null,
        UpComingMovies: null
    },
    reducers: {
        addNowPlaying: (state, action) => { state.nowPlayingMovies = action.payload },
        addMainTrailer: (state, action) => { state.MainTrailer = action.payload },
        addPopularMovies: (state, action) => { state.PopularMovies = action.payload },
        addTopRatedMovies: (state, action) => { state.TopRatedMovies = action.payload },
        addUpComingMovies: (state, action) => { state.UpComingMovies = action.payload },
        setMainTrailerMovie: (state, action) => { state.main_movie = action.payload; }
    }
})


export const { addNowPlaying, addMainTrailer, addPopularMovies, addTopRatedMovies, addUpComingMovies, setMainTrailerMovie } = movieSlice.actions

export default movieSlice.reducer;