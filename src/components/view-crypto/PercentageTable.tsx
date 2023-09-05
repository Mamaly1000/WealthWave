import { useSelector } from "react-redux";
import { useContextFunction } from "../../context/AppContext";
import useCrypto from "../../hooks/useCrypto";
import { motion } from "framer-motion";
import { selecttheme } from "../../features/theme_slice/theme_slice";
const PercentageTable = () => {
  const { cryptoSelector } = useCrypto();
  const selectedCoin = cryptoSelector.selectedCoin;
  const contextData = useContextFunction();
  const themeSelector = useSelector(selecttheme);
  return (
    <motion.div className="selected-crypto-percentage-table-container">
      <motion.table
        drag="x"
        dragSnapToOrigin={contextData!.screenW ? true : false}
        dragConstraints={{ left: -500, right: 500 }}
      >
        <thead>
          {["1h", "24h", "7d", "14d", "30d", "60d", "200d", "1y"].map(
            (d, index) => {
              return (
                <th
                  style={{
                    background: themeSelector.btnColor,
                    color: themeSelector.headerColor,
                  }}
                  key={index}
                >
                  {d}
                </th>
              );
            }
          )}
        </thead>
        <tbody>
          <tr>
            {[
              selectedCoin.market_data.price_change_percentage_1h_in_currency
                .usd,
              selectedCoin.market_data.price_change_percentage_24h,
              selectedCoin.market_data.price_change_percentage_7d,
              selectedCoin.market_data.price_change_percentage_14d,
              selectedCoin.market_data.price_change_percentage_30d,
              selectedCoin.market_data.price_change_percentage_60d,
              selectedCoin.market_data.price_change_percentage_200d,
              selectedCoin.market_data.price_change_percentage_1y,
            ].map((d, index) => {
              return (
                <td key={index} className={`${+d <= 0 ? "red" : "green"}`}>
                  {d}%
                </td>
              );
            })}
          </tr>
        </tbody>
      </motion.table>
    </motion.div>
  );
};

export default PercentageTable;
