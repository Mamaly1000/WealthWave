import React from "react";
import Dashboard_wallet_preview from "../Dashboard_wallet_preview";
import { crypto_sections_types } from "../Dashboard_crypto_home";

const Crypto_home_section = ({
  cryptoSection,
  setCryptoSection,
}: {
  cryptoSection: crypto_sections_types;
  setCryptoSection: React.Dispatch<React.SetStateAction<crypto_sections_types>>;
}) => {
  return (
    <div>
      <Dashboard_wallet_preview />
    </div>
  );
};

export default Crypto_home_section;
