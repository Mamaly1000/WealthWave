import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";

const Divider = ({ width, height }: { width: number; height: number }) => {
  const themeSelector = useSelector(selecttheme);
  return (
    <div
      className={`${themeSelector.divider}`}
      style={{
        maxWidth: `${width}px`,
        maxHeight: `${height}px`,
        width: `${width}px`,
        height: `${height}px`,
      }}
    ></div>
  );
};

export default Divider;
