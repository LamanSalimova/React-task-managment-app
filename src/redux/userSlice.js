import avatar1 from "../assets/images/avatar1.jpeg";
import avatar2 from "../assets/images/avatar2.jpeg";
import avatar3 from "../assets/images/avatar3.jpeg";
import avatar4 from "../assets/images/avatar4.jpeg";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  names: ["user1", "user2", "user3"],
  image: "",
  avatars: [avatar1, avatar2, avatar3, avatar4],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.names = action.payload;
      // console.log("slice name", state.names);
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setAvatars: (state, action) => {
      state.avatars = action.payload;
    },
  },
});

export const { setName, setImage, setAvatars } = userSlice.actions;
export default userSlice.reducer;
