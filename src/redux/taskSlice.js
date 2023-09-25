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
      const newTask = action.payload; // Eklenecek yeni görev
      newTask.board = "in progress"; // Yeni görevin tahtası "in progress" olarak ayarlanıyor
      state.push(newTask); // Yeni görevi görev listesine ekleyin
    },
  },
});

export const { addTask, moveTask } = taskSlice.actions;

export default taskSlice.reducer;
