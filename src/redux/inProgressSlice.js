import { createSlice } from "@reduxjs/toolkit";

const inProgressSlice = createSlice({
  name: "progress",
  initialState: [],
  reducers: {
    addTaskToProgress: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addTaskToProgress } = inProgressSlice.actions;
export default inProgressSlice.reducer;
