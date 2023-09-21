import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { IcryptoData } from "../../hooks/useCrypto";
import { ISingleCoin } from "../../types/singleCrypto.type";
export type cryptoWalletType = {
  icon: string;
  symbol: string;
  marketCap: number;
  totalSelling: number;
  totalBuying: number;
  balance: number;
  balanceInUSD: number;
  walletAdd: string;
};
export type cryptoTransactionType = {
  transactionDate: Date;
  status: "completed" | "pending" | "canceled";
  transactionAmount: number;
  type: "buy" | "sell";
  transactionID: string;
  currency: {
    icon: string;
    cryptoSymbol: string;
  };
};
export type cryptoTokenType = {
  icon: string;
  coinCurrency: string;
  mainCurrency: string;
  tokenAmount: number;
  tokenNumber: number;
  walletAdd: string;
};
export type cryptoTradingType = {
  deal_id: string;
  type: "buy" | "sell";
  currency: {
    icon: string;
    name: string;
  };
  tradeTime: Date;
  status: "completed" | "pending" | "canceled";
  lastTrade: number;
};
export interface userActionsInterface {
  likedCryptos: Array<ISingleCoin | IcryptoData>;
  bookmarkedCryptos: Array<ISingleCoin | IcryptoData>;
  cryptoWallet: cryptoWalletType[];
  cryptoTransactions: cryptoTransactionType[];
  purchasedCryptoTokens: cryptoTokenType[];
  cryptoTadings: cryptoTradingType[];
}

const initialState = {};

const themeReducer = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {},
});
export const {} = themeReducer.actions;
export default themeReducer.reducer;
export const selecttheme = (state: RootState) => {
  return state.theme;
};
