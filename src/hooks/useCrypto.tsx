import React from "react";
import axios from "axios";
import useLocalStorage from "./useLocalStorage";
import { useQuery, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import {
  ItrendCoin,
  fetchCoins,
  fetchTrendCoins,
  selectCrypto,
} from "../features/crypto_slice/crypto_slice";
import { IchartDataSet } from "../components/cryto-table/CryptoChart";
import { btc_chart_data } from "../Data/charts";
export interface IcryptoData {
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: string;
  atl_date: string;
  circulating_supply: number;
  current_price: number;
  fully_diluted_valuation: number;
  high_24h: number;
  id: string;
  image: string;
  last_updated: string;
  low_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  max_supply: number;
  name: string;
  price_change_24h: number;
  price_change_percentage_24h: number;
  roi: null;
  sparkline_in_7d?: { price: number[] };
  symbol: string;
  total_supply: number;
  total_volume: number;
}
export interface IcryptoChart {
  id: string | number;
  data: [number, number][];
}
export const fetchChart = async (name: string, day: number) => {
  const res = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${name}/market_chart?vs_currency=usd&days=${day}`
  );
  return res?.data;
};
const useCrypto = () => {
  const cryptoSelector = useSelector(selectCrypto);
  const QueryClient = useQueryClient();
  const dispatch = useDispatch();
  const [LocalCryptoList, setLoacalCryptoList] = useLocalStorage<IcryptoData[]>(
    "cryptoList",
    []
  );
  const [LocalChartsData, setLocalChartsData] = useLocalStorage<IcryptoChart[]>(
    "charts",
    []
  );
  const [LocalChartsData2, setLocalChartsData2] = useLocalStorage<
    IcryptoChart[]
  >("charts2", []);
  const [localTrendCryptoList, setTrendCryptoList] = useLocalStorage<
    ItrendCoin[]
  >("trendCoins", []);
  const cryptosList = (
    cache_name: string,
    enable: boolean,
    refetchOnMount: boolean
  ) => {
    return useQuery(
      `${cache_name}`,
      () => {
        return axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=400&page=1&sparkline=true&locale=en`
        );
      },
      {
        cacheTime: 50000,
        refetchOnMount: refetchOnMount,
        enabled: enable,
        onSuccess: (data) => {
          dispatch(fetchCoins(data.data));
          setLoacalCryptoList(data.data);
        },
        onError: () => {
          dispatch(fetchCoins(LocalCryptoList));
        },
      }
    );
  };
  const chartLists = (
    name: string,
    day: number,
    onSuccess?: (data: unknown) => void,
    onError?: () => void,
    enabled?: boolean,
    refetchOnWindowFocus?: boolean,
    refetchOnMount?: boolean,
    cacheTime?: number
  ) => {
    return useQuery(
      ["charts-data", name],
      () => {
        return axios.get(
          `https://api.coingecko.com/api/v3/coins/${name}/market_chart?vs_currency=usd&days=${day}`
        );
      },
      {
        cacheTime: cacheTime,
        refetchOnWindowFocus: refetchOnWindowFocus,
        refetchOnMount: refetchOnMount,
        enabled: enabled,
        onSuccess,
        onError,
      }
    );
  };
  const chartValidation = (
    id: string,
    setDataSets: React.Dispatch<React.SetStateAction<IchartDataSet[]>>,
    data: IchartDataSet[],
    borderColor: string,
    sparkline?: number[]
  ) => {
    if (!sparkline) {
      setDataSets([
        {
          data: btc_chart_data.prices.slice(0, 60).map((coin) => coin[1]),
          label: `Price ( Past 20 Days ) in ${"USD"}`,
          borderColor: borderColor,
          borderWidth: 1.1,
          tension: 0.1,
        },
      ]);
    }
  };
  const getTrendCoins = () => {
    return useQuery(
      "trend-coins",
      () => {
        return axios.get("https://api.coingecko.com/api/v3/search/trending");
      },
      {
        cacheTime: 50000,
        refetchOnMount: true,
        enabled: true,
        onSuccess: (data) => {
          dispatch(fetchTrendCoins(data.data.coins));
          setTrendCryptoList(data.data.coins);
        },
        onError: () => {
          dispatch(fetchTrendCoins(localTrendCryptoList));
        },
      }
    );
  };
  const getSingleCoinData = (
    name: string,
    onSuccess?: (data: unknown) => void,
    onError?: () => void,
    enabled?: boolean,
    refetchOnWindowFocus?: boolean,
    refetchOnMount?: boolean,
    cacheTime?: number
  ) => {
    return useQuery(
      ["single-crypto-detail", name],
      () => {
        return axios.get(
          `https://api.coingecko.com/api/v3/coins/${name}?market_data=true&community_data=true&developer_data=false&sparkline=true
        `
        );
      },
      {
        cacheTime: cacheTime,
        refetchOnWindowFocus: refetchOnWindowFocus,
        refetchOnMount: refetchOnMount,
        enabled: enabled,
        onSuccess,
        onError,
        initialData: () => {
          const coinData = QueryClient.getQueryData(
            "single-crypto-detail"
          )?.data?.find((name: string) => (name.id as string) === name);
          if (coinData) {
            return { data: coinData };
          } else {
            return undefined;
          }
        },
      }
    );
  };
  const getCryptoPercentage = (id: string): unknown => {
    const selectedCoin = cryptoSelector.coinlist.findIndex(
      (coin) => coin.id === id
    );
    if (selectedCoin < 0) {
      return;
    } else {
      return cryptoSelector.coinlist[selectedCoin].price_change_percentage_24h;
    }
  };
  return {
    getTrendCoins,
    getSingleCoinData,
    cryptosList,
    setLoacalCryptoList,
    LocalCryptoList,
    cryptoSelector,
    chartLists,
    LocalChartsData,
    setLocalChartsData,
    chartValidation,
    setTrendCryptoList,
    localTrendCryptoList,
    getCryptoPercentage,
    LocalChartsData2,
    setLocalChartsData2,
  };
};

export default useCrypto;
