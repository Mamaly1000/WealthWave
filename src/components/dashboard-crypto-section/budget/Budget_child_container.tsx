import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { CSSProperties } from "styled-components";
import { selecttheme } from "../../../features/theme_slice/theme_slice";
import { motion } from "framer-motion";

const Budget_child_container = ({
  classname,
  children,
}: {
  classname: string;
  children: ReactNode;
}) => {
  const theme = useSelector(selecttheme);
  const divStyle = {
    borderColor: theme.btnColor,
    background: theme.modalColor,
  } as CSSProperties;
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 400, opacity: 1 }}
      transition={{
        duration: 0.5,
        type: "spring",
      }}
      style={divStyle}
      className={classname}
    >
      {children}
    </motion.div>
  );
};

export default Budget_child_container;
