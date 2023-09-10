import { useMemo, useState } from "react";
import InputComponent from "./InputComponent";
import { useContextFunction } from "../../context/AppContext";
import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import { motion } from "framer-motion";
import SingleSkillComponent from "./SingleSkillComponent";

const WorkEditor = () => {
  const [text, setText] = useState<string>("");
  const contextData = useContextFunction();
  const themeSelector = useSelector(selecttheme);
  const [displayAdd, setDisplayAdd] = useState<{
    display: boolean;
    work: {
      title: string;
      value: string;
    };
  }>({
    display: false,
    work: {
      title: "",
      value: "",
    },
  });
  const searchedData = useMemo(() => {
    return contextData!.localProfile.works.filter((w) => {
      return (
        w.title.toLowerCase().includes(text.toLowerCase()) ||
        (w.value + "").toLowerCase().includes(text.toLowerCase())
      );
    });
  }, [text, contextData!.localProfile]);
  return (
    <div className="work-editor">
      <InputComponent
        inputType="text"
        onchange={(e) => setText(e.target.value)}
        placeholder="search..."
        title="your skills"
        value={text}
      />
      <div className="works">
        {searchedData.map((w) => {
          return <SingleSkillComponent skill={w} key={w.title} />;
        })}
        <motion.div
          onClick={() => {
            if (!displayAdd.display) {
              setDisplayAdd({ ...displayAdd, display: true });
            }
          }}
          animate={{
            height: displayAdd.display ? 200 : 110,
          }}
          transition={{ duration: 0.1 }}
          style={{ borderColor: themeSelector.btnColor }}
          className="work"
          whileHover={{ scale: displayAdd.display ? 1 : 1.1 }}
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
                      },
                    });
                  } else {
                    setDisplayAdd({
                      ...displayAdd,
                      work: {
                        value: "0",
                        title: displayAdd.work.title,
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
                    },
                  });
                }}
              />
              <motion.button
                whileHover={{ background: themeSelector.hoverColor }}
                onClick={() => {
                  contextData!.addWork(displayAdd.work);
                  setDisplayAdd({
                    display: false,
                    work: {
                      title: "",
                      value: "",
                    },
                  });
                }}
                style={{ background: themeSelector.btnColor }}
              >
                add
              </motion.button>{" "}
              <motion.button
                animate={{ background: themeSelector.hoverColor }}
                onClick={() => {
                  setDisplayAdd({
                    display: false,
                    work: {
                      title: "",
                      value: "",
                    },
                  });
                }}
                className="cancel"
              >
                cancel
              </motion.button>
            </>
          ) : (
            "add"
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default WorkEditor;
