import { createSlice } from "@reduxjs/toolkit";

const config = createSlice({
    name: "config",
    initialState: {
        lang: "en-US"
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload;
        },
        // setLanguage: (state, action) => {
        //     state.lang = action.payload;
        // }
    }
})

export const { changeLanguage } = config.actions;
export default config.reducer;


