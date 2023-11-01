import { createSlice } from "@reduxjs/toolkit";


const apiSlice = createSlice({
    name : 'fetchDataFromApi',
    initialState : {
        api : []
    },
    reducers : {
        getApiData : (state,action) => {
            state.api = action.payload
        }
    }
});

export const apiSliceReducer = apiSlice.reducer;
export const {getApiData} = apiSlice.actions;