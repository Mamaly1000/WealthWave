import { useSelector } from "react-redux";
import { overallData, topDeals, transactions } from "../../Data/overallData";
import DashboardSection from "../dashboard/DashboardSection";
import Divider from "../ntf-components/Divider";
import CandleChart from "./CandleChart";
import DealComponent from "./DealComponent";
import Donautchart from "./Donautchart";
import OverAllDataBox from "./OverAllDataBox";
import Transaction from "./Transaction";
import VisitChart from "./VisitChart";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import Header from "../header-component/Header";
import { selectProfile } from "../../features/profile_slice/profile_slice";

const Dashboard_Home = () => {
  const themeSelector = useSelector(selecttheme);
  const { name } = useSelector(selectProfile);
  return (
    <DashboardSection classname="dashboard-home-section">
      <Header
        btnText=""
        onclick={() => {}}
        header={false}
        height={3}
        width={150}
        text={name + " Dashboard"}
      />
      <div
        style={{ background: themeSelector.containerColor }}
        className="deal-container"
      >
        <div className="header">top deals</div>
        <Divider height={3} width={150} />
        <div className="data-table">
          {topDeals.map((deal) => {
            return <DealComponent deal={deal} key={deal.name} />;
          })}
        </div>
      </div>
      <div
        style={{ background: themeSelector.containerColor }}
        className="overall-container"
      >
        {overallData.map((data) => {
          return <OverAllDataBox data={data} key={data.main_color} />;
        })}
      </div>
      <div
        style={{ background: themeSelector.containerColor }}
        className="transactions-container"
      >
        <h2 className="header">
          recent transactions
          <Divider height={3} width={150} />
        </h2>
        <div className="data-table">
          {transactions.map((t, index) => {
            return <Transaction data={t} key={index} />;
          })}
        </div>
      </div>
      <VisitChart themeSelector={themeSelector} />
      <CandleChart themeSelector={themeSelector} />
      <Donautchart themeSelector={themeSelector} />
    </DashboardSection>
  );
};

export default Dashboard_Home;
