import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
    task: string;
    status: string;
}

export interface BoardState {
    tasks: Task[];
    searchQuery: string;
}

export const initialState: BoardState = {
    tasks: localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks") as string) : [],
    searchQuery: ""
};


export const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        setTasks: (state, action: PayloadAction<Task[]>) => {
            localStorage.setItem("tasks", JSON.stringify(action.payload));
            state.tasks = action.payload;
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        }
    },
});

export const { actions: boardActions, reducer: boardReducer } = boardSlice;