import { createSlice } from "@reduxjs/toolkit";
import { IcryptoData } from "../../hooks/useCrypto";
import { RootState } from "../store/store";
import { toast } from "react-toastify";
import { ISingleCoin } from "../../types/singleCrypto.type";

export interface ItrendCoin {
  item: {
    coin_id: number;
    id: string;
    large: string;
    market_cap_rank: number;
    name: string;
    price_btc: number;
    score: number;
    slug: string;
    small: string;
    symbol: string;
    thumb: string;
  };
}

export interface IviewPageChartData {
  id: string;
  day: number;
  data: {
    prices: number[][];
    market_caps: number[][];
    total_volumes: number[][];
  };
}
interface crypto_slice_interface {
  coinlist: IcryptoData[];
  cryptoLoading: boolean;
  selectedCoin: ISingleCoin;
  cryptoCharts: IviewPageChartData[];
  book_marked_coins: BookmarkedCrypto[];
  trend_coins: ItrendCoin[];
  cryptoSearch: string;
  cryptoChartDisplayType: "prices" | "market-cap" | "total-volumes";
  cryptoDay: number;
}

type BookmarkedCrypto = {
  book_marked: boolean;
} & IcryptoData;

const initialState: crypto_slice_interface = {
  coinlist: [],
  selectedCoin: {
    contract_address: "",
    id: "",
    symbol: "",
    name: "",
    asset_platform_id: null,
    platforms: {},
    detail_platforms: {},
    block_time_in_minutes: 0,
    hashing_algorithm: "",
    categories: [],
    public_notice: "",
    additional_notices: [],
    localization: {},
    description: {
      en: "",
      de: "",
      es: "",
      fr: "",
      it: "",
      pl: "",
      ro: "",
      hu: "",
      nl: "",
      pt: "",
      sv: "",
      vi: "",
      tr: "",
      ru: "",
      ja: "",
      zh: "",
      ko: "",
      ar: "",
      th: "",
      id: "",
      cs: "",
      da: "",
    },
    links: {
      homepage: [],
      blockchain_site: [],
      official_forum_url: [],
      chat_url: [],
      announcement_url: [],
      twitter_screen_name: "",
      facebook_username: "",
      bitcointalk_thread_identifier: null,
      telegram_channel_identifier: "",
      subreddit_url: "",
      repos_url: {},
    },
    image: {
      thumb: "",
      small: "",
      large: "",
    },
    country_origin: "",
    genesis_date: "",
    sentiment_votes_up_percentage: 0,
    sentiment_votes_down_percentage: 0,
    watchlist_portfolio_users: 0,
    market_cap_rank: 0,
    coingecko_rank: 0,
    coingecko_score: 0,
    developer_score: 0,
    community_score: 0,
    liquidity_score: 0,
    public_interest_score: 0,
    market_data: {
      current_price: {
        btc: 0,
        usd: 0,
      },
      total_value_locked: 0,
      mcap_to_tvl_ratio: 0,
      fdv_to_tvl_ratio: 0,
      roi: 0,
      ath: {
        btc: 0,
        usd: 0,
      },
      ath_change_percentage: {
        btc: 0,
        usd: 0,
      },
      ath_date: {
        btc: "",
        usd: "",
      },
      atl: {
        btc: 0,
        usd: 0,
      },
      atl_change_percentage: { btc: 0, usd: 0 },
      atl_date: { btc: "", usd: "" },
      market_cap: { btc: 0, usd: 0 },
      market_cap_rank: 0,
      fully_diluted_valuation: { btc: 0, usd: 0 },
      total_volume: { btc: 0, usd: 0 },
      high_24h: { btc: 0, usd: 0 },
      low_24h: { btc: 0, usd: 0 },
      price_change_24h: 0,
      price_change_percentage_24h: 0,
      price_change_percentage_7d: 0,
      price_change_percentage_14d: 0,
      price_change_percentage_30d: 0,
      price_change_percentage_60d: 0,
      price_change_percentage_200d: 0,
      price_change_percentage_1y: 0,
      market_cap_change_24h: 0,
      market_cap_change_percentage_24h: 0,
      price_change_24h_in_currency: { btc: 0, usd: 0 },
      price_change_percentage_1h_in_currency: { btc: 0, usd: 0 },
      price_change_percentage_24h_in_currency: { btc: 0, usd: 0 },
      price_change_percentage_7d_in_currency: { btc: 0, usd: 0 },
      price_change_percentage_14d_in_currency: { btc: 0, usd: 0 },
      price_change_percentage_30d_in_currency: { btc: 0, usd: 0 },
      price_change_percentage_60d_in_currency: { btc: 0, usd: 0 },
      price_change_percentage_200d_in_currency: { btc: 0, usd: 0 },
      price_change_percentage_1y_in_currency: { btc: 0, usd: 0 },
      market_cap_change_24h_in_currency: { btc: 0, usd: 0 },
      market_cap_change_percentage_24h_in_currency: { btc: 0, usd: 0 },
      total_supply: 0,
      max_supply: 0,
      circulating_supply: 0,
      sparkline_7d: {
        price: [],
      },
      last_updated: "",
    },
    community_data: {
      facebook_likes: 0,
      twitter_followers: 0,
      reddit_average_posts_48h: 0,
      reddit_average_comments_48h: 0,
      reddit_subscribers: 0,
      reddit_accounts_active_48h: 0,
      telegram_channel_user_count: 0,
    },
    developer_data: {
      forks: 0,
      stars: 0,
      subscribers: 0,
      total_issues: 0,
      closed_issues: 0,
      pull_requests_merged: 0,
      pull_request_contributors: 0,
      code_additions_deletions_4_weeks: {
        additions: 0,
        deletions: 0,
      },
      commit_count_4_weeks: 0,
      last_4_weeks_commit_activity_series: [],
    },
    public_interest_stats: {
      alexa_rank: 0,
      bing_matches: 0,
    },
    status_updates: [],
    last_updated: "",
    tickers: [],
  },
  cryptoLoading: false,
  cryptoCharts: [],
  book_marked_coins: [],
  trend_coins: [],
  cryptoSearch: "",
  cryptoChartDisplayType: "prices",
  cryptoDay: 1,
};

