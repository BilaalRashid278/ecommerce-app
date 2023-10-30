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

const aimate1 = createSlice({
    name : 'aimate1',
    initialState : '',
    reducers : {
        setAnimation1 : (state) => {
            return state = 'animate-line1'
        }
    }
})
const aimate2 = createSlice({
    name : 'aimate2',
    initialState : '',
    reducers : {
        setAnimation2 : (state) => {
            return state = 'animate-line2'
        }
    }
});



const animate1Reducer = aimate1.reducer
const animate2Reducer = aimate2.reducer
const Loader = loadingSlice.reducer
const {LoadingTrue,LoadingFalse} = loadingSlice.actions
const {setAnimation1} = aimate1.actions
const {setAnimation2} = aimate2.actions

const NavTransfrom = NavTransfromSlice.reducer
const {falseSlide,trueSlide} = NavTransfromSlice.actions

export {LoadingFalse,LoadingTrue,falseSlide,trueSlide,setAnimation1,setAnimation2};
export {Loader,NavTransfrom,animate1Reducer,animate2Reducer}