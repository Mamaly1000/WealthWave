import React from "react";
import axios from "axios";
import useLocalStorage from "./useLocalStorage";
import { useQuery, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import {
  ItrendCoin,
  selectCrypto,
  setCryptoChart,
} from "../features/crypto_slice/crypto_slice";
import { IchartDataSet } from "../components/cryto-table/CryptoChart";
import { toast } from "react-toastify";
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
const useCrypto = () => {
  const cryptoSelector = useSelector(selectCrypto);
  const QueryClient = useQueryClient();
  const dispatch = useDispatch();
  const cryptosList = (
    onSuccess?: () => void,
    onError?: () => void,
    enabled?: boolean,
    refetchOnWindowFocus?: boolean,
    refetchOnMount?: boolean,
    cacheTime?: number
  ) => {
    return useQuery(
      "crypto_list",
      () => {
        return axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=400&page=1&sparkline=true&locale=en`
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
  const chartLists = (
    name: string,
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
          `https://api.coingecko.com/api/v3/coins/${name}/market_chart?vs_currency=usd&days=max`
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
  const getChartData = async (name: string): Promise<void> => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${name}/market_chart?vs_currency=usd&days=max`
      );
      if (response.status === 200) {
        console.log(response.data);
        if (
          LocalChartsData.findIndex((chart) => chart.id === name) < 0 ||
          LocalChartsData2.findIndex((chart) => chart.id === name) < 0
        ) {
          if (LocalChartsData.length > 50) {
            setLocalChartsData2([
              ...LocalChartsData2,
              {
                id: name,
                data: response.data.prices,
              },
            ]);
          } else {
            setLocalChartsData([
              ...LocalChartsData,
              {
                id: name,
                data: response.data.prices,
              },
            ]);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
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

  const getTrendCoins = (
    onSuccess?: () => void,
    onError?: () => void,
    enabled?: boolean,
    refetchOnWindowFocus?: boolean,
    refetchOnMount?: boolean,
    cacheTime?: number
  ) => {
    return useQuery(
      "trend-coins",
      () => {
        return axios.get("https://api.coingecko.com/api/v3/search/trending");
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
  const getSelectedChart = (id: string) => {
    const { data } = chartLists(
      id,
      () => {
        toast.success(`success to get ${id} chart data`);
      },
      () => {
        toast.error(`failed to get ${id} chart data`);
      },
      true,
      false,
      false,
      0
    );
    if (data) {
      dispatch(setCryptoChart({ id: id, data: data.data }));
    }
  };
  return {
    getTrendCoins,
    getSingleCoinData,
    getChartData,
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
    getSelectedChart,
  };
};

export default useCrypto;
