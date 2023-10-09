import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import React, { useState } from "react";
import styled, { CSSProperties, ThemeProvider } from "styled-components";
import { currencySymbol } from "../../features/crypto_slice/crypto_slice";
import { IcryptoData } from "../../hooks/useCrypto";

const Div = styled.div`
    .css-q0jhri-MuiInputBase-root-MuiInput-root:after {
      border-bottom: 2px solid ${(props) => props.theme.btnColor} !important;
    }
    .MuiCircularProgress-circleIndeterminate {
      stroke: ${(props) => props.theme.btnColor};
    }

    .MuiSelect-select {
      border: 1px solid ${(props) => props.theme.btnColor} !important;
      color: ${(props) => props.theme.headerColor};
      & > img {
        width: 30px;
        height: 30px;
      }
      .css-6hp17o-MuiList-root-MuiMenu-list {
        padding: 0 !important;
        background: ${(props) => props.theme.modalColor} !important;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
      }
    }
    .MuiOutlinedInput-notchedOutline {
      border: 2px solid ${(props) => props.theme.btnColor} !important;
    }
    .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root,.MuiFormLabel-root {
      color: ${(props) => props.theme.headerColor} !important;
    }
    .Mui-focused {
      color: ${(props) => props.theme.btnColor} !important;
    }
    .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
      color: ${(props) => props.theme.headerColor};
    }
    .MuiSelect-icon {
      color: ${(props) => props.theme.btnColor};
    }
    .ghiYu {
      color: ${(props) => props.theme.headerColor} !important;
    }
     .eDywaF .MuiOutlinedInput-root>fieldset span   {
      color: ${(props) => props.theme.headerColor}, 
    },
  `;

const Select_component = ({
  label,
  value,
  data,
  onclickHandler,
  dataType,
}: {
  dataType: "coin" | "price";
  data: {
    name: string;
    image?: string;
    symbol?: string;
    mainData: object;
  }[];
  onclickHandler: (
    type: "coin" | "price",
    data: IcryptoData | currencySymbol
  ) => void;
  label: string;
  value: string;
}) => {
  const theme = useSelector(selecttheme);
  const [inputVal, setInputVal] = useState<string[]>([value]);
  const [clickedData, setClickedData] = useState<unknown>(null);
  const [dataPagination, setDataPagination] = useState({
    total_pages: Math.ceil(data.length / 10),
    offset: 10,
    next_page: true,
    return_page: false,
    current_page: 1,
  });
  const pageHandler = (type: "next" | "previous") => {
    if (type === "next") {
      setDataPagination({
        ...dataPagination,
        current_page: dataPagination.current_page + 1,
        next_page:
          dataPagination.offset * (dataPagination.current_page + 1) -
            dataPagination.total_pages * dataPagination.offset ===
          0
            ? false
            : true,
        return_page: dataPagination.current_page + 1 === 1 ? false : true,
      });
    }
    if (type === "previous") {
      setDataPagination({
        ...dataPagination,
        current_page: dataPagination.current_page - 1,
        next_page:
          dataPagination.offset * (dataPagination.current_page - 1) -
            dataPagination.total_pages * dataPagination.offset ===
          0
            ? false
            : true,
        return_page: dataPagination.current_page - 1 === 1 ? false : true,
      });
    }
  };
  const handleChange = (event: SelectChangeEvent<typeof inputVal>) => {
    const {
      target: { value: targetVal },
    } = event;
    if (!targetVal.includes("next") && !targetVal.includes("previous")) {
      const arr = [targetVal[targetVal.length - 1]];
      setInputVal(arr);
      if (dataType === "price") {
        console.log(clickedData);
        console.log(targetVal);
        // onclickHandler(dataType, clickedData as currencySymbol);
      }
    }
  };
  const menuItemStyle = {
    background: theme.modalColor,
    borderBottom: `1px solid ${theme.btnColor}`,
    borderInline: `1px solid ${theme.btnColor}`,
    color: theme.headerColor,
    textTransform: "uppercase",
  } as CSSProperties;

  return (
    <ThemeProvider theme={theme}>
      <Div className="select-component">
        <FormControl fullWidth>
          <InputLabel
            style={{
              color: theme.headerColor,
              textTransform: "uppercase",
              background: theme.modalColor,
            }}
            id="demo-multiple-name-label"
          >
            {label}
          </InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={inputVal}
            onChange={handleChange}
            input={<OutlinedInput label={label} />}
            renderValue={(selected) => {
              if (selected.length === 1) {
                return <em>{inputVal[0]}</em>;
              }
            }}
          >
            {data.length > 0 && dataPagination.return_page && (
              <MenuItem
                style={menuItemStyle as CSSProperties}
                onClick={() => pageHandler("previous")}
                value={"previous"}
              >
                previous
              </MenuItem>
            )}
            {data
              .slice(
                dataPagination.offset * (dataPagination.current_page - 1),
                dataPagination.offset * dataPagination.current_page
              )
              .map((item) => {
                return (
                  <MenuItem
                    style={menuItemStyle as CSSProperties}
                    key={item.name}
                    value={item.name}
                    onClick={() => {
                      if (clickedData === item.mainData) {
                        setClickedData(null);
                      } else {
                        setClickedData(item.mainData);
                      }
                      onclickHandler(
                        dataType,
                        item.mainData as unknown as IcryptoData as currencySymbol
                      );
                    }}
                  >
                    {item.image && (
                      <img
                        style={{
                          maxWidth: 30,
                          maxHeight: 30,
                          minWidth: 30,
                          minHeight: 30,
                          marginInline: 10,
                        }}
                        src={item.image}
                      />
                    )}
                    {item.symbol && item.symbol}
                    {item.name}
                  </MenuItem>
                );
              })}
            {data.length > 0 && dataPagination.next_page && (
              <MenuItem
                onClick={() => {
                  pageHandler("next");
                }}
                value={"next"}
                style={menuItemStyle as CSSProperties}
              >
                next
              </MenuItem>
            )}
            {data.length === 0 && (
              <MenuItem style={menuItemStyle} onClick={() => setInputVal([""])}>
                nothing here
              </MenuItem>
            )}
          </Select>
        </FormControl>
      </Div>
    </ThemeProvider>
  );
};

export default React.memo(Select_component);
