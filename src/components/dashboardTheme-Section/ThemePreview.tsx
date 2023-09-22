import { AnimatePresence, motion } from "framer-motion";
import { ThemeInterface } from "../../hooks/useTheme";
import Divider from "../ntf-components/Divider";
import { useState } from "react";

const ThemePreview = ({ localTheme }: { localTheme: ThemeInterface }) => {
  const {
    bgColor,
    btnColor,
    containerColor,
    headerColor,
    plainTextColor,
    hoverColor,
  } = localTheme;
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  return (
    <motion.div style={{ background: bgColor }} className="preview-container">
      <motion.div style={{ background: containerColor }} className="img">
        random image
      </motion.div>
      <motion.h1 style={{ color: headerColor }}>title</motion.h1>
      <Divider height={3} width={150} />
      <motion.p style={{ color: plainTextColor }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur
        tempore totam vitae nostrum. Illo corrupti quis veritatis, vero, soluta,
        consectetur perspiciatis similique voluptatibus id dolore ducimus
        necessitatibus praesentium officiis.
      </motion.p>
      <motion.button
        whileHover={{ background: hoverColor }}
        animate={{ background: btnColor }}
        onClick={() => {
          setDisplayModal(true);
        }}
      >
        display modal
      </motion.button>
      <AnimatePresence>
        {displayModal && (
          <div className="preview-modal-container">
            <div
              className="preview-modal-overlay"
              onClick={() => setDisplayModal(false)}
            ></div>
            <motion.div
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                borderColor: localTheme.btnColor,
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.1 }}
              style={{
                background: localTheme.modalColor,
                color: localTheme.headerColor,
              }}
              onClick={() => setDisplayModal(false)}
              className="preview-modal-content"
            >
              this is a modal container
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ThemePreview;
