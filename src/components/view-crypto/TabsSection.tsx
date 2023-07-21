import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { tagsMotion, viewFromLeft } from "../../motions/viewCryptoMotions";
import chartIcon from "./../../assets/crypto/chart.svg";
import textIcon from "./../../assets/crypto/text.svg";
import marketIcon from "./../../assets/crypto/market.svg";
import { useContextFunction } from "../../context/AppContext";
const TabsSection = ({
  selectedTab,
  setSelectedTab,
}: {
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const contextdata = useContextFunction();
  const tabs = [
    { tab: "overview", pic: chartIcon },
    { tab: "description", pic: textIcon },
    { tab: "markets", pic: marketIcon },
  ];

  return (
    <motion.div
      className="view-crypto-tabs-container"
      variants={viewFromLeft(1, 0.4)}
      whileInView="visible"
      initial="hidden"
    >
      {tabs.map((tab, index) => {
        return (
          <motion.span
            initial={{ width: "default" }}
            animate={{
              width:
                selectedTab === tab.tab && contextdata?.screenW
                  ? "200px"
                  : "fit-content",
            }}
            transition={{
              duration: 0.3,
              type: "just",
              ease: "linear",
            }}
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
