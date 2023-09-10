import { useSelector } from "react-redux";
import Header from "../header-component/Header";
import { selecttheme } from "../../features/theme_slice/theme_slice";

const TextAreaComponent = ({
  title,
  placeholder,
  value,
  onchange,
}: {
  title: string;
  placeholder: string;
  value: string | number;
  onchange: (e: any) => void;
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
      <textarea
        className="textarea"
        style={{
          borderColor: themeSelector.btnColor,
          color: themeSelector.plainTextColor,
        }}
        value={value}
        onChange={onchange}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default TextAreaComponent;
