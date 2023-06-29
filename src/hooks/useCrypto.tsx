import React, { useEffect, useState } from "react";
import {
  AllCoinList,
  CoinChart,
  SingleCoinData,
  TrendCoins,
} from "../api/cryptoApi";
import axios from "axios";
import useLocalStorage from "./useLocalStorage";

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

const useCrypto = () => {
  const [trendCurrencies, setTrendCurrencies] = useState<unknown[]>([]);
  const [cryptoList, setCryptoList] = useState<IcryptoData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [singleCoinData, setSingleCoinData] = useState({});
  const [chartData, setChartData] = useState<unknown[]>([]);
  const [LocalCryptoList, setLoacalCryptoList] = useLocalStorage<IcryptoData[]>(
    "cryptoList",
    []
  );
  const getAllcoins = async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=400&page=1&sparkline=false&locale=en`
      );
      console.log(response);
      if (response.status === 200) {
        setCryptoList(response.data);
        setLoacalCryptoList(response.data);
        setLoading(false);
      }
      if (response.status === 429) {
        setCryptoList(LocalCryptoList);
        setLoading(false);
      }
    } catch (error) {
      setCryptoList(LocalCryptoList);
      setLoading(false);
    }
  };
  const getTrendCoins = async (): Promise<void> => {
    try {
      setLoading(true);
      setTrendCurrencies(await TrendCoins());
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const getSingleCoinData = async (name: string): Promise<void> => {
    try {
      setLoading(true);
      setSingleCoinData(await SingleCoinData(name));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const getChartData = async (
    name: string,
    currency: string,
    day: string
  ): Promise<void> => {
    try {
      setLoading(true);
      setChartData(await CoinChart(name, currency, day));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const popCrypto = (id: string) => {
    if (cryptoList.length > 0) {
      const newArray = cryptoList.filter((c) => c.id !== id);
      setCryptoList(newArray);
      console.log("removed item:" + id, "array list:" + newArray);
      console.log(newArray);
    } else {
      console.log("nothing here");
    }
  };
  return {
    getAllcoins,
    getTrendCoins,
    getSingleCoinData,
    getChartData,
    trendCurrencies,
    cryptoList,
    loading,
    singleCoinData,
    chartData,
    setCryptoList,
    popCrypto,
  };
};

export default useCrypto;
