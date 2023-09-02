import React, { useState } from "react";
import { motion } from "framer-motion";
import { viewFromLeft } from "../../motions/viewCryptoMotions";
import ThemeHeader from "./ThemeHeaders";
import { ChromePicker, ColorResult } from "react-color";
import { useContextFunction } from "../../context/AppContext";

const ThemeContainer = ({
  children,
  title,
  height,
  width,
  styleColor,
  onChangeComplete,
  displaycustome = true,
}: {
  styleColor: string;
  title: string;
  children: React.ReactNode;
  height: number;
  width: number;
  displaycustome?: boolean;
  onChangeComplete: (color: ColorResult) => void;
}) => {
  const contextData = useContextFunction();
  const [customColor, setCustomColor] = useState<boolean>(true);
  return (
    <motion.div
      variants={viewFromLeft(1, 1)}
      initial="hidden"
      animate="visible"
      className="themes-container"
    >
      <ThemeHeader
        styleColor={styleColor}
        height={height}
        width={width}
        text={title}
        customColor={customColor}
        setCustomColor={setCustomColor}
        displaycustome={displaycustome}
      />
      <div className="data-container">
        {customColor && displaycustome ? (
          <ChromePicker
            className="picker"
            color={styleColor}
            onChangeComplete={onChangeComplete}
            disableAlpha={true}
            styles={{
              default: {
                body: {
                  background: contextData!.localTheme.containerColor,
                  borderRadius: 5,
                },
              },
            }}
          />
        ) : (
          children
        )}
      </div>
    </motion.div>
  );
};

export default ThemeContainer;
