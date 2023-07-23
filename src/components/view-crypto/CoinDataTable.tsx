import useCrypto from "../../hooks/useCrypto";
import moment from "moment";

const CoinDataTable = () => {
  const {
    cryptoSelector: { selectedCoin },
  } = useCrypto();
  const tableData = [
    {
      title: `${selectedCoin.name} Price`,
      values: [selectedCoin.market_data.current_price.usd.toLocaleString()],
    },
    {
      title: `24h Low / 24h High`,
      values: [
        `$${selectedCoin.market_data.low_24h.usd.toLocaleString()} / $${selectedCoin.market_data.high_24h.usd.toLocaleString()}`,
      ],
    },
    {
      title: `liquidity_score`,
      values: [selectedCoin.liquidity_score],
    },
    {
      title: `Trading Volume`,
      values: [
        `$${selectedCoin.market_data.total_volume.usd.toLocaleString()}`,
      ],
    },
    {
      title: `Market Cap Rank`,
      values: [selectedCoin.market_data.market_cap_rank],
    },
    {
      title: `Market Cap`,
      values: [selectedCoin.market_data.market_cap.usd.toLocaleString()],
    },
    {
      title: `Volume / Market Cap`,
      values: [
        selectedCoin.market_data.total_volume.usd /
          selectedCoin.market_data.market_cap.usd,
      ],
    },
    {
      title: `All-Time High`,
      values: [
        `$${selectedCoin.market_data.ath.usd.toLocaleString()}`,
        `${selectedCoin.market_data.ath_change_percentage.usd}`,
        `${moment(selectedCoin.market_data.ath_date.usd).format(
          "YYYY/MM/DD-HH:MM"
        )} (about${moment(selectedCoin.market_data.ath_date.usd).fromNow()})`,
      ],
    },
    {
      title: `All-Time Low`,
      values: [
        `$${selectedCoin.market_data.atl.usd.toLocaleString()}`,
        `${selectedCoin.market_data.atl_change_percentage.usd}`,
        `${moment(selectedCoin.market_data.atl_date.usd).format(
          "YYYY/MM/DD-HH:MM"
        )} (about${moment(selectedCoin.market_data.atl_date.usd).fromNow()})`,
      ],
    },
  ];
  return (
    <div className="Price-Statistics-container">
      <h4>{selectedCoin.name} Price Statistics</h4>
      <div className="data-table">
        {tableData.map((d, index) => {
          return (
            <div className="table-row" key={index}>
              <span className="row-title">{d.title}</span>
              <div className="row-data">
                {d.values.length > 1 ? (
                  <span className="all-time-HL">
                    <span className="price">{d.values[0]}</span>
                    <span
                      className={`percentage ${
                        +d.values[1] <= 0 ? "red-text" : "green-text"
                      }`}
                    >
                      {d.values[1]}%
                    </span>
                    <span className="date">{d.values[2]}</span>
                  </span>
                ) : (
                  <span className="row-data-span">{d.values[0]}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoinDataTable;
