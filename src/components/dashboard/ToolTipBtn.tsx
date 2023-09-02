import React from "react";
import { PlacesType, Tooltip } from "react-tooltip";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";

const ToolTipBtn = ({
  children,
  tooltip_id,
  classname,
  onclick,
  content,
  place,
}: {
  children: React.ReactNode;
  tooltip_id: string;
  classname: string;
  onclick: () => void;
  content: string;
  place: PlacesType | undefined;
}) => {
  const themeSelector = useSelector(selecttheme);
  return (
    <motion.button
      style={{
        background: themeSelector.btnColor,
        boxShadow: `0px 9px 10px ${themeSelector.hoverColor}`,
      }}
      whileHover={{
        background: themeSelector.hoverColor,
        boxShadow: "none",
      }}
      transition={{
        duration: 0.1,
      }}
      data-tooltip-id={tooltip_id}
      onClick={onclick}
      className={classname}
    >
      {children}
      <Tooltip place={place} content={content} id={tooltip_id} />
    </motion.button>
  );
};

export default ToolTipBtn;
