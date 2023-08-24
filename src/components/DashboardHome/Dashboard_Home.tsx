import { overallData, topDeals, transactions } from "../../Data/overallData";
import DashboardSection from "../dashboard/DashboardSection";
import Divider from "../ntf-components/Divider";
import CandleChart from "./CandleChart";
import DealComponent from "./DealComponent";
import Donautchart from "./Donautchart";
import OverAllDataBox from "./OverAllDataBox";
import Transaction from "./Transaction";
import VisitChart from "./VisitChart";

const Dashboard_Home = () => {
  return (
    <DashboardSection classname="dashboard-home-section">
      <div className="deal-container">
        <div className="header">top deals</div>
        <Divider height={3} width={150} />
        <div className="data-table">
          {topDeals.map((deal) => {
            return <DealComponent deal={deal} key={deal.price} />;
          })}
        </div>
      </div>
      <div className="overall-container">
        {overallData.map((data) => {
          return <OverAllDataBox data={data} key={data.title} />;
        })}
      </div>
      <div className="transactions-container">
        <h2 className="header">
          recent transactions
          <Divider height={3} width={150} />
        </h2>
        <div className="data-table">
          {transactions.map((t) => {
            return <Transaction data={t} key={t.date} />;
          })}
        </div>
      </div>
      <VisitChart />
      <CandleChart />
      <Donautchart />
    </DashboardSection>
  );
};

export default Dashboard_Home;
