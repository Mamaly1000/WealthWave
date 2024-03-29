import { useSelector } from "react-redux";
import { selecttheme } from "../../../features/theme_slice/theme_slice";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useContextFunction } from "../../../context/AppContext";
import { selectUserActions } from "../../../features/user-actions-slice/actions_slice";
import SingleWalletCard from "./SingleWalletCard";
const Crypto_wallet_section = () => {
  const theme = useSelector(selecttheme);
  const contextData = useContextFunction();
  const userActions = useSelector(selectUserActions);
  return (
    <div style={{ color: theme.headerColor }} className="main-wallet-section">
      {userActions.cryptoWallet.map((wallet) => {
        return <SingleWalletCard wallet={wallet} key={wallet.walletAdd} />;
      })}
      <div
        onClick={() => contextData!.setDisplayCreateWalletModal(true)}
        className="create-wallet"
        style={{ borderColor: theme.btnColor, color: theme.btnColor }}
      >
        <IoMdAddCircleOutline />
        create new wallet
      </div>
    </div>
  );
};

export default Crypto_wallet_section;
