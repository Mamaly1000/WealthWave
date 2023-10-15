import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selecttheme } from "../../../features/theme_slice/theme_slice";

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar = ({ percentage }: ProgressBarProps) => {
  const radius = 40;
  const circumference = radius * 2 * Math.PI;
  const progress = circumference - (percentage / 100) * circumference;
  const theme = useSelector(selecttheme);
  return (
    <svg
      viewBox="0 0 300 300"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke="rgba(0 0 0 /.2)"
        strokeWidth="8"
        style={{ boxShadow: "0 0 10px rgba(255 255 255/.2)" }}
      />
      <motion.circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke={theme.btnColor}
        strokeWidth="8"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={progress}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: progress }}
      />
    </svg>
  );
};
export default ProgressBar;
