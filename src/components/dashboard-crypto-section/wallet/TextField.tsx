import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selecttheme } from "../../../features/theme_slice/theme_slice";
import { motion } from "framer-motion";

const TextField = ({
  value,
  label,
  onchange,
  placeholder,
}: {
  placeholder: string;
  label: string;
  value: string | number | readonly string[] | undefined;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const theme = useSelector(selecttheme);
  const [text, setText] = useState(value + "");
  const [focused, setFocus] = useState(false);
  const inputRef: React.LegacyRef<HTMLInputElement> | undefined = useRef(null);
  return (
    <div
      style={{
        border: `2px solid ${theme.btnColor}`,
        color: theme.headerColor,
      }}
      className="text-field-input"
    >
      <motion.span
        animate={{
          background: theme.modalColor,
          top: focused || text.length > 0 ? "-25%" : "25%",
        }}
        onClick={() => {
          setFocus(true);
          inputRef!.current!.focus();
        }}
        transition={{ duration: 0.1, ease: "linear" }}
        style={{ color: focused ? theme.btnColor : theme.headerColor }}
        className={`label ${focused ? "focus-label" : ""}`}
      >
        {label}
      </motion.span>
      <input
        ref={inputRef}
        type="text"
        defaultValue={""}
        value={text}
        style={{ background: theme.modalColor }}
        onChange={(e) => {
          if (!isNaN(+e.target.value)) {
            setText(e.target.value);
            onchange(e);
          }
        }}
        placeholder={focused ? placeholder : ""}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus((value as string).length > 0 ? true : false);
        }}
      />
    </div>
  );
};

export default TextField;
