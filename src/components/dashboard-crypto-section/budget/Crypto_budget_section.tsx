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
import Budget_Accounts from "./Budget_Accounts";
import Header from "../../header-component/Header";
import DashboardSection from "../../dashboard/DashboardSection";

export const statusColor = (
  status: "completed" | "pending" | "failed" | "proccessing"
) => {
  if (status === "failed") {
    return "#fe0000";
  } else if (status === "completed") {
    return "#00f5ff";
  } else if (status === "proccessing") {
    return "#5CD2E6";
  } else if (status === "pending") {
    return "#F0DE36";
  }
};

const Crypto_budget_section = () => {
  const theme = useSelector(selecttheme);
  const UserActions = useSelector(selectUserActions);

  return (
    <DashboardSection classname="dashboard-budget-container">
      <Header
        btnText=""
        onclick={() => {}}
        header={false}
        height={3}
        width={150}
        text={"Budget Section"}
      />
      <Budget_child_container classname="mid-container overall-container">
        <Section_Header text="add more invesments to your budget" />
        <div className="status">
          <ProgressBar
            percentage={
              (UserActions.budget.spent * 100) / UserActions.budget.amount
            }
            color="#51d289"
            title="spent"
          />
          <div className="context">
            <Context_component
              title="available"
              value={UserActions.budget.amount}
            />
            <Context_component title="spent" value={UserActions.budget.spent} />
          </div>
        </div>
        <div className="status">
          <ProgressBar
            percentage={
              ((UserActions.budget.total_loss - UserActions.budget.repay) *
                100) /
              UserActions.budget.amount
            }
            color="#fe0020"
            title="loss"
          />
          <div className="context">
            <Context_component
              title="total loss"
              value={UserActions.budget.total_loss}
            />
            <Context_component title="repay" value={UserActions.budget.repay} />
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
                  fillColor: statusColor(data.status),
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
      {UserActions.budget.accounts.length > 0 && <Budget_Accounts />}
    </DashboardSection>
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
