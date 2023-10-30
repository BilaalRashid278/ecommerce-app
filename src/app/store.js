import { configureStore } from "@reduxjs/toolkit";
import { Loader,NavTransfrom,animate1Reducer,animate2Reducer } from "../Features/reducer";
export default configureStore({
    reducer : {
        Loader : Loader,
        NavTransfrom : NavTransfrom,
        animate1 : animate1Reducer,
        animate2 : animate2Reducer
    },
});
