import {configureStore} from "@reduxjs/toolkit";
import curlSlice from "./slices/curlSlice";

const store= configureStore({
    reducer: {
        curlData: curlSlice.reducer,
    }
})

export default store;