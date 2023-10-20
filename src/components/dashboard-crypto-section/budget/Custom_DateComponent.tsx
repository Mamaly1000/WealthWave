import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selecttheme } from "../../../features/theme_slice/theme_slice";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
const Custom_DateComponent = ({
  label,
  onchange,
  value,
}: {
  value: number;
  onchange: (value: Date | null) => void;
  label: string;
}) => {
  const theme = useSelector(selecttheme);
  const [date, setDate] = useState<Dayjs | null>(dayjs(value));
  return (
    <Div theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={label}
          value={date}
          onChange={(value) => {
            setDate(dayjs(value));
            onchange(dayjs(value).toDate());
          }}
          disableFuture
          sx={{ borderColor: theme.btnColor, color: theme.headerColor }}
        />
      </LocalizationProvider>
    </Div>
  );
};

export default Custom_DateComponent;
const Div = styled.div`
  min-width: 100%;
  .MuiFormControl-root {
    border: 1px solid ${(props) => props.theme.btnColor} !important;
    min-width: 100%;
    border-radius: 4px;
    color: ${(props) => props.theme.headerColor} !important;
  }
  .MuiInputBase-root {
    border-color: ${(props) => props.theme.btnColor} !important;
  }
  .css-14lo706,
  .MuiOutlinedInput-notchedOutline,
  .css-14lo706 > span,
  .MuiFormLabel-root,
  .MuiInputBase-input {
    color: ${(props) => props.theme.headerColor} !important;
  }
  .Mui-focused {
    border: 0px solid ${(props) => props.theme.btnColor} !important;
    color: ${(props) => props.theme.btnColor}!important;
    box-shadow: none !important;
  }
  .Mui-focused {
    // border: 1px solid ${(props) => props.theme.btnColor}!important;
  }
  .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    color: ${(props) => props.theme.headerColor} !important;
    border: 0px solid ${(props) => props.theme.btnColor} !important;
  }
  .css-1d3z3hw-MuiOutlinedInput-notchedOutline.Mui-focused {
    border-color: ${(props) => props.theme.btnColor} !important;
    color: ${(props) => props.theme.btnColor} !important;
  }
  .MuiButtonBase-root {
    stroke: ${(props) => props.theme.btnColor} !important;
  }
  .MuiPickersPopper-root {
    background: red;
  }
`;
