import { useSelector } from "react-redux";
import Divider from "../ntf-components/Divider";
import { selecttheme } from "../../features/theme_slice/theme_slice";

const ThemeHeader = ({
  text,
  width,
  height,
}: {
  text: string;
  width: number;
  height: number;
}) => {
  const themeSelector = useSelector(selecttheme);
  return (
    <div className="theme-header">
      <Divider height={height} width={width} />{" "}
      <h3 style={{ color: themeSelector.headerColor }}>{text}</h3>
    </div>
  );
};

export default ThemeHeader;
