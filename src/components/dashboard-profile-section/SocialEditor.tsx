import React, { useMemo, useState } from "react";
import InputComponent from "./InputComponent";
import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import { useContextFunction } from "../../context/AppContext";
import { imageTraker } from "./DashboardProfileSection";

const SocialEditor = () => {
  const themeSelector = useSelector(selecttheme);
  const contextData = useContextFunction();
  const [text, setText] = useState<string>("");
  const [displayAdd, setDisplayAdd] = useState<{
    display: boolean;
    work: {
      title: string;
      href: string;
    };
  }>({
    display: false,
    work: {
      title: "",
      href: "",
    },
  });
  useMemo(() => {
    contextData!.localProfile.socials.filter((s) => {
      return s.title.toLowerCase().includes(text.toLowerCase());
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
        {contextData!.localProfile.socials.map((s) => {
          return (
            <div className="social">
              <img src={imageTraker(s.title)} alt="" className="" />
              <span>{s.href}</span>
            </div>
          );
        })}
        <div className="social"></div>
      </div>
    </div>
  );
};

export default SocialEditor;
