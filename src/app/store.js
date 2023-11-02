import { configureStore } from "@reduxjs/toolkit";
import { Loader,NavTransfrom,animate1Reducer,animate2Reducer } from "../Features/reducer";
import { storeCategoryReducer } from "../Features/categorySlice";
import { apiSliceReducer } from "../Features/apiSlice";
import { loaderReducer } from "../Features/progressSlice";
export default configureStore({
    reducer : {
        Loader : Loader,
        NavTransfrom : NavTransfrom,
        animate1 : animate1Reducer,
        animate2 : animate2Reducer,
        storeCategory : storeCategoryReducer,
        apiSlice  : apiSliceReducer,
        loader : loaderReducer
    },
});
