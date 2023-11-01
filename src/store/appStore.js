import { configureStore } from "@reduxjs/toolkit"
import userReducers from "./userSlice";
import movieReducers from "./movieSlice"
import gptReducers from "./gptSlice"
import configReducers from "./appConfig"

const store = configureStore({
    reducer: {
        user: userReducers,
        movie: movieReducers,
        gpt: gptReducers,
        config: configReducers
    }
})

export default store;