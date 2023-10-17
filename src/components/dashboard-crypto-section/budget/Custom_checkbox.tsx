import { Checkbox, FormControlLabel } from "@mui/material";
import { useSelector } from "react-redux";
import { selecttheme } from "../../../features/theme_slice/theme_slice";

const Custom_checkbox = ({
  label,
  onclick,
  value,
}: {
  label: string;
  value: boolean;
  onclick: () => void;
}) => {
  const theme = useSelector(selecttheme);
  return (
    <FormControlLabel
      control={
        <Checkbox
          style={{
            color: theme.btnColor,
          }}
          checked={value}
        />
      }
      style={{
        color: theme.headerColor,
      }}
      label={label}
      onClick={onclick}
    />
  );
};

export default Custom_checkbox;
