import { motion } from "framer-motion";
import CountUp from "react-countup";
interface ProgressBarProps {
  percentage: number;
  title: string;
  color: string;
}

const ProgressBar = ({ percentage, title, color }: ProgressBarProps) => {
  const radius = 40;
  const circumference = radius * 2 * Math.PI;
  const progress = circumference - (percentage / 100) * circumference;
  return (
    <div className="progress-bar">
      <svg
        viewBox="0 0 100 100"
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
          stroke={color}
          strokeWidth="8"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={progress}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: progress }}
          transition={{ duration: 0.5, delay: 2, type: "just" }}
        />
      </svg>
      <span className="title">
        <CountUp
          start={0}
          end={percentage}
          duration={0.5}
          delay={2}
          suffix={"%"}
        >
          {({ countUpRef }) => <span ref={countUpRef} />}
        </CountUp>
        <span>{title}</span>
      </span>
    </div>
  );
};
export default ProgressBar;