const CryptoReducer = createSlice({
  name: "crypto",
  initialState: initialState,
  reducers: {
    fetchCoins: (state, action) => {
      state.coinlist = action.payload;
    },
    fetchTrendCoins: (state, action) => {
      state.trend_coins = action.payload;
    },
    setSelectedCoin: (state, action) => {
      state.selectedCoin = action.payload;
    },
    setCryptoChart: (state, action) => {
      const checkChartID = state.cryptoCharts.find(
        (chart) => chart.id === action.payload.id
      );
      if (!checkChartID) {
        if (state.cryptoCharts.length <= 2) {
          state.cryptoCharts.push(action.payload);
        } else {
          toast.warn("you cant track more than three crypto chart");
        }
      } else {
        // toast.warn("you have already choosed this chart");
      }
    },
    removeCryptoChart: (state, action) => {
      const checkChartID = state.cryptoCharts.findIndex(
        (chart) => chart.id === action.payload
      );
      if (checkChartID > 0) {
        const newArray = state.cryptoCharts.filter(
          (chart) => chart.id !== action.payload
        );
        state.cryptoCharts = newArray;
        toast.success(
          `${action.payload} chart data has been removed successfully`
        );
      } else {
        toast.error("it doesnt fucking work");
      }
    },
    updateCryptoChart: (state, action) => {
      const selectedChart = state.cryptoCharts.filter(
        (c) => c.id !== action.payload.id
      );
      state.cryptoCharts = [
        ...selectedChart,
        {
          id: action.payload.id,
          data: action.payload.data,
          day: action.payload.day,
        },
      ];
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
    setCryptoSearch: (state, action) => {
      state.cryptoSearch = action.payload;
    },
    setEmptyCryptoCharts: (state) => {
      state.cryptoCharts = [];
    },
    setChartType: (state, action) => {
      state.cryptoChartDisplayType = action.payload as
        | "prices"
        | "market-cap"
        | "total-volumes";
    },
    setCryptoDay: (state, action) => {
      state.cryptoDay = action.payload;
    },
  },
});
export const {
  fetchCoins,
  setBookmarkCrypto,
  setCryptoChart,
  setRemoveBookmarkCrypto,
  setSelectedCoin,
  fetchTrendCoins,
  setCryptoSearch,
  setEmptyCryptoCharts,
  setChartType,
  removeCryptoChart,
  updateCryptoChart,
  setCryptoDay,
} = CryptoReducer.actions;
export default CryptoReducer.reducer;
export const selectCrypto = (state: RootState) => {
  return state.crypto;
};
