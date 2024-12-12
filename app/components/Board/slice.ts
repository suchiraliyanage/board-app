import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
    task: string;
    status: string;
}

interface BoardState {
    tasks: Task[];
}

export const initialState: BoardState = {
    tasks: localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks") as string) : [],
};


export const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        setTasks: (state, action: PayloadAction<Task[]>) => {
            localStorage.setItem("tasks", JSON.stringify(action.payload));
            state.tasks = action.payload;
        }
    },
});

export const { actions: boardActions, reducer: boardReducer } = boardSlice;