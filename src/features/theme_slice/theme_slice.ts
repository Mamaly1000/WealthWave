import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { ThemeInterface } from "../../hooks/useTheme";

const initialState: ThemeInterface = {
  bgColor: "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
  btnColor: "blue",
  containerColor: "#fff",
  headerColor: "#fff",
  hoverColor: "rgba(0 0 0/.2)",
  plainTextColor: "#fff",
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
      state.headerColor = action.payload;
    },
    setAppTheme: (state, action) => {
      state.bgColor = action.payload.bgColor;
      state.btnColor = action.payload.btnColor;
      state.containerColor = action.payload.containerColor;
      state.headerColor = action.payload.headerColor;
      state.plainTextColor = action.payload.plainTextColor;
      state.headerColor = action.payload.headerColor;
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
