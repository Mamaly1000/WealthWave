import { motion } from "framer-motion";
import { stringsLanding } from "../../assets/crypto/cryptoImages";
import TrendCryptoComponent from "../cryto-table/TrendCryptoComponent";
import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import Divider from "../ntf-components/Divider";

const CryptoPageIntro = () => {
  const themeSelector = useSelector(selecttheme);
  const gradient = `linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9977240896358543) 31%, rgba(255,255,255,0.5075280112044818) 56%, rgba(255,255,255,0.28904061624649857) 78%, rgba(255,255,255,0.1741946778711485) 100%)`;
  return (
    <motion.div
      className="crypto-landing-intro"
      animate={{ backgroundImage: `url(${stringsLanding})` }}
    >
      <motion.div className="context">
        <motion.h2
          animate={{
            background: gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="radial-text"
        >
          Accept
        </motion.h2>
        <motion.h2
          animate={{
            color: themeSelector.btnColor,
          }}
          className="radial-text"
        >
          Crypto
        </motion.h2>
        <motion.h2
          animate={{
            background: gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="radial-text"
        >
          Globally,
        </motion.h2>
        <motion.h2
          animate={{
            background: gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="radial-text"
        >
          Be Limitless.
        </motion.h2>
      </motion.div>
      <motion.p animate={{ color: themeSelector.plainTextColor }}>
        Enjoy bordeless payments with{" "}
        <motion.span animate={{ color: themeSelector.btnColor }}>W</motion.span>
        ealth
        <motion.span animate={{ color: themeSelector.btnColor }}>W</motion.span>
        ave. Our solution is user friendly, fast and secure.{" "}
      </motion.p>
      <Divider height={3} width={100} />
      <TrendCryptoComponent removeHeader={true} />
    </motion.div>
  );
};

export default CryptoPageIntro;
