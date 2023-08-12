import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "../crypto_slice/crypto_slice";
import Nft_Reducer from "../nft_slice/nft_slice";
import logger from "redux-logger";
import NewsReducer from "../news_slice/news_slice";
const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    nft: Nft_Reducer,
    news: NewsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
