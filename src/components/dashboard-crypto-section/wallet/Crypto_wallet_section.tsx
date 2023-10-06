import { useSelector } from "react-redux";
import { selecttheme } from "../../../features/theme_slice/theme_slice";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useContextFunction } from "../../../context/AppContext";
const Crypto_wallet_section = () => {
  const theme = useSelector(selecttheme);
  const contextData = useContextFunction();
  return (
    <div style={{ color: theme.headerColor }} className="main-wallet-section">
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
