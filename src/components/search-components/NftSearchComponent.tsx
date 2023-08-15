import { memo, useEffect, useMemo, useState, useTransition } from "react";
import useNFT from "../../hooks/useNFT";
import { useDispatch } from "react-redux";
import { setNFTsearch } from "../../features/nft_slice/nft_slice";
import { motion, useAnimationControls } from "framer-motion";
import refreshIcon from "./../../assets/crypto/refresh.svg";
import filterhIcon from "./../../assets/crypto/filter.svg";
import { toast } from "react-toastify";
const NftSearchComponent = () => {
  const dispatch = useDispatch();
  const { getNftLst } = useNFT();
  const [_pending, setTransition] = useTransition();
  const controls = useAnimationControls();
  const [text, setText] = useState<string>("");
  const [_DisplayFilterDropDown, setDisplayFilterDropDown] =
    useState<boolean>(false);
  const refreshNft = getNftLst(
    "refresh-nft",
    false,
    false,
    false,
    false,
    50000
  );
  const fetchSearch = useMemo(() => {
    dispatch(setNFTsearch(text));
  }, [text]);
  useEffect(() => {
    if (refreshNft.isLoading) {
      controls.start({
        rotate: [0, 360],
        transition: {
          repeat: Infinity,
        },
      });
    } else {
      controls.stop();
    }
  }, [refreshNft.isLoading, fetchSearch]);
  return (
    <motion.section className="nft-search-container">
      <input
        value={text}
        onChange={(e) => {
          setTransition(() => {
            setText(e.target.value);
          });
        }}
      />
      <button
        onClick={() => {
          setTransition(() => {
            toast.promise(refreshNft.refetch(), {
              error: "Unabled To Refresh !",
              pending: "Refreshing Data",
              success: "Data Successfully Refreshed !",
            });
          });
        }}
      >
        <motion.img
          initial={{ rotate: 0 }}
          animate={controls}
          transition={{
            duration: 0.1,
            type: "tween",
            ease: "linear",
          }}
          src={refreshIcon}
        />
      </button>
      <button
        onClick={() => setDisplayFilterDropDown((prev) => !prev)}
        className="rounded"
      >
        <img src={filterhIcon} />
      </button>
    </motion.section>
  );
};

export default memo(NftSearchComponent);
