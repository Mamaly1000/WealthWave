import { useMemo, useState } from "react";
import InputComponent from "./InputComponent";
import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import { useContextFunction } from "../../context/AppContext";
import { socialPics } from "../../Data/dummy";
import { AnimatePresence, motion } from "framer-motion";
import { tagsMotion } from "../../motions/viewCryptoMotions";
import { tickIcon } from "../../assets/dashboard/icons/icons";
import { deleteIcon } from "../../assets/dashboard/dashboardIcons";
import SingleSocialComponent from "./SingleSocialComponent";
import { toast } from "react-toastify";

const SocialEditor = () => {
  const themeSelector = useSelector(selecttheme);
  const contextData = useContextFunction();
  const [text, setText] = useState<string>("");
  const [displayAdd, setDisplayAdd] = useState<{
    displaySocial: boolean;
    displayHref: boolean;
    inputText: string;
    work: {
      title: string;
      href: string;
      placeholder: string;
    };
  }>({
    displaySocial: false,
    displayHref: false,
    inputText: "",
    work: {
      title: "",
      href: "",
      placeholder: "",
    },
  });
  const searchedData = useMemo(() => {
    return contextData!.localProfile.socials.filter((s) => {
      return (
        s.title.toLowerCase().includes(text.toLowerCase()) ||
        s.href.toLowerCase().includes(text.toLowerCase())
      );
    });
  }, [text, contextData!.localProfile.socials]);
  return (
    <div className="socials-editor">
      <InputComponent
        inputType="text"
        onchange={(e) => {
          setText(e.target.value);
        }}
        placeholder="search..."
        title="socials"
        value={text}
      />
      <div className="socials">
        {searchedData.map((s) => {
          return <SingleSocialComponent social={s} key={s.title} />;
        })}
        <motion.div
          className="add-social"
          onClick={() => {
            if (!displayAdd.displaySocial) {
              setDisplayAdd({ ...displayAdd, displaySocial: true });
            }
          }}
          style={{
            borderColor: themeSelector.btnColor,
            color: themeSelector.headerColor,
          }}
          whileHover={{ scale: displayAdd.displaySocial ? 1 : 1.1 }}
        >
          {!displayAdd.displaySocial ? (
            "add"
          ) : !displayAdd.displayHref ? (
            <>
              {socialPics.map((s, index) => {
                return (
                  <AnimatePresence>
                    <motion.div
                      key={s.title}
                      onClick={() => {
                        setDisplayAdd({
                          displayHref: true,
                          displaySocial: true,
                          inputText: "",
                          work: {
                            href: s.href,
                            title: s.title,
                            placeholder: s.placeholder,
                          },
                        });
                      }}
                      className="social-icon"
                      variants={tagsMotion(index, 0.1)}
                      style={{
                        backgroundImage: `url(${s.icon})`,
                      }}
                      animate="visible"
                      initial="hidden"
                      exit="exit"
                      whileHover={{
                        scale: 1.1,
                      }}
                    ></motion.div>
                  </AnimatePresence>
                );
              })}
              <motion.button
                animate={{
                  background: themeSelector.hoverColor,
                }}
                onClick={() => {
                  setDisplayAdd({
                    ...displayAdd,
                    displaySocial: false,
                  });
                }}
              >
                <img src={deleteIcon} />
              </motion.button>
            </>
          ) : (
            <>
              <motion.input
                value={displayAdd.inputText}
                onChange={(e) => {
                  if (e.target.value.startsWith("@")) {
                    const text = e.target.value.slice(1, e.target.value.length);
                    setDisplayAdd({
                      ...displayAdd,
                      inputText: text,
                    });
                  } else {
                    if (displayAdd.work.title === "whatsapp") {
                      if (isNaN(+e.target.value)) {
                        toast.error("you must just put number !");
                      } else {
                        setDisplayAdd({
                          ...displayAdd,
                          inputText: e.target.value,
                        });
                      }
                    } else {
                      setDisplayAdd({
                        ...displayAdd,
                        inputText: e.target.value,
                      });
                    }
                  }
                }}
                placeholder={displayAdd.work.placeholder}
                style={{ borderColor: themeSelector.btnColor }}
              />
              <motion.button
                animate={{
                  background:
                    displayAdd.inputText.length > 0
                      ? themeSelector.btnColor
                      : themeSelector.hoverColor,
                }}
                whileHover={{ background: themeSelector.hoverColor }}
                disabled={displayAdd.inputText.length === 0}
                onClick={() => {
                  contextData!.addSocial({
                    title: displayAdd.work.title,
                    href: displayAdd.work.href + displayAdd.inputText,
                  });
                  setDisplayAdd({
                    displayHref: false,
                    displaySocial: false,
                    inputText: "",
                    work: {
                      href: "",
                      placeholder: "",
                      title: "",
                    },
                  });
                }}
              >
                <img src={tickIcon} />
              </motion.button>{" "}
              <motion.button
                animate={{
                  background: themeSelector.hoverColor,
                }}
                onClick={() => {
                  setDisplayAdd({
                    ...displayAdd,
                    displayHref: false,
                  });
                }}
              >
                <img src={deleteIcon} />
              </motion.button>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SocialEditor;
