import React, { useState } from "react";
import { cryptoWalletType } from "../../../features/user-actions-slice/actions_slice";
import { useSelector } from "react-redux";
import { selectCrypto } from "../../../features/crypto_slice/crypto_slice";
import { LuWallet } from "react-icons/lu";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiOutlineCopy } from "react-icons/ai";
import { selecttheme } from "../../../features/theme_slice/theme_slice";
import { toast } from "react-toastify";
import QRCode from "react-qr-code";
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
    <div className="single-wallet">
      <div className="wallet-header">{wallet.coin?.name} wallet</div>
      <div className="wallet-name">
        <img src={wallet.icon} />
        <div className="context">
          <span className="name">{wallet.coin?.name}</span>
          <span className="price">
            1{wallet.coin?.symbol}-{cryptoSelector.currentCurrency.symbol}{" "}
            {wallet.balanceInUSD}{" "}
            {cryptoSelector.currentCurrency.name.toUpperCase()}
          </span>
        </div>
        <div className="table-content">
          {tableContent.map((item) => {
            return (
              <div className="item" key={item.value}>
                <div className="title">{item.title}</div>
                <div className="data">{item.value}</div>
              </div>
            );
          })}
        </div>
        <div className="wallet-add-container">
          <div className="wallet-add-header">wallet address</div>
          <div className="add-container">
            <LuWallet /> <span className="address">{wallet.walletAdd}</span>
            <CopyToClipboard
              text={wallet.walletAdd}
              onCopy={() => copyHandler()}
            >
              <button>
                <AiOutlineCopy />
              </button>
            </CopyToClipboard>
          </div>
          <div className="text-divider">or</div>
          <div
            style={{
              height: "auto",
              margin: "0 auto",
              maxWidth: 64,
              width: "100%",
            }}
          >
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={wallet.walletAdd}
              viewBox={`0 0 256 256`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleWalletCard;
