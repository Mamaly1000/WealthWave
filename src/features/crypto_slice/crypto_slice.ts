import { createSlice } from "@reduxjs/toolkit";
import { IcryptoData } from "../../hooks/useCrypto";
import { RootState } from "../store/store";
import { toast } from "react-toastify";
import { ISingleCoin } from "../../types/singleCrypto.type";

export interface currencySymbol {
  name: string;
  symbol: string;
}
export type filteringTypes =
  | "crypto-ath"
  | "crypto-ath_change_percentage"
  | "crypto-ath_date"
  | "crypto-atl"
  | "crypto-atl_change_percentage"
  | "crypto-atl_date"
  | "crypto-circulating_supply"
  | "crypto-current_price"
  | "crypto-fully_diluted_valuation"
  | "crypto-high_24h"
  | "crypto-id"
  | "crypto-image"
  | "crypto-last_updated"
  | "crypto-low_24h"
  | "crypto-market_cap"
  | "crypto-market_cap_change_24h"
  | "crypto-market_cap_change_percentage_24h"
  | "crypto-market_cap_rank"
  | "crypto-max_supply"
  | "crypto-name"
  | "crypto-price_change_24h"
  | "crypto-price_change_percentage_24h"
  | "crypto-roi"
  | "crypto-symbol"
  | "crypto-total_supply"
  | "crypto-total_volume";
export type singleFilterType = {
  type: filteringTypes;
  value: {
    type: "date" | "percentage" | "number" | "string";
    min: number;
    max: number;
    strValue: string;
  };
};
export type sortingTypes =
  | "RANK"
  | "NAME"
  | "PRICE"
  | "LOW_24H"
  | "HIGH_24H"
  | "24H"
  | "24H_VOLUME"
  | "MKT_CAP"
  | "N/A";

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
export type cryptoTableDisplayType = "line" | "tree" | "stack";
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
  secondaryData: IcryptoData[];
  cryptoLoading: boolean;
  selectedCoin: ISingleCoin;
  cryptoCharts: IviewPageChartData[];
  book_marked_coins: BookmarkedCrypto[];
  trend_coins: ItrendCoin[];
  cryptoSearch: string;
  cryptoChartDisplayType: "prices" | "market-cap" | "total-volumes";
  cryptoDay: number;
  sortType: {
    type_name: sortingTypes | "";
    mode: "ASC" | "DESC" | "N/A";
  };
  filters: singleFilterType[];
  pagination: {
    total_pages: number;
    current_page: number;
    offset: number;
  };
  currentCurrency: currencySymbol;
  displayType: cryptoTableDisplayType;
}

type BookmarkedCrypto = {
  book_marked: boolean;
} & IcryptoData;

