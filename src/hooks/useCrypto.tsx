import { useEffect, useState } from "react";
import { SingleCoinData, TrendCoins } from "../api/cryptoApi";
import axios from "axios";
import useLocalStorage from "./useLocalStorage";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCoins,
  selectCrypto,
} from "../features/crypto_slice/crypto_slice";
import { toast } from "react-toastify";
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

  const dispatch = useDispatch();
  const cryptosList = useQuery(
    "crypto_list",
    () => {
      return axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=400&page=1&sparkline=false&locale=en`
      );
    },
    {
      // cacheTime: 100000,
      // staleTime: 0,
      // refetchOnWindowFocus: true,
      // refetchOnMount: true,
      // refetchInterval: 100000,
      // enabled: true,
      // onSuccess: () => {
      //   toast.success("data refreshed");
      // },
      // onError: () => {
      //   toast.error("unable to refresh the data");
      // },
    }
  );

  const [loading, setLoading] = useState<boolean>(false);
  const [chartData, setChartData] = useState<unknown[]>([]);
  const [LocalCryptoList, setLoacalCryptoList] = useLocalStorage<IcryptoData[]>(
    "cryptoList",
    []
  );
  const [LocalChartsData, setLocalChartsData] = useLocalStorage<IcryptoChart[]>(
    "charts",
    []
  );

  const getTrendCoins = async (): Promise<void> => {
    try {
      setLoading(true);
      // setTrendCurrencies(await TrendCoins());
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const getSingleCoinData = async (name: string): Promise<void> => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${name}?tickers=false&market_data=true&community_data=true&developer_data=true&sparkline=false
        `
      );
      if (response.status === 200) {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const getChartData = async (name: string): Promise<void> => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${name}/market_chart?vs_currency=usd&days=max`
      );
      if (response.status === 200) {
        console.log(response.data);
        if (LocalChartsData.findIndex((chart) => chart.id === name) < 0) {
          setLocalChartsData([
            ...LocalChartsData,
            {
              id: name,
              data: response.data.prices,
            },
          ]);
        }
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return {
    getTrendCoins,
    getSingleCoinData,
    getChartData,
    loading,
    setChartData,
    chartData,
    cryptosList,
    setLoacalCryptoList,
    LocalCryptoList,
    cryptoSelector,
  };
};

export default useCrypto;
