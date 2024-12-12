import { configureStore } from "@reduxjs/toolkit";
import { boardReducer, BoardState } from "./components/Board/slice";


const store = configureStore({
    reducer: {
        'board': boardReducer,
    }
})

export interface RootState {
    'board': BoardState;
}

export default store;