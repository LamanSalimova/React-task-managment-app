import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import taskSlice from "./taskSlice";
import searchSlice from "./searchSlice";
import todoSlice from "./todoSlice";
import inProgressSlice from "./inProgressSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
    tasks: taskSlice,
    search: searchSlice,
    todo: todoSlice,
    progress: inProgressSlice,
  },
});

export default store;
