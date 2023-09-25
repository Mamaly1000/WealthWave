import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BlogTagsOverlay } from "../../motions/motions";

const ModalComponent = ({
  show,
  setShow,
  children,
  onclick,
  btnText,
  displayAction,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  onclick?: () => void;
  btnText?: string;
  displayAction?: boolean;
}) => {
  const theme = useSelector(selecttheme);
  return (
    <AnimatePresence>
      {show && (
        <motion.div className="modal-component">
          <motion.div
            variants={BlogTagsOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overlay"
            onClick={() => setShow(false)}
          ></motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              borderColor: theme.btnColor,
              background: theme.modalColor,
              color: theme.headerColor,
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.1, type: "spring" }}
            className="content"
          >
            {children}
            {displayAction && (
              <div className="actions-container">
                <button
                  style={{
                    color: theme.btnColor,
                    border: `1px solid ${theme.btnColor}`,
                  }}
                  onClick={onclick}
                >
                  {btnText}
                </button>
                <button
                  style={{ border: `1px solid ${theme.headerColor}` }}
                  onClick={() => setShow(false)}
                >
                  close
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalComponent;
