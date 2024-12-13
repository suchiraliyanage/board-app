import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum TaskStatus {
    TODO = "TODO",
    IN_PROGRESS = "IN_PROGRESS",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED"
}

export interface Task {
    taskId: number;
    task: string;
    status: TaskStatus;
}

export interface BoardState {
    tasks: {
        TODO: Task[];
        IN_PROGRESS: Task[];
        APPROVED: Task[];
        REJECTED: Task[];
    };
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
        setTasks: (state, action: PayloadAction<{
            TODO: Task[];
            IN_PROGRESS: Task[];
            APPROVED: Task[];
            REJECTED: Task[];
        }>) => {
            localStorage.setItem("tasks", JSON.stringify(action.payload));
            state.tasks = action.payload;
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        }
    },
});

export const { actions: boardActions, reducer: boardReducer } = boardSlice;