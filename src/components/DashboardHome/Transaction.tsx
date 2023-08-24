import moment from "moment"; 

const Transaction = ({
  data,
}: {
  data: {
    from: string;
    to: string;
    date: number;
    value: string;
  };
}) => {
  return (
    <div className="single-transaction">
      <div className="left-section">
        <span className="sender">{data.from}</span>
        <span className="reciever">{data.to}</span>
      </div>
      <span className="transaction-date">{moment(data.date).fromNow()}</span>
      <div className="transaction-value">{data.value} $</div>
    </div>
  );
};

export default Transaction;
