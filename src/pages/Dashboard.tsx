import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { removingPageMotion } from "../motions/motions";

const Dashboard = () => {
  const nav = useNavigate();
  return (
    <motion.div
      variants={removingPageMotion}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="dashboard"
    >
      <span>coming soon !</span>
      <button onClick={() => nav("/")}>go to HomePage</button>
    </motion.div>
  );
};

export default Dashboard;
