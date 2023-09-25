import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTaskToTodo: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addTaskToTodo } = todoSlice.actions;
export default todoSlice.reducer;
