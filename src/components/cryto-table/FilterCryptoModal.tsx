import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { BlogTagsOverlay, modalMotion } from "../../motions/motions";
import closeIcon from "./../../assets/crypto/close.svg";
import priceIcon from "./../../assets/crypto/price.svg";
import nameIcon from "./../../assets/crypto/name.svg";
type filterPropsTypes = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const FilterCryptoModal = ({ show, setShow }: filterPropsTypes) => {
  const [selectedFilter, setFilter] = useState<{
    value: string;
    icon: string;
    action: (d: any) => void;
  }>({
    value: "",
    icon: "",
    action: () => {},
  });
  const filterOptions = [
    {
      value: "price",
      icon: priceIcon,
      action: (data: any) => {
        setFilter(data);
      },
    },
    {
      value: "name",
      icon: nameIcon,
      action: (data: any) => {
        setFilter(data);
      },
    },
  ];

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div className="modal-container">
          <motion.div
            variants={BlogTagsOverlay}
            initial="hidden"
            animate="visible"
            className="modal-overlay"
            onClick={() => setShow(false)}
          ></motion.div>
          <motion.div
            variants={modalMotion}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="modal-content"
          >
            <div className="modal-header">
              <h4>Filter Options</h4>
              <button
                onClick={() => {
                  setShow(false);
                }}
              >
                <img src={closeIcon} alt="close" />
              </button>
            </div>
            <div className="filter-options-container">
              {filterOptions.map((f, index) => {
                return (
                  <motion.div key={index} onClick={() => f.action(f)}>
                    <span>
                      <AnimatePresence mode="wait">
                        {selectedFilter!.value === f.value && (
                          <motion.span
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ duration: 0.5, type: "spring" }}
                          ></motion.span>
                        )}
                      </AnimatePresence>
                    </span>{" "}
                    <img src={f.icon} alt={f.value} /> {f.value}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FilterCryptoModal;
