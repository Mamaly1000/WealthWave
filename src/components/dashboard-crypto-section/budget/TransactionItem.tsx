import React from "react";
import { budgetTransActionType } from "../../../features/user-actions-slice/actions_slice";
import moment from "moment";
import { useSelector } from "react-redux";
import { selecttheme } from "../../../features/theme_slice/theme_slice";
import { selectCrypto } from "../../../features/crypto_slice/crypto_slice";
import { motion } from "framer-motion";

const TransactionItem = ({ t, i }: { t: budgetTransActionType; i: number }) => {
  const theme = useSelector(selecttheme);
  const { currentCurrency } = useSelector(selectCrypto);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, borderColor: theme.btnColor }}
      transition={{ duration: 1, delay: i / 10 + 0.1, type: "tween" }}
      className="transaction-item"
    >
      <img className="small-pic" src={t.icon} />{" "}
      <div className="context">
        <img src={t.icon} />{" "}
        <div className="t-date">
          <h5>{t.title}</h5>
          <span className="date">
            date:{" "}
            <div className="bold">
              {moment(t.transferedDate).format("dddd YYYY/MMM/DD hh:mm:ss")}
            </div>
          </span>
        </div>
      </div>
      <motion.span
        animate={{ color: t.amount > 0 ? "#00f5ff" : "#fe0000" }}
        className="amount"
      >
        {currentCurrency.symbol + t.amount.toLocaleString()}
      </motion.span>
    </motion.div>
  );
};

export default TransactionItem;
