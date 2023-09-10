import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import Header from "../header-component/Header";
import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";

const InputComponent = ({
  title,
  inputType,
  placeholder,
  value,
  onchange,
}: {
  title: string;
  inputType: HTMLInputTypeAttribute;
  placeholder: string;
  value: string | number;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const themeSelector = useSelector(selecttheme);
  return (
    <div className="input-group">
      <Header
        btnText=""
        header={false}
        height={30}
        width={3}
        onclick={() => {}}
        text={title}
      />
      <input
        style={{
          borderColor: themeSelector.btnColor,
          color: themeSelector.plainTextColor,
        }}
        type={inputType}
        value={value}
        onChange={onchange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputComponent;
