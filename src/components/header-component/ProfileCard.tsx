import { useDispatch, useSelector } from "react-redux";
import { selectProfile } from "../../features/profile_slice/profile_slice";
import {
  dashboardSectionTypes,
  setDashboardSection,
  setDisplayProfileCard,
} from "../../features/dashboard_slice/dashboard_slice";
import { useNavigate } from "react-router-dom";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import { motion } from "framer-motion";

const ProfileCard = () => {
  const profile = useSelector(selectProfile);
  const theme = useSelector(selecttheme);
  const nav = useNavigate();
  const dispatch = useDispatch();
  return (
    <motion.div
      initial={{ opacity: 0, borderColor: theme.btnColor }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      onMouseLeave={() => dispatch(setDisplayProfileCard(false))}
      className="profile-card"
    >
      <div style={{ borderColor: theme.btnColor }} className="top-section">
        <img
          style={{ borderColor: theme.btnColor }}
          src={profile.profile_pic}
        />
        <div className="context" style={{ color: theme.headerColor }}>
          <span className="bold">{profile.name}</span>
          <span className="light">{profile.email}</span>
        </div>
      </div>
      <div style={{ borderColor: theme.btnColor }} className="bottom-section">
        <motion.button
          style={{ background: theme.hoverColor, color: theme.headerColor }}
          transition={{ duration: 0.1 }}
          whileHover={{ background: theme.btnColor }}
          onClick={() => {
            dispatch(
              setDashboardSection("dashboard/profile" as dashboardSectionTypes)
            );
            nav("/dashboard");
          }}
        >
          profile
        </motion.button>
        <motion.button
          style={{ background: theme.hoverColor, color: theme.headerColor }}
          transition={{ duration: 0.1 }}
          whileHover={{ background: theme.btnColor }}
          onClick={() => {
            dispatch(
              setDashboardSection("dashboard/theme" as dashboardSectionTypes)
            );
            nav("/dashboard");
          }}
        >
          setting
        </motion.button>
        <motion.button
          style={{ background: theme.hoverColor, color: theme.headerColor }}
          transition={{ duration: 0.1 }}
          whileHover={{ background: theme.btnColor }}
          onClick={() => {
            dispatch(
              setDashboardSection("dashboard/home" as dashboardSectionTypes)
            );
            nav("/dashboard");
          }}
        >
          go to dashboard
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
