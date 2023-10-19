import { createSlice } from "@reduxjs/toolkit";


const loadingSlice = createSlice({
    name : 'loader',
    initialState : {
        isLoading : false
    },
    reducers : {
        LoadingTrue : (state) => {
            return state.isLoading = true
        },
        LoadingFalse : (state) => {
            return state.isLoading = false
        }
    }
});

const NavTransfromSlice = createSlice({
    name : 'navtransfrom',
    initialState : 'nav-sliding',
    reducers : {
        falseSlide : (state) => {
            return state = 'nav-sliding'
        },
        trueSlide : (state) => {
            return state = 'default-sliding'
        }
    }
});
const Loader = loadingSlice.reducer
const {LoadingTrue,LoadingFalse} = loadingSlice.actions

const NavTransfrom = NavTransfromSlice.reducer
const {falseSlide,trueSlide} = NavTransfromSlice.actions

export {LoadingFalse,LoadingTrue,falseSlide,trueSlide}
export {Loader,NavTransfrom}