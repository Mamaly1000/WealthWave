import React, { memo, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import useCrypto from "../../hooks/useCrypto";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {
  fetchCoins,
  setCryptoSearch,
} from "../../features/crypto_slice/crypto_slice";
import filterIcon from "../../assets/crypto/filter.svg";
import refreshIcon from "../../assets/crypto/refresh.svg";

type cryptoSearchPropType = {
  displayFilterModal: boolean;
  setDisplayFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Crypto_Search = ({ setDisplayFilterModal }: cryptoSearchPropType) => {
  const [searchText, setSearchText] = useState<string>("");
  const { cryptosList, setLoacalCryptoList } = useCrypto();
  const dispatch = useDispatch();
  const { data, isError, refetch } = cryptosList("refresh-data", false, false);
  const setSearchTextCallBack = useMemo(() => {
    dispatch(setCryptoSearch(searchText));
  }, [searchText]);
  useEffect(() => {
    if (data) {
      dispatch(fetchCoins(data.data));
      setLoacalCryptoList(data.data);
      toast.success("data refreshed successfuly !");
    } else if (isError) {
      toast.error("please refresh again !");
    }
  }, [data]);

  return (
    <motion.div className="search-crypto-container">
      <motion.input
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        placeholder="Search ... "
      />
      <motion.button onClick={() => setDisplayFilterModal(true)}>
        <img src={filterIcon} alt="filter" />
      </motion.button>
      <motion.button
        onClick={() => {
          refetch();
        }}
      >
        <img src={refreshIcon} alt="refresh" />
      </motion.button>
    </motion.div>
  );
};

export default memo(Crypto_Search);
