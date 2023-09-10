import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import { useState } from "react";
import { motion } from "framer-motion";
import { useContextFunction } from "../../context/AppContext";
import { deleteIcon } from "../../assets/dashboard/dashboardIcons";

const SingleSkillComponent = ({
  skill,
}: {
  skill: {
    title: string;
    value: string | number;
    id: string;
  };
}) => {
  const contextData = useContextFunction();
  const themeSelector = useSelector(selecttheme);
  const [displayAdd, setDisplayAdd] = useState<{
    display: boolean;
    work: {
      title: string;
      value: string;
      id: string;
    };
  }>({
    display: false,
    work: {
      title: skill.title,
      value: skill.value + "",
      id: skill.id,
    },
  });
  return (
    <motion.div
      whileHover={{ scale: displayAdd.display ? 1 : 1.1 }}
      animate={{
        borderColor: themeSelector.btnColor,
        color: themeSelector.headerColor,
        height: displayAdd.display ? 200 : 110,
      }}
      transition={{ duration: 0.1 }}
      key={skill.title}
      className="work"
      onClick={() => {
        if (!displayAdd.display) {
          setDisplayAdd({ ...displayAdd, display: true });
        }
      }}
    >
      {displayAdd.display ? (
        <>
          <motion.input
            animate={{
              scaleX: displayAdd.display ? "100%" : "0%",
              borderColor: themeSelector.btnColor,
              color: themeSelector.headerColor,
            }}
            transition={{ duration: 0.1 }}
            placeholder="percentage"
            type="number"
            max={100}
            min={0}
            value={+displayAdd.work.value}
            onChange={(e) => {
              if (+e.target.value <= 100) {
                setDisplayAdd({
                  ...displayAdd,
                  work: {
                    value: e.target.value,
                    title: displayAdd.work.title,
                    id: skill.id,
                  },
                });
              } else {
                setDisplayAdd({
                  ...displayAdd,
                  work: {
                    value: "",
                    title: displayAdd.work.title,
                    id: skill.id,
                  },
                });
              }
            }}
          />
          <motion.input
            animate={{
              scaleX: displayAdd.display ? "100%" : "0%",
              borderColor: themeSelector.btnColor,
              color: themeSelector.headerColor,
            }}
            transition={{ duration: 0.1 }}
            placeholder="skill"
            type="text"
            value={displayAdd.work.title}
            onChange={(e) => {
              setDisplayAdd({
                ...displayAdd,
                work: {
                  title: e.target.value,
                  value: displayAdd.work.value,
                  id: skill.id,
                },
              });
            }}
          />
          <motion.button
            whileHover={{ background: themeSelector.hoverColor }}
            onClick={() => {
              contextData!.editWork(displayAdd.work);
              setDisplayAdd({
                ...displayAdd,
                display: false,
              });
            }}
            style={{ background: themeSelector.btnColor }}
          >
            edit
          </motion.button>{" "}
          <motion.button
            animate={{ background: themeSelector.hoverColor }}
            onClick={() => {
              setDisplayAdd({
                display: false,
                work: {
                  id: skill.id,
                  title: skill.title,
                  value: skill.value + "",
                },
              });
            }}
            className="cancel"
          >
            cancel
          </motion.button>
        </>
      ) : (
        <>
          <motion.span
            onClick={() => {
              contextData!.deleteWork(displayAdd.work);
            }}
            whileHover={{ scale: 1.1 }}
            className="delete-btn"
          >
            <img src={deleteIcon} />
          </motion.span>
          <span
            style={{
              color: themeSelector.btnColor,
            }}
            className="value"
          >
            {parseFloat(skill.value + "")}%
          </span>
          <span className="title">{skill.title}</span>
        </>
      )}
    </motion.div>
  );
};

export default SingleSkillComponent;
