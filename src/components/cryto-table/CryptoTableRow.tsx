import React, { useEffect } from "react";
import useCrypto from "../../hooks/useCrypto";

const CryptoTableRow = () => {
  const { getAllcoins, cryptoList, loading } = useCrypto();
  useEffect(() => {
    // getAllcoins();
  }, []);
  return (
    <table className="">
      <thead>
        <tr>
          {[
            "rate",
            "icon",
            "name",
            "price",
            "high_24h",
            "low_24h",
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
      <tbody>
        {!loading ? (
          cryptoList?.splice(0, 7)?.map((coin, index) => {
            return (
              <tr key={index}>
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
                  className="td-percent"
                  style={{
                    color: coin!.ath_change_percentage > 0 ? "green" : "ED2B2A",
                  }}
                >
                  {coin!.market_cap_change_percentage_24h}
                </td>
                <td className="td-cap">{coin!.market_cap}$</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td>loading ....</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default CryptoTableRow;
