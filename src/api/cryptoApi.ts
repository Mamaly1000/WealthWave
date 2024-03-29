import axios from "axios";

export const AllCoinList = async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en"
    );
    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
export const SingleCoinData = async (name: string) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${name}?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true
      `
    );
    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const TrendCoins = async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    if (response.status === 200) {
      console.log(response.data.coins);
      return response.data.coins;
    }
  } catch (error) {
    console.log(error);
  }
};

export const NFTList = async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/nfts/list?per_page=400"
    );
    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
export const SingleNft = async (name: string) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/nfts/${name}`
    );
    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
