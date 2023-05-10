import { useEffect } from "react";
import useCrypto from "../../hooks/useCrypto";
import Loader from "../loader/Loader";
const CryptoTableRow = () => {
  const { getAllcoins, cryptoList, loading } = useCrypto();
  useEffect(() => {
    getAllcoins();
  }, []);
  return (
    <table>
      <thead>
        <tr>
          {[
            "rate",
            "icon",
            "name",
            "price",
            "high-24h",
            "low-24h",
            "24h",
            "Market-Cap",
          ].map((head, index) => {
            return (
              <th key={index} className={`th-${head}`}>
                {head}
              </th>
            );
          })}
        </tr>
      </thead>
      {!loading ? (
        <tbody>
          {cryptoList.slice(0, 10).map((coin, index) => {
            return (
              <tr
                key={index}
                style={{ animationDelay: `${index / 10 + 0.1}s` }}
              >
                <td className="td-rate">{coin!.market_cap_rank}</td>
                <td className="td-icon">
                  <img
                    className="coin-icon"
                    src={coin!.image}
                    alt="coin-icon"
                  />
                </td>
                <td className="td-name">{coin!.name}</td>
                <td className="td-price">{coin!.current_price}$</td>
                <td className="td-high">{coin!.high_24h}</td>
                <td className="td-low">{coin!.low_24h}</td>
                <td
                  className={`td-percent ${
                    coin.market_cap_change_percentage_24h > 0
                      ? "increased-rate"
                      : "decreased-rate"
                  }`}
                >
                  {coin!.market_cap_change_percentage_24h}%
                </td>
                <td className="td-cap">{coin!.market_cap}$</td>
              </tr>
            );
          })}
        </tbody>
      ) : (
        <tbody>
          <tr style={{ animationDelay: `${0 / 10 + 0.1}s` }}>
            <td className="td-rate">
              <Loader />
            </td>
            <td className="td-icon">
              <Loader />
            </td>
            <td className="td-name">
              <Loader />
            </td>
            <td className="td-price">
              <Loader />
            </td>
            <td className="td-high">
              <Loader />
            </td>
            <td className="td-low">
              <Loader />
            </td>
            <td className={`td-percent`}>
              <Loader />
            </td>
            <td className="td-cap">
              <Loader />
            </td>
          </tr>
        </tbody>
      )}
    </table>
  );
};

export default CryptoTableRow;
