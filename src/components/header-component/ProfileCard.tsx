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

const actions: {
  title: string;
  address: dashboardSectionTypes;
}[] = [
  {
    title: "profile",
    address: "dashboard/profile",
  },
  {
    title: "setting",
    address: "dashboard/theme",
  },
  {
    title: "check your wallet",
    address: "dashboard/wallet",
  },
  {
    title: "go to dashboard",
    address: "dashboard/home",
  },
];

const ProfileCard = () => {
  const profile = useSelector(selectProfile);
  const theme = useSelector(selecttheme);
  const nav = useNavigate();
  const dispatch = useDispatch();
  return (
    <motion.div
      initial={{ opacity: 0, borderColor: theme.btnColor }}
      animate={{ opacity: 1, background: theme.containerColor }}
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
        {actions.map((a) => {
          return (
            <motion.button
              initial={{
                background: "transparent",
                border: `1px solid ${theme.btnColor}`,
              }}
              transition={{ duration: 0.1 }}
              whileHover={{
                background: theme.btnColor,
              }}
              onClick={() => {
                dispatch(setDashboardSection(a.address));
                dispatch(setDisplayProfileCard(false));
                nav("/dashboard");
              }}
            >
              {a.title}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProfileCard;
