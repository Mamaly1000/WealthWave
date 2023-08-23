import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { Iprofile } from "../../hooks/useProfile";

const initialState: Iprofile = {
  description:
    "I am a highly skilled frontend developer with expertise in next.js-ts and vite-react-ts projects. I thrive in remote work environments and bring a strong work ethic and attention to detail to every project I undertake.",
  email: "MamadMehdi.Aziz.10@Gmail.com",
  name: "Mohammad Mehdi Azizi",
  profile_pic: "https://avatars.githubusercontent.com/u/105161078?v=4",
};

const ProfileReducer = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setProfileSlice: (state, action) => {
      state = action.payload;
    },
  },
});
export const { setProfileSlice } = ProfileReducer.actions;
export default ProfileReducer.reducer;
export const selectProfile = (state: RootState) => {
  return state.profile;
};
