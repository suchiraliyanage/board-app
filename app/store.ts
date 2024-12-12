import { configureStore } from "@reduxjs/toolkit";
import { boardReducer } from "./components/Board/slice";


const store = configureStore({
    reducer: {
        'board': boardReducer,
    }
})

export default store;