const initialState: crypto_slice_interface = {
  coinlist: [],
  secondaryData: [],
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
  sortType: {
    type_name: "N/A",
    mode: "N/A",
  },
  filters: [],
  pagination: {
    total_pages: 0,
    current_page: 1,
    offset: 10,
  },
  currentCurrency: {
    name: "usd",
    symbol: "$",
  },
  displayType: "line",
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
    sortCryptoTable: (state, action) => {
      if (state.coinlist.length === 0)
        toast.warn("please wait for fetching data !");
      let sortedArray = [...state.coinlist];
      switch (action.payload.type_name as sortingTypes) {
        case "RANK":
          sortedArray = state.coinlist.sort((a, b) => {
            return a.market_cap_rank > b.market_cap_rank ? 1 : -1;
          });

          break;
        case "NAME":
          sortedArray = state.coinlist.sort((a, b) => {
            return a.id > b.id ? 1 : -1;
          });
          break;
        case "PRICE":
          sortedArray = state.coinlist.sort((a, b) => {
            return a.current_price - b.current_price;
          });
          break;
        case "LOW_24H":
          sortedArray = state.coinlist.sort((a, b) => {
            return a.low_24h - b.low_24h;
          });
          break;
        case "HIGH_24H":
          sortedArray = state.coinlist.sort((a, b) => {
            return a.high_24h - b.high_24h;
          });
          break;
        case "24H":
          sortedArray = state.coinlist.sort((a, b) => {
            return (
              a.price_change_percentage_24h - b.price_change_percentage_24h
            );
          });
          break;
        case "24H_VOLUME":
          sortedArray = state.coinlist.sort((a, b) => {
            return a.total_volume - b.total_volume;
          });
          break;
        case "MKT_CAP":
          sortedArray = state.coinlist.sort((a, b) => {
            return a.market_cap - b.market_cap;
          });
          break;
        case "N/A":
          sortedArray.sort((a, b) => {
            return a.market_cap_rank > b.market_cap_rank ? 1 : -1;
          });
          break;
        default:
          state.coinlist = state.coinlist;
      }
      if (state.sortType.type_name === action.payload.type_name) {
        if (action.payload.mode === "DESC") {
          state.coinlist = sortedArray.reverse();
          toast.info(
            `mode:${(action.payload.mode + "").toLowerCase()} / type:${(
              action.payload.type_name + ""
            ).toLowerCase()}`
          );
          state.sortType.mode = action.payload.mode;
          state.sortType.type_name = action.payload.type_name;
        }
        if (action.payload.mode === "N/A" || action.payload.mode === "ASC") {
          state.coinlist = sortedArray;
          toast.info(
            `mode:${(action.payload.mode + "").toLowerCase()} / type:${(
              action.payload.type_name + ""
            ).toLowerCase()}`
          );
          state.sortType.mode = action.payload.mode;
          state.sortType.type_name = action.payload.type_name;
        }
      } else {
        state.coinlist = sortedArray;
        toast.info(
          `mode:${(action.payload.mode + "").toLowerCase()} / type:asc`
        );
        state.sortType.mode = "ASC";
        state.sortType.type_name = action.payload.type_name;
      }
    },
    setCryptoPagination: (state, action) => {
      state.pagination = {
        current_page: action.payload.current_page,
        offset: action.payload.offset,
        total_pages: action.payload.total_pages,
      };
    },
    setCurrentCryptoPage: (state, action) => {
      state.pagination.current_page = action.payload;
    },
    setCryptoPageOffSet: (state, action) => {
      state.pagination.offset = action.payload;
      state.pagination.total_pages = Math.ceil(
        state.coinlist.length / action.payload
      );
    },
    setCurrentCurrency: (state, action) => {
      state.currentCurrency = action.payload;
    },
    setDisplayType: (state, action) => {
      toast.info(`you choosed ${action.payload} display !`);
      state.displayType = action.payload;
    },
    filterCryptoTable: (state, action) => {
      if (state.secondaryData.length === 0) {
        state.secondaryData = state.coinlist;
      }
      let filteredData = [...state.coinlist];
      const checkingFilterIndex = state.filters.findIndex(
        (f) => f.type === action.payload.type
      );
      const selectedFilter = state.filters.find(
        (filter) => filter.type === action.payload.type
      );
      let newFilters = [...state.filters];
      if (action.payload.entryType === "add") {
        if (checkingFilterIndex > 0) {
          state.filters[checkingFilterIndex] = {
            type: action.payload.type,
            value: action.payload.value,
          };
          newFilters[checkingFilterIndex] = {
            type: action.payload.type,
            value: action.payload.value,
          };
        } else {
          state.filters.push(action.payload);
          newFilters.push(action.payload);
        }
        filter();
      }
      if (action.payload.entryType === "delete") {
        const updatedFilters = newFilters.filter(
          (filter) => filter.type !== selectedFilter?.type
        );
        toast.warn(`you removed ${selectedFilter?.type} filter`);
        state.filters = updatedFilters;
        newFilters = updatedFilters;
        filter();
      }
      if (action.payload.entryType === "delete-all") {
        state.coinlist = state.secondaryData;
        state.filters = [];
      }
      if (action.payload.entryType === "filter-all") {
        const filters: typeof state.filters = action.payload.data;
        newFilters = filters;
        if (newFilters.length > 0) {
          filter();
        }
      }
      function filter() {
        for (const filterItem of newFilters) {
          if (filterItem.type === "crypto-ath") {
            const filter_by_ath = filteredData.filter((coin) => {
              return (
                coin.ath >= filterItem.value.min &&
                coin.ath <= filterItem.value.max
              );
            });
            filteredData = filter_by_ath;
            toast.success(
              "coins have been filtered by their ath(all-time-high) price"
            );
          } else if (filterItem.type === "crypto-atl") {
            const filter_by_atl = filteredData.filter((coin) => {
              return (
                coin.atl >= filterItem.value.min &&
                coin.atl <= filterItem.value.max
              );
            });
            filteredData = filter_by_atl;
            toast.success(
              "coins have been filtered by their atl(all-time-low) price"
            );
          } else if (filterItem.type === "crypto-ath_change_percentage") {
            const filter_by_ath_percentage = filteredData.filter(
              (coin) =>
                coin.ath_change_percentage <= filterItem.value.max &&
                coin.ath_change_percentage >= filterItem.value.min
            );
            filteredData = filter_by_ath_percentage;
            toast.success(
              "coins have been filtered by their all-time-high-percentage-change"
            );
          } else if (filterItem.type === "crypto-atl_change_percentage") {
            const filter_by_atl_percantage = filteredData.filter(
              (coin) =>
                +coin.atl_change_percentage >= filterItem.value.min &&
                +coin.atl_change_percentage <= filterItem.value.max
            );
            filteredData = filter_by_atl_percantage;
            toast.success(
              "coins have been filtered by all-time-high-change-percentage"
            );
          } else if (filterItem.type === "crypto-circulating_supply") {
            const filter_by_circ_supply = filteredData.filter(
              (coin) =>
                coin.circulating_supply <= filterItem.value.max &&
                coin.circulating_supply >= filterItem.value.min
            );
            filteredData = filter_by_circ_supply;
            toast.success(
              "coins have been filtered by their circulating-supply"
            );
          } else if (filterItem.type === "crypto-current_price") {
            const filter_by_price = filteredData.filter(
              (coin) =>
                coin.current_price >= filterItem.value.min &&
                coin.current_price <= filterItem.value.max
            );
            filteredData = filter_by_price;
            toast.success("coins have been filtered by their price");
          } else if (filterItem.type === "crypto-fully_diluted_valuation") {
            const filter_by_fully_diluted_valuation = filteredData.filter(
              (coin) =>
                coin.fully_diluted_valuation <= filterItem.value.max &&
                coin.fully_diluted_valuation >= filterItem.value.min
            );
            filteredData = filter_by_fully_diluted_valuation;
            toast.success(
              "coins have been filtered by their fully-diluted-valuation"
            );
          } else if (filterItem.type === "crypto-high_24h") {
            const filter_by_high_24 = filteredData.filter(
              (coin) =>
                coin.high_24h >= filterItem.value.min &&
                coin.high_24h <= filterItem.value.max
            );
            filteredData = filter_by_high_24;
            toast.success("coins have been filtered by their hight-24 price");
          } else if (filterItem.type === "crypto-low_24h") {
            const filter_by_low_24 = filteredData.filter(
              (coin) =>
                coin.low_24h >= filterItem.value.min &&
                coin.low_24h <= filterItem.value.max
            );
            filteredData = filter_by_low_24;
            toast.success("coins have been filtered by their low-24 price");
          } else if (filterItem.type === "crypto-id") {
            const filter_by_id = filteredData.filter((coin) =>
              coin.id
                .toLowerCase()
                .includes(filterItem.value.strValue.toLowerCase())
            );
            filteredData = filter_by_id;
            toast.success(
              `coins have been filtered by their id. id=${filterItem.value.strValue}`
            );
          } else if (filterItem.type === "crypto-market_cap") {
            const filter_by_mkt = filteredData.filter(
              (coin) =>
                coin.market_cap >= filterItem.value.min &&
                coin.market_cap <= filterItem.value.max
            );
            filteredData = filter_by_mkt;
            toast.success("coins have been filtered by their market-cap");
          } else if (filterItem.type === "crypto-market_cap_change_24h") {
            const filter_by_market_cap_change_24h = filteredData.filter(
              (coin) =>
                coin.market_cap_change_24h >= filterItem.value.min &&
                coin.market_cap_change_24h <= filterItem.value.max
            );
            filteredData = filter_by_market_cap_change_24h;
            toast.success(
              "coins have been filtered by their market_cap_change_24h"
            );
          } else if (
            filterItem.type === "crypto-market_cap_change_percentage_24h"
          ) {
            const filter_by_market_cap_change_percentage_24h =
              filteredData.filter(
                (coin) =>
                  coin.market_cap_change_percentage_24h >=
                    filterItem.value.min &&
                  coin.market_cap_change_percentage_24h <= filterItem.value.max
              );
            filteredData = filter_by_market_cap_change_percentage_24h;
            toast.success(
              "coins have been filtered by their market_cap_change_percentage_24h"
            );
          } else if (filterItem.type === "crypto-market_cap_rank") {
            const filter_by_market_cap_rank = filteredData.filter(
              (coin) =>
                coin.market_cap_rank >= filterItem.value.min &&
                coin.market_cap_rank <= filterItem.value.max
            );
            filteredData = filter_by_market_cap_rank;
            toast.success("coins have been filtered by their market-cap rank");
          } else if (filterItem.type === "crypto-max_supply") {
            const filter_by_max_supply = filteredData.filter(
              (coin) =>
                coin.max_supply >= filterItem.value.min &&
                coin.max_supply <= filterItem.value.max
            );
            filteredData = filter_by_max_supply;
            toast.success("coins have been filtered by their max_supply");
          } else if (filterItem.type === "crypto-name") {
            const filter_by_name = filteredData.filter((coin) =>
              coin.name
                .toLowerCase()
                .includes(filterItem.value.strValue.toLowerCase())
            );
            filteredData = filter_by_name;
            toast.success("coins have been filtered by their name");
          } else if (filterItem.type === "crypto-price_change_24h") {
            const filter_by_price_change_24h = filteredData.filter(
              (coin) =>
                coin.price_change_24h <= filterItem.value.max &&
                coin.price_change_24h >= filterItem.value.min
            );
            filteredData = filter_by_price_change_24h;
            toast.success("coins have been filtered by their price_change_24h");
          } else if (filterItem.type === "crypto-price_change_percentage_24h") {
            const filter_by_price_change_percentage_24h = filteredData.filter(
              (coin) =>
                coin.price_change_percentage_24h >= filterItem.value.min &&
                coin.price_change_percentage_24h <= filterItem.value.max
            );
            filteredData = filter_by_price_change_percentage_24h;
            toast.success(
              "coins have been filtered by their price_change_percentage_24h"
            );
          } else if (filterItem.type === "crypto-roi") {
            const filter_by_roi = filteredData.filter(
              (coin) =>
                coin.roi &&
                coin.roi.percentage >= filterItem.value.min &&
                coin.roi.percentage <= filterItem.value.max
            );
            filteredData = filter_by_roi;
            toast.success("coins have been filtered by their roi");
          } else if (filterItem.type === "crypto-symbol") {
            const filter_by_symbol = filteredData.filter((coin) =>
              coin.symbol
                .toLowerCase()
                .includes(filterItem.value.strValue.toLowerCase())
            );
            filteredData = filter_by_symbol;
            toast.success("coins have been filtered by their symbol");
          } else if (filterItem.type === "crypto-total_supply") {
            const filter_by_total_supply = filteredData.filter(
              (coin) =>
                coin.total_supply >= filterItem.value.min &&
                coin.total_supply <= filterItem.value.max
            );
            filteredData = filter_by_total_supply;
            toast.success("coins have been filtered by their total_supply");
          } else if (filterItem.type === "crypto-total_volume") {
            const filter_by_total_volume = filteredData.filter(
              (coin) =>
                coin.total_volume >= filterItem.value.min &&
                coin.total_volume <= filterItem.value.max
            );
            filteredData = filter_by_total_volume;
            toast.success("coins have been filtered by their total_volume");
          }
        }
        if (newFilters.length === 0) {
          toast.warn("you removed all filters !");
          filteredData = state.secondaryData;
        }
        state.coinlist = filteredData;
      }
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
  sortCryptoTable,
  setCryptoPagination,
  setCurrentCryptoPage,
  setCryptoPageOffSet,
  setCurrentCurrency,
  setDisplayType,
  filterCryptoTable,
} = CryptoReducer.actions;
export default CryptoReducer.reducer;
export const selectCrypto = (state: RootState) => {
  return state.crypto;
};
