import axios from "axios";
import React, { useEffect, useState } from "react";

const useNFT = () => {
  const [nftList, setNftList] = useState<unknown[]>([]);
  const [singleNft, setSingleNft] = useState<unknown>({});
  const getNftLst = async (limit: number) => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/nfts/list?per_page=${limit}`
      );
      setNftList(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getSingleNft = async (name: string) => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/nfts/${name}`
      );
      if (response.status === 200) {
        console.log(response.data);
        setSingleNft(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getNftLst,
    getSingleNft,
  };
};

export default useNFT;
