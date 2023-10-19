import Divider from "../../ntf-components/Divider";
import { useSelector } from "react-redux";
import { selecttheme } from "../../../features/theme_slice/theme_slice";

const Section_Header = ({ text }: { text: string }) => {
  const theme = useSelector(selecttheme);
  return (
    <h2 style={{ color: theme.headerColor }} className="section-header">
      {text}
      <Divider height={2} width={120} />
    </h2>
  );
};

export default Section_Header;
