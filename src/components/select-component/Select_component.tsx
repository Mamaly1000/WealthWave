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
import { useState } from "react";
import { CSSProperties } from "styled-components";
import { currencySymbol } from "../../features/crypto_slice/crypto_slice";
import { IcryptoData } from "../../hooks/useCrypto";

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
  value?: unknown;
}) => {
  const theme = useSelector(selecttheme);
  const [open, setOpen] = useState(false);
  const [inputVal, setInputVal] = useState<Array<string | unknown>>([
    value || "",
  ]);
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
      target: { value },
    } = event;
    if (
      value[value.length - 1] !== "next" ||
      value[value.length - 1] !== "previous"
    ) {
      const arr = [value[value.length - 1]];
      setInputVal(typeof value === "string" ? arr : arr);
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
    <div className="select-component">
      <FormControl fullWidth>
        <InputLabel
          style={{
            color: theme.headerColor,
            textTransform: "uppercase",
            background: theme.modalColor,
          }}
          id="demo-simple-select-label"
        >
          {label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={inputVal}
          defaultOpen={open}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => (inputVal.length > 0 ? setOpen(true) : setOpen(false))}
          multiple
        >
          {dataPagination.return_page && (
            <MenuItem
              style={menuItemStyle as CSSProperties}
              className="paginatate-btn"
              onClick={() => pageHandler("previous")}
              value={["previous"]}
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
                    onclickHandler(
                      dataType,
                      item.mainData as unknown as IcryptoData as currencySymbol
                    );
                    setInputVal([item.name]);
                    setOpen(false);
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
          {dataPagination.next_page && (
            <MenuItem
              onClick={() => {
                setOpen(true);
                setInputVal(["next"]);
                pageHandler("next");
              }}
              value={["next"]}
              style={menuItemStyle as CSSProperties}
            >
              next
            </MenuItem>
          )}
        </Select>
      </FormControl>
    </div>
  );
};

export default Select_component;
