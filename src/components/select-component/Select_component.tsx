import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import { ReactNode, useState } from "react";
import { CSSProperties } from "styled-components";

const Select_component = ({
  label,
  value,
  onchange,
  data,
  onclickHandler,
  dataType,
}: {
  dataType: string;
  data: {
    name: string;
    image?: string;
    symbol?: string;
    mainData: object;
  }[];
  onclickHandler: (type: string, data: unknown) => void;
  label: string;
  value: unknown;
  onchange: (e: SelectChangeEvent<unknown>) => void;
}) => {
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
  const theme = useSelector(selecttheme);
  const menuItemStyle = {
    background: theme.modalColor,
    borderBottom: `1px solid ${theme.btnColor}`,
    color: theme.headerColor,
    textTransform: "uppercase",
  };
  return (
    <div className="select-component">
      <FormControl fullWidth>
        <InputLabel
          style={{ color: theme.headerColor }}
          id="demo-simple-select-label"
        >
          {label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={onchange}
        >
          <MenuItem style={menuItemStyle as CSSProperties}>back</MenuItem>
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
                  onClick={() => onclickHandler(dataType, item.mainData)}
                >
                  {item.image && <img src={item.image} />}
                  {item.symbol && item.symbol}
                  {item.name}
                </MenuItem>
              );
            })}
          <MenuItem style={menuItemStyle as CSSProperties}>show more</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Select_component;
