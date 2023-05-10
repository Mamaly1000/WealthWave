import axios from "axios";
import React, { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

interface Inft {
  asset_platform_id: string;
  contract_address: string;
  id: string;
  name: string;
  symbol: string;
}

const useNFT = () => {
  const [nftList, setNftList] = useState<Inft[]>([]);
  const [singleNft, setSingleNft] = useState<Inft>();
  const [loading, setLoading] = useState<boolean>(false);
  const [loacalNFTlist, setLocalNFTlist] = useLocalStorage<Inft[]>(
    "nftList",
    []
  );
  const getNftLst = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/nfts/list?per_page=500`
      );
      if (response.status === 200) {
        setNftList(response.data);
        setLocalNFTlist(response.data);
        setLoading(false);
      }
      if (response.status === 429) {
        setNftList(loacalNFTlist);
        setLoading(false);
      }
    } catch (error) {
      setNftList(loacalNFTlist);
      setLoading(false);
    }
  };
  const getSingleNft = async (name: string) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/nfts/${name}`
      );
      if (response.status === 200) {
        console.log(response.data);
        setSingleNft(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getNftLst,
    getSingleNft,
    loading,
    nftList,
    setLoading,
  };
};

export default useNFT;
