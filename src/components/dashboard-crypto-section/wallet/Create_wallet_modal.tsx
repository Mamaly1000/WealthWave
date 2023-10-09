import { useContextFunction } from "../../../context/AppContext";
import ModalComponent from "../../modal/ModalComponent";
import { useState } from "react";
import {
  cryptoWalletType,
  setCryptoWallet,
} from "../../../features/user-actions-slice/actions_slice";
import useCrypto, { IcryptoData } from "../../../hooks/useCrypto";
import { CircularProgress } from "@mui/material";
import TextField from "./TextField";
import { useDispatch, useSelector } from "react-redux";
import { selecttheme } from "../../../features/theme_slice/theme_slice";
import { currencies } from "../../../Data/cryptoCurrencies";
import { currencySymbol } from "../../../features/crypto_slice/crypto_slice";
import Select_component from "../../select-component/Select_component";
import Wallet_chart from "./Wallet_chart";
import moment from "moment";
import { v4 } from "uuid";
import { toast } from "react-toastify";

const Create_wallet_modal = () => {
  const contextData = useContextFunction();
  const dispatch = useDispatch();
  const theme = useSelector(selecttheme);
  const {
    cryptosList,
    cryptoSelector: {
      currentCurrency: { name, symbol },
      coinlist,
    },
  } = useCrypto();
  const [formData, setFormData] = useState<
    cryptoWalletType & {
      coinData: null | IcryptoData;
      currency: currencySymbol;
    }
  >({
    balance: 0,
    balanceInUSD: 0,
    icon: "",
    marketCap: 0,
    symbol: "btc",
    totalBuying: 0,
    totalSelling: 0,
    walletAdd: "",
    amount: 0,
    coinData: null,
    currency: { name: name, symbol: symbol },
    coin: null,
  });
  const { isLoading, isFetching, refetch } = cryptosList(
    "fetching-coins-wallet",
    false,
    false,
    formData.currency.name
  );
  const clickHandler = (
    type: "price" | "coin",
    data: IcryptoData | currencySymbol
  ) => {
    if (type === "coin") {
      const coin: IcryptoData = data as IcryptoData;
      if (formData.coinData === coin) {
        setFormData({
          ...formData,
          coinData: null,
        });
      } else {
        setFormData({
          ...formData,
          coinData: coin,
          symbol: coin.symbol,
          icon: coin.image,
          balance: coin.current_price,
          balanceInUSD: coin.market_cap_change_24h,
          marketCap: coin.market_cap,
          totalBuying: coin.ath,
          totalSelling: coin.atl,
        });
      }
    }
    if (type === "price") {
      setFormData({
        ...formData,
        currency: data,
        symbol: "",
        coinData: null,
        amount: 0,
      });
      refetch();
    }
  };
  const CoinOverviewData = formData.coinData
    ? [
        {
          title: `price in ${formData.currency.name}`,
          data:
            formData.amount * formData.coinData.current_price +
            formData.currency.symbol,
        },
        {
          title: `ath`,
          data: formData.coinData.ath + formData.currency.symbol,
        },
        {
          title: `atl`,
          data: formData.coinData.atl + formData.currency.symbol,
        },
        {
          title: `balance In ${formData.currency.name.toLocaleUpperCase()}`,
          data: formData.coinData.current_price + formData.currency.symbol,
        },
        {
          title: `high 24h`,
          data: formData.coinData.high_24h + formData.currency.symbol,
        },
        {
          title: `low 24h`,
          data: formData.coinData.low_24h + formData.currency.symbol,
        },
        {
          title: `last updated`,
          data: moment(formData.coinData.last_updated).format(
            "dddd YYYY/MMM/DD HH:MM"
          ),
        },
        {
          title: `market cap`,
          data: formData.coinData.market_cap + formData.currency.symbol,
        },
        {
          title: `market cap change 24h`,
          data:
            formData.coinData.market_cap_change_24h + formData.currency.symbol,
        },
        {
          title: `price change 24h`,
          data: formData.coinData.price_change_24h + formData.currency.symbol,
        },
        {
          title: `price change percentage 24h`,
          data: formData.coinData.price_change_percentage_24h + "%",
        },
        {
          title: `roi percentage`,
          data: formData.coinData.roi
            ? formData.coinData.roi?.percentage + "%"
            : "N/A",
        },
        {
          title: `total volume`,
          data: formData.coinData.total_volume + formData.currency.symbol,
        },
      ]
    : [];

  return (
    <ModalComponent
      displayAction={true}
      btnText="create wallet"
      onclick={() => {
        if (formData.currency.name === "") {
          toast.warn("Please Select Currency");
        } else if (formData.coinData === null) {
          toast.warn("Please select coin");
        } else if (formData.amount === 0) {
          toast.warn("please enter amount");
        } else {
          dispatch(
            setCryptoWallet({
              type: "add",
              wallet: {
                amount: formData.amount,
                balance: formData.balance,
                balanceInUSD: formData.balanceInUSD,
                icon: formData.icon,
                marketCap: formData.marketCap,
                symbol: formData.symbol,
                totalBuying: formData.totalBuying,
                totalSelling: formData.totalSelling,
                walletAdd: v4(),
                coin: formData.coinData,
              } as cryptoWalletType,
            })
          );
          contextData!.setDisplayCreateWalletModal(false);
        }
      }}
      setShow={contextData!.setDisplayCreateWalletModal}
      show={contextData!.displayCreateWalletModal}
    >
      <div className="create-wallet-modal">
        {isLoading || isFetching ? (
          <div
            style={{
              minWidth: "100%",
              minHeight: 400,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress style={{ color: theme.btnColor }} />
          </div>
        ) : (
          <div
            className="wallet-content"
            style={{
              color: theme.headerColor,
            }}
          >
            <Select_component
              data={currencies.map((c) => {
                return {
                  mainData: c,
                  name: c.name,
                  image: undefined,
                  symbol: c.symbol,
                };
              })}
              dataType="price"
              label="price"
              onclickHandler={clickHandler}
              value={`${formData.currency.symbol} ${formData.currency.name}`}
            />
            <Select_component
              data={coinlist.map((coin) => {
                return {
                  name: coin.name,
                  image: coin.image,
                  mainData: coin,
                  symbol: undefined,
                };
              })}
              dataType="coin"
              label="Currency"
              onclickHandler={clickHandler}
              value={formData.symbol}
            />
            <div className="select-component">
              <TextField
                label="Amount"
                onchange={(e) => {
                  if (!isNaN(+e.target.value)) {
                    setFormData({ ...formData, amount: +e.target.value });
                  }
                }}
                placeholder="how many coins do you want?"
                value={formData.amount}
              />
            </div>
            <div className="coin-data-overview">
              {formData.coinData && (
                <div
                  className="overview-item"
                  style={{ minWidth: "100%", borderColor: theme.btnColor }}
                >
                  <img src={formData.icon} alt="" />
                  {formData.coinData?.name}
                  <span className="light">{formData.coinData?.symbol}</span>
                </div>
              )}
              {CoinOverviewData.map((item) => {
                return (
                  item.data && (
                    <div
                      style={{ borderColor: theme.btnColor }}
                      className="item"
                      key={item.title}
                    >
                      <span
                        style={{ background: theme.modalColor }}
                        className="title"
                      >
                        {item.title}
                      </span>
                      <span className="data">{item.data}</span>
                    </div>
                  )
                );
              })}
            </div>
            {formData.coinData && (
              <Wallet_chart
                sparkLine={formData.coinData?.sparkline_in_7d?.price}
                currency={formData.currency}
                name={formData.symbol}
              />
            )}
          </div>
        )}
      </div>
    </ModalComponent>
  );
};

export default Create_wallet_modal;
