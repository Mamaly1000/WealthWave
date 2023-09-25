import { useDispatch, useSelector } from "react-redux";
import { useContextFunction } from "../../context/AppContext";
import ModalComponent from "../modal/ModalComponent";
import {
  filterCryptoTable,
  filteringTypes,
  selectCrypto,
  singleFilterType,
} from "../../features/crypto_slice/crypto_slice";
import { useState } from "react";
import { toast } from "react-toastify";
import Custom_range_input from "../drop-sown-component/Custom_range_input";
import Divider from "../ntf-components/Divider";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import moment from "moment";

const FilterModal = () => {
  const dispatch = useDispatch();
  const { coinlist } = useSelector(selectCrypto);
  const contextData = useContextFunction();

  return (
    <ModalComponent
      btnText="delete filters"
      displayAction={true}
      setShow={contextData!.setDisplayCryptoFilterModal}
      show={contextData!.displayCryptoFilterModal}
      onclick={() => {
        dispatch(filterCryptoTable({ entryType: "delete-all" }));
        contextData!.setDisplayCryptoFilterModal(false);
      }}
    >
      <Container
        data={{
          typeProp: "crypto-ath",
          value: {
            max: 100,
            min: 50,
            strValue: "",
          },
        }}
        title="all-time-high"
        valueTypeProp="number"
        limits={{
          min: Math.min(...coinlist.map((coin) => coin.ath)),
          max: Math.max(...coinlist.map((coin) => coin.ath)),
        }}
        maxPossibleValue={Math.max(...coinlist.map((coin) => coin.ath))}
      />
      <Container
        data={{
          typeProp: "crypto-ath_change_percentage",
          value: {
            max: Math.max(
              ...coinlist.map((coin) => coin.ath_change_percentage)
            ),
            min: Math.min(
              ...coinlist.map((coin) => coin.ath_change_percentage)
            ),
            strValue: "",
          },
        }}
        limits={{
          max: 100,
          min: -100,
        }}
        title="ath_change_percentage"
        valueTypeProp="percentage"
        maxPossibleValue={Math.max(
          ...coinlist.map((coin) => coin.ath_change_percentage)
        )}
      />
      {/* <Container
        data={{
          typeProp: "crypto-ath_date",
          value: {
            strValue: "",
            max: 0,
            min: 0,
          },
        }}
        limits={{ max: 0, min: 0 }}
        title="ath_date"
        valueTypeProp="date"
        maxPossibleValue={Math.max(
          ...coinlist.map((coin) =>
            coin.ath_date ? new Date(coin.ath_date).getTime() : 0
          )
        )}
      /> */}
      <Container
        data={{
          typeProp: "crypto-atl",
          value: {
            max: Math.max(...coinlist.map((coin) => coin.atl)) / 2,
            min: Math.min(...coinlist.map((coin) => coin.atl)) * 2,
            strValue: "",
          },
        }}
        limits={{
          max: Math.max(...coinlist.map((coin) => coin.atl)),
          min: Math.min(...coinlist.map((coin) => coin.atl)),
        }}
        title="all-time-low"
        valueTypeProp="number"
        maxPossibleValue={Math.max(...coinlist.map((coin) => coin.atl))}
      />
      <Container
        data={{
          typeProp: "crypto-atl_change_percentage",
          value: {
            max:
              Math.max(...coinlist.map((coin) => +coin.atl_change_percentage)) /
              2,
            min: Math.min(
              ...coinlist.map((coin) => +coin.atl_change_percentage)
            ),
            strValue: "",
          },
        }}
        limits={{
          max: Math.max(...coinlist.map((coin) => +coin.atl_change_percentage)),
          min: Math.min(...coinlist.map((coin) => +coin.atl_change_percentage)),
        }}
        title="atl_change_percentage"
        valueTypeProp="percentage"
        maxPossibleValue={Math.max(
          ...coinlist.map((coin) => +coin.atl_change_percentage)
        )}
      />
      {/* <Container
        data={{
          typeProp: "crypto-atl_date",
          value: {
            max: 0,
            min: 0,
            strValue: "",
          },
        }}
        limits={{
          max: 0,
          min: 0,
        }}
        title="atl_date"
        valueTypeProp="date"
        maxPossibleValue={Math.max(
          ...coinlist.map((coin) =>
            coin.atl_date ? new Date(coin.atl_date).getTime() : 0
          )
        )}
      /> */}
      <Container
        data={{
          typeProp: "crypto-circulating_supply",
          value: {
            max:
              Math.max(...coinlist.map((coin) => +coin.circulating_supply)) / 2,
            min: Math.min(...coinlist.map((coin) => +coin.circulating_supply)),
            strValue: "",
          },
        }}
        limits={{
          max: Math.max(...coinlist.map((coin) => +coin.circulating_supply)),
          min: Math.min(...coinlist.map((coin) => +coin.circulating_supply)),
        }}
        title="circulating_supply"
        valueTypeProp="percentage"
        maxPossibleValue={Math.max(
          ...coinlist.map((coin) => +coin.circulating_supply)
        )}
      />
      <Container
        data={{
          typeProp: "crypto-current_price",
          value: {
            max: Math.max(...coinlist.map((coin) => +coin.current_price)) / 2,
            min: Math.min(...coinlist.map((coin) => +coin.current_price)),
            strValue: "",
          },
        }}
        limits={{
          max: Math.max(...coinlist.map((coin) => +coin.current_price)),
          min: Math.min(...coinlist.map((coin) => +coin.current_price)),
        }}
        title="current_price"
        valueTypeProp="number"
        maxPossibleValue={Math.max(
          ...coinlist.map((coin) => +coin.current_price)
        )}
      />{" "}
      <Container
        data={{
          typeProp: "crypto-fully_diluted_valuation",
          value: {
            max:
              Math.max(
                ...coinlist.map((coin) => +coin.fully_diluted_valuation)
              ) / 2,
            min: Math.min(
              ...coinlist.map((coin) => +coin.fully_diluted_valuation)
            ),
            strValue: "",
          },
        }}
        limits={{
          max: Math.max(
            ...coinlist.map((coin) => +coin.fully_diluted_valuation)
          ),
          min: Math.min(
            ...coinlist.map((coin) => +coin.fully_diluted_valuation)
          ),
        }}
        title="fully_diluted_valuation"
        valueTypeProp="number"
        maxPossibleValue={Math.max(
          ...coinlist.map((coin) => +coin.fully_diluted_valuation)
        )}
      />{" "}
      <Container
        data={{
          typeProp: "crypto-high_24h",
          value: {
            max: Math.max(...coinlist.map((coin) => +coin.high_24h)) / 2,
            min: Math.min(...coinlist.map((coin) => +coin.high_24h)),
            strValue: "",
          },
        }}
        limits={{
          max: Math.max(...coinlist.map((coin) => +coin.high_24h)),
          min: Math.min(...coinlist.map((coin) => +coin.high_24h)),
        }}
        title="high_24h"
        valueTypeProp="number"
        maxPossibleValue={Math.max(...coinlist.map((coin) => +coin.high_24h))}
      />{" "}
      <Container
        data={{
          typeProp: "crypto-id",
          value: {
            max: Math.max(...coinlist.map((coin) => +coin.id)) / 2,
            min: Math.min(...coinlist.map((coin) => +coin.id)),
            strValue: "",
          },
        }}
        limits={{
          max: Math.max(...coinlist.map((coin) => +coin.id)),
          min: Math.min(...coinlist.map((coin) => +coin.id)),
        }}
        title="id"
        valueTypeProp="string"
      />{" "}
      {/* <Container
        data={{
          typeProp: "crypto-last_updated",
          value: {
            max: 0,
            min: 0,
            strValue: "",
          },
        }}
        limits={{
          max: 0,
          min: 0,
        }}
        title="last_updated"
        valueTypeProp="date"
        maxPossibleValue={Math.max(
          ...coinlist.map((coin) =>
            coin.last_updated ? new Date(coin.last_updated).getTime() : 0
          )
        )}
      /> */}
      <Container
        data={{
          typeProp: "crypto-low_24h",
          value: {
            max: Math.max(...coinlist.map((coin) => +coin.low_24h)) / 2,
            min: Math.min(...coinlist.map((coin) => +coin.low_24h)),
            strValue: "",
          },
        }}
        limits={{
          max: Math.max(...coinlist.map((coin) => +coin.low_24h)),
          min: Math.min(...coinlist.map((coin) => +coin.low_24h)),
        }}
        title="low_24h"
        valueTypeProp="number"
        maxPossibleValue={Math.max(...coinlist.map((coin) => +coin.low_24h))}
      />{" "}
      <Container
        data={{
          typeProp: "crypto-market_cap",
          value: {
            max: Math.max(...coinlist.map((coin) => +coin.market_cap)) / 2,
            min: Math.min(...coinlist.map((coin) => +coin.market_cap)),
            strValue: "",
          },
        }}
        limits={{
          max: Math.max(...coinlist.map((coin) => +coin.market_cap)),
          min: Math.min(...coinlist.map((coin) => +coin.market_cap)),
        }}
        title="market_cap"
        valueTypeProp="number"
        maxPossibleValue={Math.max(...coinlist.map((coin) => +coin.market_cap))}
      />{" "}
      <Container
        data={{
          typeProp: "crypto-market_cap_change_24h",
          value: {
            max:
              Math.max(...coinlist.map((coin) => +coin.market_cap_change_24h)) /
              2,
            min: Math.min(
              ...coinlist.map((coin) => +coin.market_cap_change_24h)
            ),
            strValue: "",
          },
        }}
        limits={{
          max: Math.max(...coinlist.map((coin) => +coin.market_cap_change_24h)),
          min: Math.min(...coinlist.map((coin) => +coin.market_cap_change_24h)),
        }}
        title="market_cap_change_24h"
        valueTypeProp="number"
        maxPossibleValue={Math.max(
          ...coinlist.map((coin) => +coin.market_cap_change_24h)
        )}
      />{" "}
      <Container
        data={{
          typeProp: "crypto-market_cap_change_percentage_24h",
          value: {
            max:
              Math.max(
                ...coinlist.map(
                  (coin) => +coin.market_cap_change_percentage_24h
                )
              ) / 2,
            min: Math.min(
              ...coinlist.map((coin) => +coin.market_cap_change_percentage_24h)
            ),
            strValue: "",
          },
        }}
        limits={{
          max: Math.max(
            ...coinlist.map((coin) => +coin.market_cap_change_percentage_24h)
          ),
          min: Math.min(
            ...coinlist.map((coin) => +coin.market_cap_change_percentage_24h)
          ),
        }}
        title="market_cap_change_percentage_24h"
        valueTypeProp="percentage"
        maxPossibleValue={Math.max(
          ...coinlist.map((coin) => +coin.market_cap_change_percentage_24h)
        )}
      />{" "}
      <Container
        data={{
          typeProp: "crypto-market_cap_rank",
          value: {
            max: Math.max(...coinlist.map((coin) => +coin.market_cap_rank)) / 2,
            min: Math.min(...coinlist.map((coin) => +coin.market_cap_rank)),
            strValue: "",
          },
        }}
        limits={{
          max: Math.max(...coinlist.map((coin) => +coin.market_cap_rank)),
          min: Math.min(...coinlist.map((coin) => +coin.market_cap_rank)),
        }}
        title="market_cap_rank"
        valueTypeProp="number"
        maxPossibleValue={Math.max(
          ...coinlist.map((coin) => +coin.market_cap_rank)
        )}
      />
      <Container
        data={{
          typeProp: "crypto-max_supply",
          value: {
            max: Math.max(...coinlist.map((coin) => +coin.max_supply)) / 2,
            min: Math.min(...coinlist.map((coin) => +coin.max_supply)),
            strValue: "",
          },
        }}
        limits={{
          max: Math.max(...coinlist.map((coin) => +coin.max_supply)),
          min: Math.min(...coinlist.map((coin) => +coin.max_supply)),
        }}
        title="max_supply"
        valueTypeProp="number"
        maxPossibleValue={Math.max(...coinlist.map((coin) => +coin.max_supply))}
      />{" "}
      <Container
        data={{
          typeProp: "crypto-name",
          value: {
            max: 0,
            min: 0,
            strValue: "",
          },
        }}
        limits={{
          max: 0,
          min: 0,
        }}
        title="name"
        valueTypeProp="string"
      />{" "}
      <Container
        data={{
          typeProp: "crypto-price_change_24h",
          value: {
            max:
              Math.max(...coinlist.map((coin) => +coin.price_change_24h)) / 2,
            min: Math.min(...coinlist.map((coin) => +coin.price_change_24h)),
            strValue: "",
          },
        }}
        limits={{
          max: Math.max(...coinlist.map((coin) => +coin.price_change_24h)),
          min: Math.min(...coinlist.map((coin) => +coin.price_change_24h)),
        }}
        title="price_change_24h"
        valueTypeProp="number"
        maxPossibleValue={Math.max(
          ...coinlist.map((coin) => +coin.price_change_24h)
        )}
      />{" "}
      <Container
        data={{
          typeProp: "crypto-price_change_percentage_24h",
          value: {
            max:
              Math.max(...coinlist.map((coin) => +coin.price_change_24h)) / 2,
            min: Math.min(...coinlist.map((coin) => +coin.price_change_24h)),
            strValue: "",
          },
        }}
        limits={{
          max: Math.max(
            ...coinlist.map((coin) => +coin.price_change_percentage_24h)
          ),
          min: Math.min(
            ...coinlist.map((coin) => +coin.price_change_percentage_24h)
          ),
        }}
        title="price_change_percentage_24h"
        valueTypeProp="percentage"
        maxPossibleValue={Math.max(
          ...coinlist.map((coin) => +coin.price_change_percentage_24h)
        )}
      />{" "}
      <Container
        data={{
          typeProp: "crypto-roi",
          value: {
            max:
              Math.max(
                ...coinlist.map((coin) =>
                  coin.roi ? coin?.roi?.percentage : 0
                )
              ) / 2,
            min: Math.min(
              ...coinlist.map((coin) => (coin.roi ? coin?.roi?.percentage : 0))
            ),
            strValue: "",
          },
        }}
        limits={{
          max: Math.max(
            ...coinlist.map((coin) => (coin.roi ? coin?.roi?.percentage : 0))
          ),
          min: Math.min(
            ...coinlist.map((coin) => (coin.roi ? coin?.roi?.percentage : 0))
          ),
        }}
        title="roi"
        valueTypeProp="percentage"
        maxPossibleValue={Math.max(
          ...coinlist.map((coin) => (coin.roi ? coin?.roi?.percentage : 0))
        )}
      />{" "}
      <Container
        data={{
          typeProp: "crypto-symbol",
          value: {
            max: 0,
            min: 0,
            strValue: "",
          },
        }}
        limits={{
          max: 0,
          min: 0,
        }}
        title="symbol"
        valueTypeProp="string"
      />{" "}
      <Container
        data={{
          typeProp: "crypto-total_supply",
          value: {
            max: Math.max(...coinlist.map((coin) => +coin.total_supply)) / 2,
            min: Math.min(...coinlist.map((coin) => +coin.total_supply)),
            strValue: "",
          },
        }}
        limits={{
          max: Math.max(...coinlist.map((coin) => +coin.total_supply)),
          min: Math.min(...coinlist.map((coin) => +coin.total_supply)),
        }}
        title="total_supply"
        valueTypeProp="number"
        maxPossibleValue={Math.max(
          ...coinlist.map((coin) => +coin.total_supply)
        )}
      />
      <Container
        data={{
          typeProp: "crypto-total_volume",
          value: {
            max: Math.max(...coinlist.map((coin) => +coin.total_volume)) / 2,
            min: Math.min(...coinlist.map((coin) => +coin.total_volume)),
            strValue: "",
          },
        }}
        limits={{
          max: Math.max(...coinlist.map((coin) => +coin.total_volume)),
          min: Math.min(...coinlist.map((coin) => +coin.total_volume)),
        }}
        title="total_volume"
        valueTypeProp="number"
        maxPossibleValue={Math.max(
          ...coinlist.map((coin) => +coin.total_volume)
        )}
      />
    </ModalComponent>
  );
};

