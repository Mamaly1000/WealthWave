import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { Iprofile } from "../../hooks/useProfile";

const initialState: Iprofile = {
  description:
    "I am a highly skilled frontend developer with expertise in next.js-ts and vite-react-ts projects. I thrive in remote work environments and bring a strong work ethic and attention to detail to every project I undertake.",
  email: "MamadMehdi.Aziz.10@Gmail.com",
  name: "Mohammad Mehdi Azizi",
  profile_pic: "https://avatars.githubusercontent.com/u/105161078?v=4",
  profession: "senior front end developer",
  Birth: "September,13,2002",
  Address: "Pasadena, California",
  Experience: 1,
  works: [],
  socials: [],
};

const ProfileReducer = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setProfileSlice: (state, action) => {
      state.Address = action.payload.Address;
      state.Birth = action.payload.Birth;
      state.Experience = action.payload.Experience;
      state.description = action.payload.description;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.profession = action.payload.profession;
      state.profile_pic = action.payload.profile_pic;
      state.socials = action.payload.socials;
      state.works = action.payload.works;
    },
  },
});
export const { setProfileSlice } = ProfileReducer.actions;
export default ProfileReducer.reducer;
export const selectProfile = (state: RootState) => {
  return state.profile;
};
