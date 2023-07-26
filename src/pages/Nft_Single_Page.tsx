import React from "react";
import { useParams } from "react-router-dom";
import useNFT from "../hooks/useNFT";

const Nft_Single_Page = () => {
  const { id } = useParams();
  const { getSingleNft, nftSelector } = useNFT();
  const fetchSingleNFT = getSingleNft(
    id as string,
    true,
    true,
    true,
    false,
    5000
  );
  return <div>{nftSelector.single_nft?.name}</div>;
};

export default Nft_Single_Page;
