import { useState } from "react";
import useCrypto from "../../hooks/useCrypto";
import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import { toast } from "react-toastify";

const CoinConvertor = () => {
  const {
    cryptoSelector: { selectedCoin },
  } = useCrypto();
  type valueType = string | number | readonly string[] | undefined;
  const themeSelector = useSelector(selecttheme);
  const [values, setValues] = useState<{
    coin_value: valueType;
    usd_value: valueType;
  }>({ coin_value: "", usd_value: "" });
  return (
    <div
      style={{ background: themeSelector.containerColor }}
      className="coin-convertor-container"
    >
      <div
        style={{ color: themeSelector.headerColor }}
        className="convertor-top-section"
      >
        {selectedCoin.name} Convertor
      </div>
      <div className="convertor-inputs-container">
        <div className="input-group">
          <span>{selectedCoin.symbol}</span>
          <input
            value={values.coin_value}
            onChange={(e) => {
              if (isNaN(+e.target.value)) {
                toast.warn("you must put number !");
              } else {
                setValues({
                  coin_value: e.target.value,
                  usd_value:
                    +e.target.value *
                    +selectedCoin.market_data.current_price.usd,
                });
              }
            }}
            style={{ color: themeSelector.plainTextColor }}
          />
        </div>
        <div className="input-group">
          <span>USD</span>
          <input
            value={values.usd_value}
            onChange={(e) => {
              if (isNaN(+e.target.value)) {
                toast.warn("you must put number !");
              } else {
                setValues({
                  coin_value:
                    +e.target.value /
                    selectedCoin.market_data.current_price.usd,
                  usd_value: e.target.value,
                });
              }
            }}
          />
        </div>
      </div>
      <span
        style={{ color: themeSelector.plainTextColor }}
        className="convertor-difference-container"
      >
        1 {selectedCoin.name} = $
        {selectedCoin.market_data.current_price.usd.toLocaleString()}
      </span>
    </div>
  );
};

export default CoinConvertor;
