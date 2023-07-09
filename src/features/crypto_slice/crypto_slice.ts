import { createSlice } from "@reduxjs/toolkit";
import { IcryptoChart, IcryptoData } from "../../hooks/useCrypto";
import { RootState } from "../store/store";

interface crypto_slice_interface {
  coinlist: IcryptoData[];
  cryptoLoading: boolean;
  selectedCoin: object;
  cryptoCharts: IcryptoChart[];
  book_marked_coins: BookmarkedCrypto[];
}

type BookmarkedCrypto = {
  book_marked: boolean;
} & IcryptoData;

const initialState: crypto_slice_interface = {
  coinlist: [],
  selectedCoin: {},
  cryptoLoading: false,
  cryptoCharts: [],
  book_marked_coins: [],
};

const cryptoReducer = createSlice({
  name: "crypto",
  initialState: initialState,
  reducers: {
    fetchCoins: (state, action) => {
      state.coinlist = action.payload;
    },
    setSelectedCoin: (state, action) => {
      state.selectedCoin = action.payload;
    },
    setChart: (state, action) => {
      state.cryptoCharts = action.payload;
    },
    setBookmarkCrypto: (state, action) => {
      const selectedCoin = state.coinlist.find(
        (c) => c.id === action.payload.id
      );
      if (selectedCoin) {
        state.book_marked_coins.push({ ...selectedCoin, book_marked: true });
      }
    },
    setRemoveBookmarkCrypto: (state, action) => {
      const newArray = state.book_marked_coins.filter(
        (c) => c.id !== action.payload.id
      );
      state.book_marked_coins = newArray;
    },
  },
});
export const {
  fetchCoins,
  setBookmarkCrypto,
  setChart,
  setRemoveBookmarkCrypto,
  setSelectedCoin,
} = cryptoReducer.actions;
export default cryptoReducer.reducer;
export const selectCrypto = (state: RootState) => {
  return state.crypto;
};
