import { useSelector } from "react-redux";
import Divider from "../ntf-components/Divider";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import { editIcon, giftIcon } from "../../assets/dashboard/icons/icons";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const ThemeHeader = ({
  text,
  width,
  height,
  styleColor,
  customColor,
  setCustomColor,
  displaycustome,
}: {
  text: string;
  width: number;
  height: number;
  styleColor: string;
  customColor: boolean;
  setCustomColor: React.Dispatch<React.SetStateAction<boolean>>;
  displaycustome: boolean;
}) => {
  //
  const themeSelector = useSelector(selecttheme);
  return (
    <div className="theme-header">
      <Divider height={height} width={width} />{" "}
      <h3 style={{ color: themeSelector.headerColor }}>{text}</h3>
      <div
        className="theme-actions-container"
        style={{ background: themeSelector.containerColor }}
      >
        <motion.button
          animate={{
            background: customColor
              ? themeSelector.hoverColor
              : themeSelector.btnColor,
          }}
          whileHover={{ background: themeSelector.hoverColor }}
          onClick={() => {
            if (displaycustome) {
              setCustomColor(true);
            } else {
              toast.info("There Is No Custom Color");
            }
          }}
        >
          <img src={editIcon} />
        </motion.button>
        <motion.button
          animate={{
            background: !customColor
              ? themeSelector.hoverColor
              : themeSelector.btnColor,
          }}
          whileHover={{ background: themeSelector.hoverColor }}
          onClick={() => setCustomColor(false)}
        >
          <img src={giftIcon} />
        </motion.button>
        <div className="selected-color">
          <div style={{ background: styleColor }}></div>
        </div>
      </div>
    </div>
  );
};

export default ThemeHeader;
