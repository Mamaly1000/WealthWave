import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { ThemeInterface } from "../../hooks/useTheme";

const initialState: ThemeInterface = {
  bgColor: "linear-gradient(to right, #200122, #6f0000)",
  btnColor: "#a79632",
  containerColor: "linear-gradient(to right, #636363, #a2ab58)",
  divider: "divider-2",
  headerColor: "#ffffff",
  hoverColor: "rgba(0 0 0/.2)",
  plainTextColor: "#FFEEF4",
  modalColor: "#1D1D16",
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
    setHoverColorTheme: (state, action) => {
      state.hoverColor = action.payload;
    },
    setDividerColorTheme: (state, action) => {
      state.divider = action.payload;
    },
    setModalColorTheme: (state, action) => {
      state.modalColor = action.payload;
    },
    setAppTheme: (state, action) => {
      state.bgColor = action.payload.bgColor;
      state.btnColor = action.payload.btnColor;
      state.containerColor = action.payload.containerColor;
      state.headerColor = action.payload.headerColor;
      state.plainTextColor = action.payload.plainTextColor;
      state.headerColor = action.payload.headerColor;
      state.divider = action.payload.divider;
      state.modalColor = action.payload.modalColor;
    },
  },
});
export const {
  setbgColorTheme,
  setPlainTextColorTheme,
  setHeaderColorTheme,
  setBtnColorTheme,
  setContainerColorTheme,
  setHoverColorTheme,
  setAppTheme,
  setDividerColorTheme,
  setModalColorTheme,
} = themeReducer.actions;
export default themeReducer.reducer;
export const selecttheme = (state: RootState) => {
  return state.theme;
};
