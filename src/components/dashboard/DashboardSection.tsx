import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectDashboard } from "../../features/dashboard_slice/dashboard_slice";
const DashboardSection = ({
  children,
  classname,
}: {
  classname: string;
  children: React.ReactNode;
}) => {
  const dashboard = useSelector(selectDashboard);
  return (
    <motion.div
      animate={{ paddingInlineStart: !dashboard.Displaydashboard ? 0 : "80px" }}
      className={`dashboard-section ${classname}`}
    >
      {children}
    </motion.div>
  );
};

export default DashboardSection;
