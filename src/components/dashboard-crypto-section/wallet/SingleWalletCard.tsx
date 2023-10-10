import { useState } from "react";
import { cryptoWalletType } from "../../../features/user-actions-slice/actions_slice";
import { useSelector } from "react-redux";
import { selectCrypto } from "../../../features/crypto_slice/crypto_slice";
import { LuWallet } from "react-icons/lu";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiOutlineCopy } from "react-icons/ai";
import { selecttheme } from "../../../features/theme_slice/theme_slice";
import { toast } from "react-toastify";
import QRCode from "react-qr-code";
import { VscInfo } from "react-icons/vsc";
import styled from "styled-components";
import { motion } from "framer-motion";
const Div = styled.div`
  & > svg {
    margin-inline: auto;

    & > path {
      &:first {
        fill: transparent;
      }
      &:last {
        fill: ${(props) => props.theme.btnColor};
      }
    }
  }
`;
const SingleWalletCard = ({ wallet }: { wallet: cryptoWalletType }) => {
  const cryptoSelector = useSelector(selectCrypto);
  const theme = useSelector(selecttheme);
  const [copy, setCopy] = useState(false);
  const copyHandler = () => {
    setCopy(true);
    toast.success("wallet address copied successfully!");
    setTimeout(() => {
      setCopy(false);
    }, 5000);
  };
  const tableContent = [
    {
      title: "total selling amount",
      value: wallet.totalSelling,
    },
    {
      title: "ballance",
      value: wallet.balance,
    },
    {
      title: "total buying amount",
      value: wallet.totalBuying,
    },
    {
      title: `ballance in ${cryptoSelector.currentCurrency.name.toUpperCase()}`,
      value: wallet.balanceInUSD,
    },
  ];
  return (
    <div
      style={{
        color: theme.headerColor,
        background: theme.modalColor,
        borderColor: theme.btnColor,
      }}
      className="single-wallet"
    >
      <div style={{ borderColor: theme.btnColor }} className="wallet-header">
        {wallet.coin?.name} wallet
      </div>
      <div className="wallet-name">
        <img src={wallet.icon} />
        <div className="context">
          <span className="name">{wallet.coin?.name}</span>
          <span style={{ color: theme.btnColor }} className="price">
            1{wallet.coin?.symbol}-{cryptoSelector.currentCurrency.symbol}{" "}
            {wallet.balanceInUSD}{" "}
            {cryptoSelector.currentCurrency.name.toUpperCase()}
          </span>
        </div>
      </div>
      <div className="table-content">
        {tableContent.map((item) => {
          return (
            <div className="item" key={item.value}>
              <div style={{ color: theme.btnColor }} className="title">
                {item.title}:
              </div>
              <div className="data">
                {item.value.toFixed(4) + cryptoSelector.currentCurrency.symbol}
              </div>
            </div>
          );
        })}
      </div>
      <div className="wallet-add-container">
        <div className="wallet-add-header">wallet address</div>
        <div style={{ borderColor: theme.btnColor }} className="add-container">
          <span style={{ borderColor: theme.btnColor }} className="file-img">
            <LuWallet />{" "}
          </span>
          <span className="address">
            {wallet.walletAdd.replaceAll("-", "")}
          </span>
          <CopyToClipboard text={wallet.walletAdd} onCopy={() => copyHandler()}>
            <motion.button
              whileHover={{
                background: theme.btnColor,
                color: theme.modalColor,
              }}
              transition={{ duration: 0.1, type: "tween" }}
              initial={{
                background: theme.modalColor,
              }}
              style={{
                borderInlineStart: `1px solid ${theme.btnColor}`,
              }}
              className="copy-btn"
            >
              copy
              <AiOutlineCopy />
            </motion.button>
          </CopyToClipboard>
        </div>
      </div>
      <div className="text-divider">or</div>
      <Div theme={theme} className="qr-code-class">
        <div className="header">
          scan QR code: <VscInfo />
        </div>
        <QRCode
          size={100}
          style={{
            height: "auto",
            maxWidth: "60%",
            width: "60%",
          }}
          value={wallet.walletAdd}
          bgColor={"rgba(0 0 0 /0)"}
          fgColor={theme.btnColor}
          viewBox={`0 0 256 256`}
          letterSpacing={10}
        />
      </Div>
      <div className="wallet-actions">
        <button
          style={{ background: theme.btnColor, color: theme.headerColor }}
        >
          withdraw
        </button>
        <button
          style={{
            border: `1px solid ${theme.btnColor}`,
            color: theme.btnColor,
          }}
        >
          deposit
        </button>
      </div>
    </div>
  );
};

export default SingleWalletCard;
