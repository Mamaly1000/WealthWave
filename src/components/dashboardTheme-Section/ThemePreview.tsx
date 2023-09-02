import { motion } from "framer-motion";
import { ThemeInterface } from "../../hooks/useTheme";
import Divider from "../ntf-components/Divider";

const ThemePreview = ({ localTheme }: { localTheme: ThemeInterface }) => {
  const {
    bgColor,
    btnColor,
    containerColor,
    headerColor,
    plainTextColor,
    hoverColor,
  } = localTheme;
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
      >
        read more
      </motion.button>
    </motion.div>
  );
};

export default ThemePreview;
