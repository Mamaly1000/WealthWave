import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { IcryptoData } from "../../hooks/useCrypto";
import { ISingleCoin } from "../../types/singleCrypto.type";
import { toast } from "react-toastify";
export type cryptoWalletType = {
  icon: string;
  symbol: string;
  marketCap: number;
  totalSelling: number;
  totalBuying: number;
  balance: number;
  balanceInUSD: number;
  walletAdd: string;
  amount: number;
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
export type cryptoExchangeType = {
  from: string;
  to: string;
  amount: number;
  date: Date;
  exchangedCoin: IcryptoData;
};
export interface userActionsInterface {
  likedCryptos: Array<ISingleCoin | IcryptoData>;
  bookmarkedCryptos: Array<ISingleCoin | IcryptoData>;
  cryptoWallet: cryptoWalletType[];
  cryptoTransactions: cryptoTransactionType[];
  purchasedCryptoTokens: cryptoTokenType[];
  cryptoTadings: cryptoTradingType[];
  cryptoExchanges: cryptoExchangeType[];
}

const initialState: userActionsInterface = {
  likedCryptos: [],
  bookmarkedCryptos: [],
  cryptoWallet: [],
  cryptoTransactions: [],
  purchasedCryptoTokens: [],
  cryptoTadings: [],
  cryptoExchanges: [],
};

const userActionsReducer = createSlice({
  name: "userActions",
  initialState: initialState,
  reducers: {
    setLikedCryptos: (state, action) => {
      if (action.payload.id) {
        const selectedCrypto = state.likedCryptos.findIndex(
          (c) => c.id === action.payload.id
        );
        if (action.payload.type === "none") {
          if (selectedCrypto > 0) {
            const newarray = state.likedCryptos.filter(
              (c) => c.id !== action.payload.id
            );
            state.likedCryptos = newarray;
          } else {
            state.likedCryptos.push(action.payload.coin as IcryptoData);
            toast.success(`${action.payload.coin.name} unliked !`);
          }
        }
      }
      if (action.payload.coins) {
        if (action.payload.type === "add") {
          for (const iterator of action.payload.coins as
            | IcryptoData[]
            | ISingleCoin[]) {
            if (
              state.likedCryptos.some((val) => {
                return val?.id === iterator.id;
              })
            ) {
              toast.warn(`you already liked ${iterator.name} coin!`);
            } else {
              state.likedCryptos.push(iterator);
            }
          }
        }
        if (action.payload.type === "delete") {
          for (const iterator of action.payload.coins as
            | IcryptoData[]
            | ISingleCoin[]) {
            if (
              !state.likedCryptos.some((val) => {
                return val?.id === iterator.id;
              })
            ) {
              toast.warn(`you didint liked ${iterator.name} coin!`);
            } else {
              const newArray = state.likedCryptos.filter(
                (c) => iterator.id !== c.id
              );
              state.likedCryptos = newArray;
            }
          }
        }
      }
    },
    setBookmarkCryptos: (state, action) => {
      if (action.payload.id) {
        const selectedCrypto = state.bookmarkedCryptos.findIndex(
          (c) => c.id === action.payload.id
        );
        if (action.payload.type === "none") {
          if (selectedCrypto > 0) {
            const newarray = state.bookmarkedCryptos.filter(
              (c) => c.id !== action.payload.id
            );
            state.bookmarkedCryptos = newarray;
            toast.success(`${action.payload.coin.name} unbookmarked !`);
          } else {
            state.bookmarkedCryptos.push(action.payload.coin as IcryptoData);
            toast.success(`${action.payload.coin.name} bookmarked !`);
          }
        }
      }
      if (action.payload.coins) {
        if (action.payload.type === "add") {
          for (const iterator of action.payload.coins as
            | IcryptoData[]
            | ISingleCoin[]) {
            if (
              state.bookmarkedCryptos.some((val) => {
                return val?.id === iterator.id;
              })
            ) {
              toast.warn(`you already bookmarked ${iterator.name} coin!`);
            } else {
              state.bookmarkedCryptos.push(iterator);
              toast.success(
                `you successfully bookmarked ${iterator.name} coin!`
              );
            }
          }
        }
        if (action.payload.type === "delete") {
          for (const iterator of action.payload.coins as
            | IcryptoData[]
            | ISingleCoin[]) {
            if (
              !state.bookmarkedCryptos.some((val) => {
                return val?.id === iterator.id;
              })
            ) {
              toast.warn(`you didnt bookmarked ${iterator.name} coin!`);
            } else {
              const newArray = state.bookmarkedCryptos.filter(
                (c) => iterator.id !== c.id
              );
              state.bookmarkedCryptos = newArray;
              toast.success(`you unbookmarked ${iterator.name} coin!`);
            }
          }
        }
      }
    },
  },
});
export const { setLikedCryptos, setBookmarkCryptos } =
  userActionsReducer.actions;
export default userActionsReducer.reducer;
export const selectUserActions = (state: RootState) => {
  return state.userActions;
};
