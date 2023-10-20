import CountUp from "react-countup";
import Budget_child_container from "./Budget_child_container";
import ProgressBar from "./ProgressBar";
import { useSelector } from "react-redux";
import { selectCrypto } from "../../../features/crypto_slice/crypto_slice";
import { selecttheme } from "../../../features/theme_slice/theme_slice";
import Section_Header from "./Section_Header";
import { selectUserActions } from "../../../features/user-actions-slice/actions_slice";
import BarColumnChart from "../../charts/BarColumnChart";
import moment from "moment";
import AddBudgetForm from "./AddBudgetForm";
import TransactionItem from "./TransactionItem";
import AccountItem from "./AccountItem";

const Crypto_budget_section = () => {
  const theme = useSelector(selecttheme);
  const UserActions = useSelector(selectUserActions);

  return (
    <div className="budget-container">
      <Budget_child_container classname="mid-container">
        <Section_Header text="add more invesments to your budget" />
        <div className="status">
          <ProgressBar percentage={50} color="#51d289" title="spent" />
          <div className="context">
            <Context_component title="available" value={2334234} />
            <Context_component title="spent" value={234234324} />
          </div>
        </div>
        <div className="status">
          <ProgressBar percentage={21} color="#fe0020" title="loss" />
          <div className="context">
            <Context_component title="total loss" value={2334234} />
            <Context_component title="repay" value={234234324} />
          </div>
        </div>
      </Budget_child_container>
      <AddBudgetForm />
      <Budget_child_container classname="big-container chart-container">
        <BarColumnChart
          series={[
            {
              data: UserActions.budget.transactions.map((data) => {
                return {
                  x: moment(data.transferedDate).format(
                    "dddd YYYY/MM/DD hh:mm:ss"
                  ),
                  y: [data.current_balance, data.amount],
                  fillColor: !(data.current_balance > data.amount)
                    ? "#00f5ff"
                    : "#fe0000",
                };
              }),
              name: "Your TransActions",
              color: theme.btnColor,
            },
          ]}
        />
      </Budget_child_container>
      <Budget_child_container classname="mid-container transactions-container">
        <Section_Header text="your transactions" />
        {UserActions.budget.transactions.map((transAction, index) => {
          return (
            <TransactionItem
              t={transAction}
              i={index}
              key={transAction.transferedDate}
            />
          );
        })}
      </Budget_child_container>{" "}
      <Budget_child_container classname="mid-container accounts-container">
        <Section_Header text="your Accounts" />
        {UserActions.budget.accounts.map((account, index) => {
          return (
            <AccountItem acc={account} i={index} key={account.account_number} />
          );
        })}
      </Budget_child_container>
    </div>
  );
};

export default Crypto_budget_section;

const Context_component = ({
  title,
  value,
}: {
  title: string;
  value: number;
}) => {
  const {
    currentCurrency: { symbol },
  } = useSelector(selectCrypto);
  const theme = useSelector(selecttheme);
  return (
    <div className="context-child">
      <div className="title" style={{ color: theme.btnColor }}>
        {title}:{" "}
      </div>
      <CountUp
        start={0}
        end={value}
        duration={5}
        delay={2}
        separator=","
        decimals={4}
        decimal=","
        prefix={symbol}
        onEnd={() => {}}
        onStart={() => {}}
      >
        {({ countUpRef }) => <span ref={countUpRef} />}
      </CountUp>
    </div>
  );
};
