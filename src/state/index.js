import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "./todo";


const store = configureStore({
    reducer: {
        todoSlice
    },
});

export default store;
