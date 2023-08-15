import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { tagsMotion } from "../../motions/viewCryptoMotions";
import chartIcon from "./../../assets/crypto/chart.svg";
import textIcon from "./../../assets/crypto/text.svg";
import marketIcon from "./../../assets/crypto/market.svg";
const TabsSection = ({
  selectedTab,
  setSelectedTab,
}: {
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const tabs = [
    { tab: "overview", pic: chartIcon },
    { tab: "description", pic: textIcon },
    { tab: "markets", pic: marketIcon },
  ];

  return (
    <motion.div className="view-crypto-tabs-container">
      {tabs.map((tab, index) => {
        return (
          <motion.span
            variants={tagsMotion(index, 0.3)}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={index}
            onClick={() => setSelectedTab(tab.tab)}
            className={`${selectedTab === tab.tab ? "selected-tab" : ""}`}
          >
            {tab.tab}{" "}
            <AnimatePresence>
              {selectedTab === tab.tab && (
                <motion.img
                  variants={tagsMotion(undefined, 0.1)}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  src={tab.pic}
                />
              )}
            </AnimatePresence>
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default TabsSection;
