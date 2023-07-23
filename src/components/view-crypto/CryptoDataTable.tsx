import { useState } from "react";
import arrowDownIcon from "./../../assets/crypto/arrow-down.svg";
import Qicon from "./../../assets/crypto/question.svg";
import { AnimatePresence, motion } from "framer-motion";
const CryptoDataTable = ({
  data,
  index,
}: {
  data: {
    display: boolean;
    title: string;
    value: number | null;
    title_def: string;
    data: { name: string; data: number | string }[];
  };
  index: number;
}) => {
  const [display, setDisplay] = useState<boolean>(false);
  return (
    <>
      <motion.div
        className="list-item"
        key={index}
        style={{
          cursor: data.data.length > 0 ? "pointer" : "default",
        }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{
          duration: 0.1,
          delay: index / 10 + 0.1,
          type: "tween",
        }}
        onClick={() => {
          setDisplay((prev) => !prev);
        }}
      >
        <span className="title">
          {data.title} <img src={Qicon} alt="question" />
        </span>
        <span className="value">
          {data.data.length > 0 && (
            <img
              src={arrowDownIcon}
              style={{
                transform: display ? "rotateZ(180deg)" : "rotateZ(0deg)",
              }}
            />
          )}{" "}
          {data.value ? "$" + data.value?.toLocaleString() : "N/A"}
        </span>
      </motion.div>
      <AnimatePresence>
        {data.data.length > 0 &&
          display &&
          data.data.map((d, index) => {
            return (
              <motion.div
                key={index}
                className="list-item"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.1,
                  delay: index / 10 + 0.1,
                  type: "tween",
                }}
              >
                <span className="title">{d.name}</span>
                <span className="value">
                  {data.value === undefined || data.data === null
                    ? "N/A"
                    : data.value
                    ? "$" + data.value?.toLocaleString()
                    : "N/A"}
                </span>
              </motion.div>
            );
          })}
      </AnimatePresence>
    </>
  );
};

export default CryptoDataTable;
