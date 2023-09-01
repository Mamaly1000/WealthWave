import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { ThemeInterface } from "../../hooks/useTheme";

const initialState: ThemeInterface = {
  bgColor: "",
  btnColor: "",
  containerColor: "",
  headerColor: "",
  plainTextColor: "",
};

const themeReducer = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    setbgColorTheme: (state, action) => {
      state.bgColor = action.payload;
    },
    setPlainTextColorTheme: (state, action) => {
      state.plainTextColor = action.payload;
    },
    setHeaderColorTheme: (state, action) => {
      state.headerColor = action.payload;
    },
    setBtnColorTheme: (state, action) => {
      state.btnColor = action.payload;
    },
    setContainerColorTheme: (state, action) => {
      state.containerColor = action.payload;
    },
    setAppTheme: (state, action) => {
      state = action.payload;
    },
  },
});
export const {
  setbgColorTheme,
  setPlainTextColorTheme,
  setHeaderColorTheme,
  setBtnColorTheme,
  setContainerColorTheme,
  setAppTheme,
} = themeReducer.actions;
export default themeReducer.reducer;
export const selecttheme = (state: RootState) => {
  return state.theme;
};
