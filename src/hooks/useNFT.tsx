import axios from "axios";
import useLocalStorage from "./useLocalStorage";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import {
  INFT,
  fetchNFTs,
  fetchSingleNFT,
  selectNFT,
} from "../features/nft_slice/nft_slice";

const useNFT = () => {
  const nftSelector = useSelector(selectNFT);
  const dispatch = useDispatch();
  const [loacalNFTlist, setLocalNFTlist] = useLocalStorage<INFT[]>(
    "nftList",
    []
  );
  const [loacalSingleNFTlist, setLocalSingleNFTlist] = useLocalStorage<
    INFT | {}
  >("last_checked_nft", {});
  const getNftLst = (
    name: string,
    enabled: boolean,
    refetchOnMount: boolean,
    refetchOnReconnect: boolean,
    refetchOnWindowFocus: boolean,
    cacheTime: number
  ) => {
    return useQuery(
      [name],
      () => {
        return axios.get(
          `https://api.coingecko.com/api/v3/nfts/list?per_page=500`
        );
      },
      {
        onSuccess: (data) => {
          dispatch(fetchNFTs(data.data));
          setLocalNFTlist(data.data);
        },
        onError: () => {
          dispatch(fetchNFTs(loacalNFTlist));
        },
        enabled,
        refetchOnMount,
        refetchOnReconnect,
        refetchOnWindowFocus,
        cacheTime,
      }
    );
  };
  const getSingleNft = (
    name: string,
    enabled: boolean,
    refetchOnMount: boolean,
    refetchOnReconnect: boolean,
    refetchOnWindowFocus: boolean,
    cacheTime: number
  ) => {
    return useQuery(
      ["all-single-nft-data", name],
      () => {
        return axios.get(`https://api.coingecko.com/api/v3/nfts/${name}`);
      },
      {
        onSuccess: (data) => {
          dispatch(fetchSingleNFT(data.data));
          setLocalSingleNFTlist(data.data);
        },
        onError: () => {
          dispatch(fetchSingleNFT(loacalSingleNFTlist));
        },
        enabled,
        refetchOnMount,
        refetchOnReconnect,
        refetchOnWindowFocus,
        cacheTime,
      }
    );
  };
  return {
    getNftLst,
    getSingleNft,
    nftSelector,
  };
};

export default useNFT;
