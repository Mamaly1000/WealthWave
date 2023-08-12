import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import {
  AppleNewsALL,
  AppleNewsHeadLines,
  TeslaNewsALL,
  TeslaNewsHeadLines,
  Top_business_headlines,
  Top_business_headlines_tech_crunch_HeadLines,
  Top_business_headlines_tech_crunch_everything,
  WallStreetJournal_News,
} from "../api/NewsApi";
import axios from "axios";
import { useQuery } from "react-query";
export interface IAppleNews {
  author: string | null;
  content: string | null;
  description: string | null;
  publishedAt: string | null;
  source: { id: string | null; name: string | null };
  title: string | null;
  url: string | null;
  urlToImage: string | null;
}
const useNews = () => {
  const ApiKey: string = "a1e647b111ec4f48bda9ed3617ad3251";
  const [appleNewsList, setAppleNewsList] = useState<IAppleNews[]>([]);
  const [localAppleNews, setLocalAppleNews] = useLocalStorage<IAppleNews[]>(
    "appleNews",
    []
  );
  const [wallStreetNews, setWallStreetNews] = useState<unknown[]>([]);
  const [localWallStreetNews, setLocalWallStreetNews] = useLocalStorage<
    IAppleNews[]
  >("wallstreetNews", []);
  const [loading, setLoading] = useState<boolean>(false);
  const getAppleNews = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=apple&from=2023-04-26&to=2023-04-26&sortBy=popularity&apiKey=${ApiKey}`
      );
      if (response.status === 200) {
        setAppleNewsList(response.data.articles);
        setLocalAppleNews(response.data.articles);
      }
      if (response.status === 429) {
        if (localAppleNews.length > 0) setAppleNewsList(localAppleNews);
      }
    } catch (error) {
      setAppleNewsList(localAppleNews);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const getWallStreetNews = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${ApiKey}`
      );
      if (response.status === 200) {
        setWallStreetNews(response.data.articles);
        setLocalWallStreetNews(response.data.articles);
      }
      if (response.status === 429) {
        setWallStreetNews(localWallStreetNews);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const get_AppleNewsALL = (
    name: string,
    cacheTime: number,
    enabled: boolean,
    onError: () => void,
    onSuccess: (data: any) => void,
    retry: boolean,
    refetchOnMount: boolean,
    refetchOnReconnect: boolean,
    refetchOnWindowFocus: boolean
  ) => {
    return useQuery([name], AppleNewsALL, {
      cacheTime,
      enabled,
      onError,
      onSuccess,
      retry,
      refetchOnMount,
      refetchOnReconnect,
      refetchOnWindowFocus,
    });
  };
  const get_AppleNewsHeadLines = (
    name: string,
    cacheTime: number,
    enabled: boolean,
    onError: () => void,
    onSuccess: (data: any) => void,
    retry: boolean,
    refetchOnMount: boolean,
    refetchOnReconnect: boolean,
    refetchOnWindowFocus: boolean
  ) => {
    return useQuery([name], AppleNewsHeadLines, {
      cacheTime,
      enabled,
      onError,
      onSuccess,
      retry,
      refetchOnMount,
      refetchOnReconnect,
      refetchOnWindowFocus,
    });
  };
  const get_TeslaNewsALL = (
    name: string,
    cacheTime: number,
    enabled: boolean,
    onError: () => void,
    onSuccess: (data: any) => void,
    retry: boolean,
    refetchOnMount: boolean,
    refetchOnReconnect: boolean,
    refetchOnWindowFocus: boolean
  ) => {
    return useQuery([name], TeslaNewsALL, {
      cacheTime,
      enabled,
      onError,
      onSuccess,
      retry,
      refetchOnMount,
      refetchOnReconnect,
      refetchOnWindowFocus,
    });
  };
  const get_TeslaNewsHeadLines = (
    name: string,
    cacheTime: number,
    enabled: boolean,
    onError: () => void,
    onSuccess: (data: any) => void,
    retry: boolean,
    refetchOnMount: boolean,
    refetchOnReconnect: boolean,
    refetchOnWindowFocus: boolean
  ) => {
    return useQuery([name], TeslaNewsHeadLines, {
      cacheTime,
      enabled,
      onError,
      onSuccess,
      retry,
      refetchOnMount,
      refetchOnReconnect,
      refetchOnWindowFocus,
    });
  };
  const get_Top_business_headlines = (
    name: string,
    cacheTime: number,
    enabled: boolean,
    onError: () => void,
    onSuccess: (data: any) => void,
    retry: boolean,
    refetchOnMount: boolean,
    refetchOnReconnect: boolean,
    refetchOnWindowFocus: boolean
  ) => {
    return useQuery([name], Top_business_headlines, {
      cacheTime,
      enabled,
      onError,
      onSuccess,
      retry,
      refetchOnMount,
      refetchOnReconnect,
      refetchOnWindowFocus,
    });
  };
  const get_Top_business_headlines_tech_crunch_everything = (
    name: string,
    cacheTime: number,
    enabled: boolean,
    onError: () => void,
    onSuccess: (data: any) => void,
    retry: boolean,
    refetchOnMount: boolean,
    refetchOnReconnect: boolean,
    refetchOnWindowFocus: boolean
  ) => {
    return useQuery([name], Top_business_headlines_tech_crunch_everything, {
      cacheTime,
      enabled,
      onError,
      onSuccess,
      retry,
      refetchOnMount,
      refetchOnReconnect,
      refetchOnWindowFocus,
    });
  };
  const get_Top_business_headlines_tech_crunch_HeadLines = (
    name: string,
    cacheTime: number,
    enabled: boolean,
    onError: () => void,
    onSuccess: (data: any) => void,
    retry: boolean,
    refetchOnMount: boolean,
    refetchOnReconnect: boolean,
    refetchOnWindowFocus: boolean
  ) => {
    return useQuery([name], Top_business_headlines_tech_crunch_HeadLines, {
      cacheTime,
      enabled,
      onError,
      onSuccess,
      retry,
      refetchOnMount,
      refetchOnReconnect,
      refetchOnWindowFocus,
    });
  };
  const get_WallStreetJournal_News = (
    name: string,
    cacheTime: number,
    enabled: boolean,
    onError: () => void,
    onSuccess: (data: any) => void,
    retry: boolean,
    refetchOnMount: boolean,
    refetchOnReconnect: boolean,
    refetchOnWindowFocus: boolean
  ) => {
    return useQuery([name], WallStreetJournal_News, {
      cacheTime,
      enabled,
      onError,
      onSuccess,
      retry,
      refetchOnMount,
      refetchOnReconnect,
      refetchOnWindowFocus,
    });
  };
  return {
    getAppleNews,
    appleNewsList,
    getWallStreetNews,
    get_Top_business_headlines,
    get_Top_business_headlines_tech_crunch_everything,
    get_Top_business_headlines_tech_crunch_HeadLines,
    get_WallStreetJournal_News,
    get_TeslaNewsHeadLines,
    get_TeslaNewsALL,
    get_AppleNewsHeadLines,
    get_AppleNewsALL,
    localWallStreetNews,
    localAppleNews,
    setLocalAppleNews,
  };
};

export default useNews;