export default FilterModal;

const Container = ({
  data,
  title,
  valueTypeProp,
  limits,
  maxPossibleValue,
}: {
  data: {
    typeProp: filteringTypes;
    value: {
      max: number;
      min: number;
      strValue: string;
    };
  };
  valueTypeProp: "number" | "date" | "percentage" | "string";
  title: string;
  limits: { max: number; min: number };
  maxPossibleValue?: number;
}) => {
  const [filterItem, setFilterItem] = useState<singleFilterType>({
    type: data.typeProp,
    value: {
      max: data.value.max,
      min: data.value.min,
      strValue: data.value.strValue,
      type: valueTypeProp,
    },
  });
  const { filters, currentCurrency } = useSelector(selectCrypto);
  const theme = useSelector(selecttheme);
  const dispatch = useDispatch();
  const displayReset = filters.find((f) => f.type === data.typeProp);
  return (
    <div className="container" style={{ borderColor: theme.btnColor }}>
      <div className="title">
        <Divider width={3} height={20} /> filter by: {title}{" "}
        {maxPossibleValue && (
          <div
            style={{ borderBottom: `2px solid ${theme.btnColor}` }}
            className="extra"
          >
            {valueTypeProp !== "date" &&
              valueTypeProp !== "string" &&
              "- max founded value:" + maxPossibleValue.toLocaleString()}
            {valueTypeProp === "number" && currentCurrency.symbol}
            {valueTypeProp === "percentage" && currentCurrency.symbol}
            {valueTypeProp === "date" &&
              "maximum possible date :" +
                moment(maxPossibleValue).format("YYYY/MM/DD")}
          </div>
        )}
      </div>
      {valueTypeProp === "date" && (
        <input
          type="date"
          placeholder="yyyy/mm/dd"
          onChange={(e) => {
            toast.info(e.target.value);
          }}
          style={{
            color: theme.headerColor,
            stroke: theme.headerColor,
            border: `1px solid ${theme.btnColor}`,
          }}
        />
      )}
      {valueTypeProp === "number" && (
        <Custom_range_input
          max={limits.max}
          maxVal={filterItem.value.max}
          min={limits.min}
          minVal={filterItem.value.min}
          setValue={setFilterItem}
          filterItem={filterItem}
        />
      )}
      {valueTypeProp === "percentage" && (
        <Custom_range_input
          max={limits.max}
          maxVal={filterItem.value.max}
          min={limits.min}
          minVal={filterItem.value.min}
          filterItem={filterItem}
          setValue={setFilterItem}
        />
      )}
      {valueTypeProp === "string" && (
        <input
          style={{ border: `1px solid ${theme.btnColor}` }}
          value={filterItem.value.strValue}
          onChange={(e) =>
            setFilterItem({
              ...filterItem,
              value: {
                max: filterItem.value.min,
                min: filterItem.value.min,
                strValue: e.target.value,
                type: filterItem.value.type,
              },
            })
          }
          placeholder={title + "..."}
        />
      )}
      <div className="actions-container">
        <button
          style={{ border: `1px solid ${theme.btnColor}` }}
          onClick={() => {
            dispatch(
              filterCryptoTable({
                ...filterItem,
                entryType: "add",
              } as singleFilterType & {
                entryType: "add" | "delete";
              })
            );
          }}
        >
          apply filter
        </button>
        {displayReset && (
          <button
            style={{ border: `1px solid red` }}
            onClick={() => {
              dispatch(
                filterCryptoTable({
                  ...filterItem,
                  entryType: "delete",
                } as singleFilterType & {
                  entryType: "add" | "delete";
                })
              );
            }}
          >
            reset filter
          </button>
        )}
      </div>
    </div>
  );
};
