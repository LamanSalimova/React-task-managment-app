import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      console.log("slice task", action.payload);
    },
    addTaskToBoard: (state, action) => {
      const newTask = action.payload; 
      newTask.board = "progress"; 
      state.push(newTask);
    },
  },
});

export const { addTask, addTaskToBoard } = taskSlice.actions;

export default taskSlice.reducer;
