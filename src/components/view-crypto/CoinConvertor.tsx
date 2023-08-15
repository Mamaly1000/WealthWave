import { useState } from "react";
import useCrypto from "../../hooks/useCrypto";

const CoinConvertor = () => {
  const {
    cryptoSelector: { selectedCoin },
  } = useCrypto();
  type valueType = string | number | readonly string[] | undefined;

  const [values, setValues] = useState<{
    coin_value: valueType;
    usd_value: valueType;
  }>({ coin_value: "", usd_value: "" });
  return (
    <div className="coin-convertor-container">
      <div className="convertor-top-section">{selectedCoin.name} Convertor</div>
      <div className="convertor-inputs-container">
        <div className="input-group">
          <span>{selectedCoin.symbol}</span>
          <input
            value={values.coin_value}
            onChange={(e) => {
              setValues({
                coin_value: e.target.value,
                usd_value:
                  +e.target.value * +selectedCoin.market_data.current_price.usd,
              });
            }}
          />
        </div>
        <div className="input-group">
          <span>USD</span>
          <input
            value={values.usd_value}
            onChange={(e) => {
              setValues({
                coin_value:
                  +e.target.value / selectedCoin.market_data.current_price.usd,
                usd_value: e.target.value,
              });
            }}
          />
        </div>
      </div>
      <span className="convertor-difference-container">
        1 {selectedCoin.name} = $
        {selectedCoin.market_data.current_price.usd.toLocaleString()}
      </span>
    </div>
  );
};

export default CoinConvertor;
