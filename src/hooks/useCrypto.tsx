import React, { useState } from "react";
import {
  AllCoinList,
  CoinChart,
  SingleCoinData,
  TrendCoins,
} from "../api/cryptoApi";

const useCrypto = () => {
  const [trendCurrencies, setTrendCurrencies] = useState<unknown[]>([]);
  const [cryptoList, setCryptoList] = useState<unknown[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [singleCoinData, setSingleCoinData] = useState({});
  const [chartData, setChartData] = useState<unknown[]>([]);

  const getAllcoins = async (): Promise<void> => {
    try {
      setLoading(true);
      setCryptoList(await AllCoinList());
      setLoading(false);
    } catch (error) {
      console.log(error);
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
  };
};

export default useCrypto;
