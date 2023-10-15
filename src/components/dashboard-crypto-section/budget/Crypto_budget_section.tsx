import CountUp from "react-countup";
import Budget_child_container from "./Budget_child_container";
import ProgressBar from "./ProgressBar";
import { useSelector } from "react-redux";
import { selectCrypto } from "../../../features/crypto_slice/crypto_slice";
import { selecttheme } from "../../../features/theme_slice/theme_slice";

const Crypto_budget_section = () => {
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
        <section>sd</section>
        <section>sd</section>
        <section>sd</section>
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
