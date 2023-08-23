const DealComponent = ({
  deal,
}: {
  deal: {
    icon: string;
    name: string;
    email: string;
    price: number;
  };
}) => {
  return (
    <div className="single-deal">
      <div className="main-sec">
        <img src={deal.icon} />
        <div className="deal-info">
          <div className="name">{deal.name}</div>
          <div className="email">{deal.email}</div>
        </div>
      </div>
      <p>{deal.price.toLocaleString()}$</p>
    </div>
  );
};

export default DealComponent;
