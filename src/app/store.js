import { configureStore } from "@reduxjs/toolkit";
import { Loader,NavTransfrom } from "../Features/reducer";
export default configureStore({
    reducer : {
        Loader : Loader,
        NavTransfrom : NavTransfrom
    },
});
