import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import { AppleNewsALL } from "../api/NewsApi";
import axios from "axios";
const ApiKey: string = "a1e647b111ec4f48bda9ed3617ad3251";
export interface IAppleNews {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string;
}
const useNews = () => {
  const [appleNewsList, setAppleNewsList] = useState<IAppleNews[]>([]);
  const [localAppleNews, setLocalAppleNews] = useLocalStorage<IAppleNews[]>(
    "appleNews",
    []
  );
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

  return {
    getAppleNews,
    appleNewsList,
  };
};

export default useNews;
