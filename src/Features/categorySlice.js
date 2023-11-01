import { createSlice } from "@reduxjs/toolkit";


const storeCategory = createSlice({
    name : 'category',
    initialState : {
        SelectedCategory : 'phonesandtelecomunications'
    },
    reducers : {
        searchCategory : (state,action) => {
            state.SelectedCategory = action.payload
        }
    }
});


export const storeCategoryReducer = storeCategory.reducer;
export const {searchCategory} = storeCategory.actions;
