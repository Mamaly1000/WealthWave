import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import { imageTraker } from "./DashboardProfileSection";
import { useState } from "react";
import { socialPics } from "../../Data/dummy";
import { deleteIcon } from "../../assets/dashboard/dashboardIcons";
import { useContextFunction } from "../../context/AppContext";
import { editIcon } from "../../assets/dashboard/icons/icons";
import { toast } from "react-toastify";
export const idTracker = (social: {
  title: string;
  href: string;
}): { id: string; href: string } => {
  let data = { id: "", href: "" };
  const selectedSocial = socialPics.find((s) => s.title === social.title);
  if (selectedSocial) {
    data.id = social.href.replace(selectedSocial.href, "");
    data.href = selectedSocial.href;
  }
  return data;
};
const SingleSocialComponent = ({
  social,
}: {
  social: {
    title: string;
    href: string;
    id: string;
  };
}) => {
  const [displayAdd, setDisplayAdd] = useState<{
    displayHref: boolean;
    inputText: string;
    work: {
      title: string;
      href: string;
    };
  }>({
    displayHref: false,
    inputText: idTracker({
      href: social.href,
      title: social.title,
    }).id,
    work: {
      title: social.title,
      href: idTracker({
        href: social.href,
        title: social.title,
      }).href,
    },
  });
  const themeSelector = useSelector(selecttheme);
  const contextData = useContextFunction();
  return (
    <motion.div
      style={{ borderColor: themeSelector.btnColor }}
      className="social"
      onClick={() => {
        if (!displayAdd.displayHref) {
          setDisplayAdd({ ...displayAdd, displayHref: true });
        }
      }}
      whileHover={{
        scale: displayAdd.displayHref ? 1 : 1.1,
        cursor: displayAdd.displayHref ? "default" : "pointer",
      }}
    >
      {!displayAdd.displayHref ? (
        <>
          <img
            style={{ background: themeSelector.btnColor }}
            src={imageTraker(social.title)}
            alt=""
            className=""
          />
          <span style={{ borderColor: themeSelector.btnColor }}>
            {idTracker({ title: social.title, href: social.href }).id}
          </span>
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
            style={{ borderColor: themeSelector.btnColor }}
          />
          <motion.button
            onClick={() => {
              contextData!.editSocial({
                href:
                  idTracker({ href: social.href, title: social.title }).href +
                  displayAdd.inputText,
                id: social.id,
                title: social.title,
              });
              setDisplayAdd({ ...displayAdd, displayHref: false });
            }}
            animate={{
              color: themeSelector.headerColor,
              background:
                displayAdd.inputText.length > 0
                  ? themeSelector.btnColor
                  : themeSelector.hoverColor,
            }}
            whileHover={{ background: themeSelector.hoverColor }}
            disabled={displayAdd.inputText.length === 0}
          >
            <img src={editIcon} />
          </motion.button>
          <motion.button
            whileHover={{
              background: themeSelector.hoverColor,
            }}
            className="delete-btn"
            onClick={() => {
              setDisplayAdd({
                displayHref: false,
                inputText: idTracker({
                  href: social.href,
                  title: social.title,
                }).id,
                work: {
                  href: idTracker({
                    href: social.href,
                    title: social.title,
                  }).href,
                  title: social.title,
                },
              });
              contextData!.deleteSocial({
                href: social.href,
                id: social.id,
                title: social.title,
              });
            }}
          >
            <img src={deleteIcon} />
          </motion.button>
        </>
      )}
    </motion.div>
  );
};

export default SingleSocialComponent;
