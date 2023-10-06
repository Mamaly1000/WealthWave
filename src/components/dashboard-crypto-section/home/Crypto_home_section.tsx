import React from "react";
import Dashboard_wallet_preview from "../Dashboard_wallet_preview";

const Crypto_home_section = ({
  cryptoSection,
  setCryptoSection,
}: {
  cryptoSection: string;
  setCryptoSection: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div>
      <Dashboard_wallet_preview />
    </div>
  );
};

export default Crypto_home_section;
