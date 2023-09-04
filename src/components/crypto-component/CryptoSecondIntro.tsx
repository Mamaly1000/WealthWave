import { motion } from "framer-motion";
import TopCryptos from "./TopCryptos";
import Header from "../header-component/Header";
import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import { mapLanding } from "../../assets/crypto/cryptoImages";
const CryptoSecondIntro = () => {
  const themeSelector = useSelector(selecttheme);
  return (
    <motion.div className="crypto-second-intro">
      <div className="context">
        <Header
          btnText=""
          header={false}
          height={3}
          onclick={() => {}}
          text="how to come the worlds most trusted communities."
          width={150}
        />
        <p style={{ color: themeSelector.plainTextColor }}>
          Cryptocurrencies are a new and innovative form of currency that have
          the potential to revolutionize the way we think about money. They are
          digital assets that use cryptography to secure transactions and
          control the creation of new units. Cryptocurrencies are borderless,
          meaning that they can be sent and received anywhere in the world
          without the need for a central authority. This gives them a number of
          advantages over traditional fiat currencies.
        </p>
      </div>
      <motion.img src={mapLanding} />
      <TopCryptos />
    </motion.div>
  );
};

export default CryptoSecondIntro;
