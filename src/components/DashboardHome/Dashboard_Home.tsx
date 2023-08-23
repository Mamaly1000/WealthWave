import { overallData, topDeals } from "../../Data/overallData";
import DashboardSection from "../dashboard/DashboardSection";
import Divider from "../ntf-components/Divider";
import DealComponent from "./DealComponent";
import OverAllDataBox from "./OverAllDataBox";
import VisitChart from "./VisitChart";

const Dashboard_Home = () => {
  return (
    <DashboardSection classname="dashboard-home-section">
      <div className="left-side">
        <div className="deal-container">
          <div className="header">top deals</div>
          <Divider height={3} width={150} />
          <div className="data-table">
            {topDeals.map((deal) => {
              return <DealComponent deal={deal} key={deal.price} />;
            })}
          </div>
        </div>
        <VisitChart />
      </div>
      <div className="mid-side">
        <div className="overall-container">
          {overallData.map((data) => {
            return <OverAllDataBox data={data} key={data.title} />;
          })}
        </div>
      </div>
      <div className="right-side">fdgdf</div>
    </DashboardSection>
  );
};

export default Dashboard_Home;
