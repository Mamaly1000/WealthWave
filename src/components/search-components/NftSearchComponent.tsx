import { memo, useEffect, useMemo, useState, useTransition } from "react";
import useNFT from "../../hooks/useNFT";
import { useDispatch, useSelector } from "react-redux";
import { setNFTsearch } from "../../features/nft_slice/nft_slice";
import { motion, useAnimationControls } from "framer-motion";
import refreshIcon from "./../../assets/crypto/refresh.svg";
import filterhIcon from "./../../assets/crypto/filter.svg";
import { toast } from "react-toastify";
import { selecttheme } from "../../features/theme_slice/theme_slice";
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
  const themeSelector = useSelector(selecttheme);
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
    <motion.section
      className="nft-search-container"
      style={{ border: `1px solid ${themeSelector.btnColor}` }}
    >
      <input
        value={text}
        onChange={(e) => {
          setTransition(() => {
            setText(e.target.value);
          });
        }}
      />
      <motion.button
        whileHover={{ background: themeSelector.hoverColor }}
        transition={{ duration: 0.1 }}
        style={{
          color: themeSelector.headerColor,
          background: themeSelector.btnColor,
        }}
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
      </motion.button>
      <motion.button
        whileHover={{ background: themeSelector.hoverColor }}
        transition={{ duration: 0.1 }}
        style={{
          color: themeSelector.headerColor,
          background: themeSelector.btnColor,
        }}
        onClick={() => setDisplayFilterDropDown((prev) => !prev)}
        className="rounded"
      >
        <img src={filterhIcon} />
      </motion.button>
    </motion.section>
  );
};

export default memo(NftSearchComponent);
