import { useContextFunction } from "../../../context/AppContext";
import ModalComponent from "../../modal/ModalComponent";
import { useState } from "react";
import { cryptoWalletType } from "../../../features/user-actions-slice/actions_slice";
import useCrypto from "../../../hooks/useCrypto";
import { CircularProgress, TextField } from "@mui/material";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selecttheme } from "../../../features/theme_slice/theme_slice";
import Crypto_Select from "./Crypto_Select";
import Currenc_select from "./Currenc_select";
import { currencies } from "../../../Data/cryptoCurrencies";

const Create_wallet_modal = () => {
  const contextData = useContextFunction();
  const theme = useSelector(selecttheme);
  const {
    cryptosList,
    cryptoSelector: {
      currentCurrency: { name },
      coinlist,
    },
  } = useCrypto();
  const { isLoading } = cryptosList("fetching-coins-wallet", true, false, name);
  const [_formData, _setFormData] = useState<cryptoWalletType>({
    balance: 0,
    balanceInUSD: 0,
    icon: "",
    marketCap: 0,
    symbol: "",
    totalBuying: 0,
    totalSelling: 0,
    walletAdd: "",
    amount: 0,
  });
  const Div = styled.div`
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
  `;
  return (
    <ModalComponent
      displayAction={true}
      btnText="create wallet"
      onclick={() => {}}
      setShow={contextData!.setDisplayCreateWalletModal}
      show={contextData!.displayCreateWalletModal}
    >
      {isLoading ? (
        <CircularProgress variant="indeterminate" />
      ) : (
        <Div
          style={{
            color: theme.headerColor,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            gap: 20,
            maxWidth: "100%",
            flexWrap: "wrap",
          }}
        >
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            style={{ minWidth: "45%", maxWidth: "45%" }}
          />
          <Crypto_Select coins={coinlist} />
          <Currenc_select currencies={currencies} />
        </Div>
      )}
    </ModalComponent>
  );
};

export default Create_wallet_modal;
