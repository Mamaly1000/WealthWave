import { useState } from "react";
import { nftPics } from "../../Data/nftPic";
import { INFT, emptySingleNFT } from "../../features/nft_slice/nft_slice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";

const RelatedNFT = ({ nft, index }: { nft: INFT; index: number }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const themeSelector = useSelector(selecttheme);
  const [randomPrice] = useState(Math.floor(Math.random() * 22 + 433) / 1000);
  return (
    <div
      onClick={() => {
        nav(`/nfts/${nft.id}`);
        dispatch(emptySingleNFT());
      }}
      className="related-nft"
      style={{ borderColor: themeSelector.btnColor }}
    >
      <span className="left-side">
        <img src={nftPics[index]} />
        {nft.name}
      </span>
      <span className="r-side">{randomPrice + " ETH"}</span>
    </div>
  );
};

export default RelatedNFT;
