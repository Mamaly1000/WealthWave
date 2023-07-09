import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "../crypto_slice/crypto_slice";
import logger from "redux-logger";
const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
