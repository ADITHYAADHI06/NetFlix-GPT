import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        isLoading: false,
        showGptSearch: false,
        movieDetails: null,
        movieNames: null
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addMovieDetails: (state, action) => {
            const { names, details } = action.payload;
            state.movieDetails = details;
            state.movieNames = names;
        },
        toggleLoadingState: (state) => {
            state.isLoading = !state.isLoading;
        },
        clearGptSearchData: (state) => {
            state.movieDetails = null;
            state.movieNames = null;
            state.showGptSearch = !state.showGptSearch;
        },
        clearUserSearchData: (state) => {
            state.movieDetails = null;
            state.movieNames = null;
            state.showGptSearch = null;
        }

    }
})


export const { toggleGptSearchView, addMovieDetails, toggleLoadingState, clearGptSearchData, clearUserSearchData } = gptSlice.actions;

export default gptSlice.reducer;
