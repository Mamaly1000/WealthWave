import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { IAppleNews } from "../../hooks/useNews";

interface News_slice_interface {
  AppleNews: IAppleNews[];
  TeslaNews: IAppleNews[];
  Top_business_headlines: IAppleNews[];
  Top_business_headlines_tech_crunch_everything: IAppleNews[];
  WallStreetJournal_News: IAppleNews[];
  searchText: string;
}

const initialState: News_slice_interface = {
  AppleNews: [],
  TeslaNews: [],
  Top_business_headlines: [],
  Top_business_headlines_tech_crunch_everything: [],
  WallStreetJournal_News: [],
  searchText: "",
};

const NewsReducer = createSlice({
  name: "news",
  initialState: initialState,
  reducers: {
    fetchAppleNews: (state, action) => {
      state.AppleNews = action.payload;
    },
    fetchTeslaNews: (state, action) => {
      state.TeslaNews = action.payload;
    },
    fetchTop_business_headlines: (state, action) => {
      state.Top_business_headlines = action.payload;
    },
    fetchTop_business_headlines_tech_crunch_everything: (state, action) => {
      state.Top_business_headlines_tech_crunch_everything = action.payload;
    },
    fetchWallStreetJournal_News: (state, action) => {
      state.WallStreetJournal_News = action.payload;
    },
  },
});
export const {
  fetchAppleNews,
  fetchTeslaNews,
  fetchTop_business_headlines,
  fetchTop_business_headlines_tech_crunch_everything,
  fetchWallStreetJournal_News,
} = NewsReducer.actions;
export default NewsReducer.reducer;
export const selectNews = (state: RootState) => {
  return state.news;
};
