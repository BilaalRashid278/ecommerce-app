import { createSlice } from "@reduxjs/toolkit";


export const loaderSlice = createSlice({
    name : 'loader',
    initialState : {
        progressValue : 0
    },
    reducers : {
        increaseProgressValue : (state,action) => {
            state.progressValue = action.payload
        },
        decreaseProgressValue : (state,action) => {
            state.progressValue = action.payload
        }
    }
});

export const loaderReducer = loaderSlice.reducer;

export const {increaseProgressValue,decreaseProgressValue} = loaderSlice.actions