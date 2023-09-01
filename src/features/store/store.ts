import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "../crypto_slice/crypto_slice";
import Nft_Reducer from "../nft_slice/nft_slice";
import logger from "redux-logger";
import NewsReducer from "../news_slice/news_slice";
import ProfileReducer from "../profile_slice/profile_slice";
import DashboardReducer from "../dashboard_slice/dashboard_slice";
import themeReducer from "../theme_slice/theme_slice";
const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    nft: Nft_Reducer,
    news: NewsReducer,
    profile: ProfileReducer,
    dashboard: DashboardReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
