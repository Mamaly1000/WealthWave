import Budget_child_container from "./Budget_child_container";
import ProgressBar from "./ProgressBar";

const Crypto_budget_section = () => {
  return (
    <div className="budget-container">
      <Budget_child_container classname="mid-container">
        <ProgressBar percentage={50} />
        <ProgressBar percentage={50} />
        <ProgressBar percentage={50} />
        <ProgressBar percentage={50} />
        <ProgressBar percentage={50} />
        <ProgressBar percentage={50} />
      </Budget_child_container>
      <Budget_child_container classname="big-container">
        hfgh
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
