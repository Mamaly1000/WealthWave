import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import { AppleNewsALL } from "../api/NewsApi";
import axios from "axios";

const useNews = () => {
  const [appleNewsList, setAppleNewsList] = useState<unknown[]>([]);
  const [localAppleNews, setLocalAppleNews] = useLocalStorage<unknown[]>(
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
        setLoading(false);
      }
    } catch (error) {
      setAppleNewsList(localAppleNews);
      setLoading(false);
      console.log(error);
    }
  };

  return {
    getAppleNews,
    appleNewsList,
  };
};

export default useNews;
