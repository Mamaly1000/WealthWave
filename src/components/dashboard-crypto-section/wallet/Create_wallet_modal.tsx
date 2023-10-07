import { useContextFunction } from "../../../context/AppContext";
import ModalComponent from "../../modal/ModalComponent";
import { useState } from "react";
import { cryptoWalletType } from "../../../features/user-actions-slice/actions_slice";
import useCrypto, { IcryptoData } from "../../../hooks/useCrypto";
import { CircularProgress, TextField } from "@mui/material";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selecttheme } from "../../../features/theme_slice/theme_slice";
import { currencies } from "../../../Data/cryptoCurrencies";
import { currencySymbol } from "../../../features/crypto_slice/crypto_slice";
import Select_component from "../../select-component/Select_component";
import { ThemeInterface } from "../../../hooks/useTheme";
import Wallet_chart from "./Wallet_chart";

const Create_wallet_modal = () => {
  const contextData = useContextFunction();
  const theme = useSelector(selecttheme);
  const {
    cryptosList,
    cryptoSelector: {
      currentCurrency: { name, symbol },
      coinlist,
    },
  } = useCrypto();
  const { isLoading } = cryptosList("fetching-coins-wallet", true, false, name);
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
  });
  const clickHandler = (
    type: "price" | "coin",
    data: IcryptoData | currencySymbol
  ) => {
    if (type === "coin") {
      const coin: IcryptoData = data as IcryptoData;
      setFormData({
        ...formData,
        coinData: coin,
        symbol: coin.symbol,
        icon: coin.image,
        balance: coin.current_price,
        balanceInUSD: coin.market_cap_change_24h,
        marketCap: coin.market_cap,
      });
    }
    if (type === "price") {
    }
  };
  const CoinOverviewData = [
    {
      title: "",
      data: {
        priceUsd: "",
      },
    },
  ];
  const Div = styleHandler(theme);
  return (
    <ModalComponent
      displayAction={true}
      btnText="create wallet"
      onclick={() => {}}
      setShow={contextData!.setDisplayCreateWalletModal}
      show={contextData!.displayCreateWalletModal}
    >
      <div className="create-wallet-modal">
        {isLoading ? (
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
          <Div
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
            />
            <div className="select-component">
              <TextField
                id="outlined-number"
                label="Amount"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </div>
            {formData.coinData && (
              <Wallet_chart
                sparkLine={formData.coinData?.sparkline_in_7d?.price}
                currency={formData.currency}
                name={formData.symbol}
              />
            )}
          </Div>
        )}
      </div>
    </ModalComponent>
  );
};

export default Create_wallet_modal;

const styleHandler = (theme: ThemeInterface) => {
  return styled.div`
    .css-q0jhri-MuiInputBase-root-MuiInput-root:after {
      border-bottom: 2px solid ${theme.btnColor} !important;
    }
    .MuiCircularProgress-circleIndeterminate {
      stroke: ${theme.btnColor};
    }

    .MuiSelect-select {
      border: 1px solid ${theme.btnColor} !important;
      color: ${theme.headerColor};
      & > img {
        display: none;
      }
      .css-6hp17o-MuiList-root-MuiMenu-list {
        padding: 0 !important;
        background: ${theme.modalColor} !important;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
      }
    }
    .MuiOutlinedInput-notchedOutline {
      border: 2px solid ${theme.btnColor} !important;
    }
    .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root {
      color: ${theme.headerColor} !important;
    }
    .Mui-focused {
      color: ${theme.btnColor} !important;
    }
    .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
      color: ${theme.headerColor};
    }
    .MuiSelect-icon {
      color: ${theme.btnColor};
    }
  `;
};
