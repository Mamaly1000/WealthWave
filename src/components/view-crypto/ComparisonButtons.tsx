import React from "react";
import useCrypto, { IcryptoData } from "../../hooks/useCrypto";
import { useDispatch } from "react-redux";
import {
  IviewPageChartData,
  setCryptoChart,
} from "../../features/crypto_slice/crypto_slice";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { viewFromLeft } from "../../motions/viewCryptoMotions";

const ComparisonButtons = ({
  index,
  coin,
  setSelectedCoins,
  selectedCoins,
  setDisplayCoins,
}: {
  index: number;
  coin: IcryptoData;
  setSelectedCoins: React.Dispatch<React.SetStateAction<IcryptoData[]>>;
  selectedCoins: IcryptoData[];
  setDisplayCoins: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const dispatch = useDispatch();
  const { chartLists, cryptoSelector } = useCrypto();
  const fetch_Selected_Chart = chartLists(
    coin?.id as string,
    cryptoSelector.cryptoDay,
    (data) => {
      dispatch(
        setCryptoChart({
          id: coin.id,
          data: data!.data,
          day: cryptoSelector.cryptoDay,
        } as IviewPageChartData)
      );
      setSelectedCoins([...selectedCoins, coin]);
      setDisplayCoins(false);
    },
    () => {
      setDisplayCoins(false);
      toast.error(`unable to fetch ${coin?.name} chart data`);
    },
    false,
    false,
    false,
    5000
  );

  return (
    <motion.div
      variants={viewFromLeft(index, 0.2)}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      key={index}
      className="coin-row"
    >
      <img src={coin.image} />
      <span
        onClick={() => {
          if (selectedCoins.length < 3) {
            toast.promise(fetch_Selected_Chart.refetch(), {
              pending: `fetching ${coin.id} chart data`,
              error: `unable to get ${coin.id} chart data ! please try again`,
              success: `${coin.id} chart data fetched successfully`,
            });
          }
        }}
      >
        {coin.name}
      </span>
      <span>${coin.current_price}</span>
      <span
        onClick={() => {
          if (selectedCoins.length < 3) {
            toast.promise(fetch_Selected_Chart.refetch(), {
              pending: `fetching ${coin.id} chart data`,
              error: `unable to get ${coin.id} chart data ! please try again`,
              success: `${coin.id} chart data fetched successfully`,
            });
          }
        }}
      >
        ${coin.market_cap}
      </span>
    </motion.div>
  );
};

export default ComparisonButtons;
