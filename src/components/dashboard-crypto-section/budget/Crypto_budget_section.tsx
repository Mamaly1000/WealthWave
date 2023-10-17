import CountUp from "react-countup";
import Budget_child_container from "./Budget_child_container";
import ProgressBar from "./ProgressBar";
import { useSelector } from "react-redux";
import { selectCrypto } from "../../../features/crypto_slice/crypto_slice";
import { selecttheme } from "../../../features/theme_slice/theme_slice";
import Custom_textfield from "./Custom_textfield";
import { useState } from "react";
import {
  paypalIcon,
  masterCardIcon,
} from "./../../../assets/dashboard/dashboardIcons";
import Custom_DateComponent from "./Custom_DateComponent";
const banks = [
  {
    name: "mastercard",
    icon: masterCardIcon,
  },
  {
    name: "paypal",
    icon: paypalIcon,
  },
];
const Crypto_budget_section = () => {
  const theme = useSelector(selecttheme);
  const [transactionData, setTransActionData] = useState({
    amount: "",
    card: {
      icon: "",
      name: "",
      card_number: "",
      cvv: "",
      Ex_date: Date.now(),
    },
  });
  return (
    <div className="budget-container">
      <Budget_child_container classname="mid-container">
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
      <Budget_child_container classname="big-container add-budget-container">
        <section>
          <Custom_textfield
            value={transactionData.card.card_number}
            onchange={(e) => {
              if (!isNaN(+e.target.value) && e.target.value.length <= 12)
                setTransActionData({
                  ...transactionData,
                  card: {
                    ...transactionData.card,
                    card_number: e.target.value,
                  },
                });
            }}
            type="text"
            label="Account-number"
          />
          <Custom_DateComponent
            onchange={(e) => {
              setTransActionData({
                ...transactionData,
                card: {
                  ...transactionData.card,
                  Ex_date: e,
                },
              });
            }}
            label="expire-date"
          />
        </section>
        <section>
          <Custom_textfield
            value={transactionData.card.cvv}
            onchange={(e) => {
              if (!isNaN(+e.target.value) && e.target.value.length < 5)
                setTransActionData({
                  ...transactionData,
                  card: {
                    ...transactionData.card,
                    cvv: e.target.value,
                  },
                });
            }}
            type="text"
            label="Cvv4"
          />
          <div>
            {banks.map((bank) => {
              return (
                <button
                  style={{
                    background:
                      transactionData.card.name === bank.name
                        ? theme.btnColor
                        : "",
                    border: `1px solid ${theme.btnColor}`,
                  }}
                  key={bank.name}
                  onClick={() =>
                    setTransActionData({
                      ...transactionData,
                      card: {
                        ...transactionData.card,
                        icon: bank.icon,
                        name: bank.name,
                      },
                    })
                  }
                  className="bank-item"
                >
                  <img src={bank.icon} />
                </button>
              );
            })}
          </div>
        </section>
        <section>
          <Custom_textfield
            value={transactionData.amount}
            onchange={(e) => {
              if (!isNaN(+e.target.value))
                setTransActionData({
                  ...transactionData,
                  amount: e.target.value,
                });
            }}
            type="text"
            label="Transaction-Amount $"
          />
        </section>
      </Budget_child_container>{" "}
      <Budget_child_container classname="big-container">
        hfgh
      </Budget_child_container>
      <Budget_child_container classname="mid-container">
        rthyrt
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
