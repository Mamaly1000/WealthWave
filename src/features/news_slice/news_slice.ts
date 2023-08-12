import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface News_slice_interface {
  AppleNews: unknown[];
  AppleNewsHeadLines: unknown[];
  TeslaNews: unknown[];
  TeslaNewsHeadLines: unknown[];
  Top_business_headlines: unknown[];
  Top_business_headlines_tech_crunch_everything: unknown[];
  Top_business_headlines_tech_crunch_HeadLines: unknown[];
  WallStreetJournal_News: unknown[];
}

const initialState: News_slice_interface = {
  AppleNews: [],
  AppleNewsHeadLines: [],
  TeslaNews: [],
  TeslaNewsHeadLines: [],
  Top_business_headlines: [],
  Top_business_headlines_tech_crunch_everything: [],
  Top_business_headlines_tech_crunch_HeadLines: [],
  WallStreetJournal_News: [],
};

const NewsReducer = createSlice({
  name: "news",
  initialState: initialState,
  reducers: {
    fetchAppleNews: (state, action) => {
      state.AppleNews = action.payload;
    },
    fetchAppleNewsHeadLines: (state, action) => {
      state.AppleNewsHeadLines = action.payload;
    },
    fetchTeslaNews: (state, action) => {
      state.TeslaNews = action.payload;
    },
    fetchTeslaNewsHeadLines: (state, action) => {
      state.TeslaNewsHeadLines = action.payload;
    },
    fetchTop_business_headlines: (state, action) => {
      state.Top_business_headlines = action.payload;
    },
    fetchTop_business_headlines_tech_crunch_everything: (state, action) => {
      state.Top_business_headlines_tech_crunch_everything = action.payload;
    },
    fetchTop_business_headlines_tech_crunch_HeadLines: (state, action) => {
      state.Top_business_headlines_tech_crunch_HeadLines = action.payload;
    },
    fetchWallStreetJournal_News: (state, action) => {
      state.WallStreetJournal_News = action.payload;
    },
  },
});
export const {
  fetchAppleNews,
  fetchAppleNewsHeadLines,
  fetchTeslaNews,
  fetchTeslaNewsHeadLines,
  fetchTop_business_headlines,
  fetchTop_business_headlines_tech_crunch_everything,
  fetchTop_business_headlines_tech_crunch_HeadLines,
  fetchWallStreetJournal_News,
} = NewsReducer.actions;
export default NewsReducer.reducer;
export const selectNews = (state: RootState) => {
  return state.news;
};
