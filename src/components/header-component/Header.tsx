import Divider from "../ntf-components/Divider";
import { motion } from "framer-motion";

const Header = ({
  text,
  header,
  btnText,
  width,
  height,
  onclick,
}: {
  text: string;
  header: boolean;
  btnText: string;
  width: number;
  height: number;
  onclick: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.5,
        duration: 3,
        type: "tween",
        x: {
          duration: 3,
        },
      }}
      className="header-component"
    >
      <h2>
        {text}
        <Divider width={width} height={height} />
      </h2>
      {header && <button onClick={onclick}>{btnText}</button>}
    </motion.div>
  );
};

export default Header;
