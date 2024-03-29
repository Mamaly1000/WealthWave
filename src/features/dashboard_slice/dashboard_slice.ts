import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

export type dashboardSectionTypes =
  | ""
  | "dashboard/home"
  | "dashboard/theme"
  | "dashboard/profile"
  | "dashboard/table/crypto"
  | "dashboard/table/nft"
  | "dashboard/table/news"
  | "dashboard/kanban"
  | "dashboard/scheduler"
  | "dashboard/chart/crypto"
  | "dashboard/chart/nft"
  | "dashboard/chart/news"
  | "dashboard/wallet";

type initialStateType = {
  isAuthenticated: boolean;
  isLoggedIn: boolean;
  token: null | string;
  username: null | string;
  dashboard_Section: dashboardSectionTypes;
  shrinkDasboard: boolean;
  Displaydashboard: boolean;
  displayProfileCard: boolean;
  displayMainDashboard: boolean;
};

const initialState: initialStateType = {
  isAuthenticated: false,
  isLoggedIn: false,
  token: null,
  username: null,
  dashboard_Section: "dashboard/home",
  Displaydashboard: true,
  shrinkDasboard: false,
  displayMainDashboard: false,
  displayProfileCard: false,
};

const DashboardReducer = createSlice({
  name: "news",
  initialState: initialState,
  reducers: {
    setDashboardSection: (state, action) => {
      state.dashboard_Section = action.payload;
    },
    setShrinkDashboard: (state, action) => {
      state.shrinkDasboard = action.payload;
    },
    setDisplayDashboard: (state, action) => {
      state.Displaydashboard = action.payload;
    },
    setDisplayMainDasboard: (state, action) => {
      state.displayMainDashboard = action.payload;
    },
    setDisplayProfileCard: (state, action) => {
      state.displayProfileCard = action.payload;
    },
  },
});
export const {
  setDashboardSection,
  setShrinkDashboard,
  setDisplayDashboard,
  setDisplayMainDasboard,
  setDisplayProfileCard,
} = DashboardReducer.actions;
export default DashboardReducer.reducer;
export const selectDashboard = (state: RootState) => {
  return state.dashboard;
};
