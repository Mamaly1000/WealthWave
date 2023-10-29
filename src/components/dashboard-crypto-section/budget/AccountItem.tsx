import React, { useEffect } from "react";
import {
  budgetAccountsType,
  selectUserActions,
} from "../../../features/user-actions-slice/actions_slice";
import { useSelector } from "react-redux";
import { selecttheme } from "../../../features/theme_slice/theme_slice";
import { selectCrypto } from "../../../features/crypto_slice/crypto_slice";
import moment from "moment";
import { AnimatePresence, motion } from "framer-motion";
import CountUp from "react-countup";

const AccountItem = ({
  acc,
  i,
  isActive,
  setActiveACC,
}: {
  isActive: boolean;
  acc: budgetAccountsType;
  i?: number;
  setActiveACC: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const theme = useSelector(selecttheme);
  const userActions = useSelector(selectUserActions);
  const { currentCurrency } = useSelector(selectCrypto);
  useEffect(() => {
    setActiveACC(acc.account_number + "");
  }, [isActive]);
  return (
    <AnimatePresence>
      {userActions.budget.accounts.some(
        (a) => a.account_number === acc.account_number
      ) && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.5 + (i || 0) / 10, type: "tween" }}
          style={{ background: acc.bgColor, color: theme.headerColor }}
          className="account"
        >
          <img src={acc.icon} className="icon" />
          <div className="context">
            current balance
            <CountUp
              start={0}
              end={userActions.budget.amount}
              duration={5}
              delay={2}
              separator=","
              decimals={4}
              decimal=","
              prefix={currentCurrency.symbol}
              onEnd={() => {}}
              onStart={() => {}}
            >
              {({ countUpRef }) => <span className="bold" ref={countUpRef} />}
            </CountUp>
          </div>
          <div className="acc-number">
            <span>{acc.account_number.toString().slice(0, 4)}</span>
            <span>{acc.account_number.toString().slice(4, 8)}</span>
            <span>{acc.account_number.toString().slice(8, 12)}</span>
            <span>{acc.account_number.toString().slice(12, 16)}</span>
          </div>
          <div className="ex-date">{moment(acc.EX_date).format("MM/YY")}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AccountItem;
