import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import { selecttheme } from "../../../features/theme_slice/theme_slice";

const Div = styled.div`
  min-width: 100%;
  * {
    color: ${(props) => props.theme.headerColor} !important;
    border-color: ${(props) => props.theme.btnColor} !important;
    putline: none !important;
  }
  .Mui-focused {
    color: ${(props) => props.theme.btnColor} !important;
  }
`;

const Custom_textfield = ({
  value,
  onchange,
  type,
  label,
  max = 12,
}: {
  max?: number;
  label: string;
  type: React.HTMLInputTypeAttribute | undefined;
  value: any;
  onchange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}) => {
  const theme = useSelector(selecttheme);
  return (
    <Div theme={theme}>
      <TextField
        fullWidth
        value={value}
        type={type}
        onChange={onchange}
        id="outlined-basic"
        label={label}
        variant="outlined"
        maxRows={max}
      />
    </Div>
  );
};

export default Custom_textfield;
