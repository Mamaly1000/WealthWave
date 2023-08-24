import SparkLineChart from "./SparkLineChart";

const OverAllDataBox = ({
  data,
}: {
  data: {
    icon: string;
    title: string;
    value: string;
    percentage: string;
    main_color: string;
    chartData: (string | number)[][];
  };
}) => {
  return (
    <div className="sm-box" style={{ background: data.main_color }}>
      <div className="left-section">
        <div className="data-title">
          <img src={data.icon} />
          {data.title}
        </div>
        <span className="bold">{data.value}</span>
        <button className="overall-btn">view all</button>
      </div>
      <div className="right-section">
        <SparkLineChart />
        <div className={`percentage ${+data.percentage > 0 ? "green" : "red"}`}>
          {data.percentage}%<span className="light">this year</span>
        </div>
      </div>
    </div>
  );
};

export default OverAllDataBox;
