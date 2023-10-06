import React from "react";
import { IcryptoData } from "../../../hooks/useCrypto";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useSelector } from "react-redux";
import { selecttheme } from "../../../features/theme_slice/theme_slice";

const Crypto_Select = ({ coins }: { coins: IcryptoData[] }) => {
  const [Currency, setCurrency] = React.useState("");
  const theme = useSelector(selecttheme);
  const handleChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value as string);
  };

  return (
    <div style={{ minWidth: "48%" }}>
      <FormControl fullWidth={true}>
        <InputLabel
          style={{ color: theme.headerColor }}
          id="demo-simple-select-label"
        >
          Currency
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Currency}
          label="Currency"
          onChange={handleChange}
        >
          {coins.map((coin) => {
            return (
              <MenuItem
                style={{
                  background: theme.modalColor,
                  borderBottom: `1px solid ${theme.btnColor}`,
                  color: theme.headerColor,
                  textTransform: "uppercase",
                }}
                value={coin.symbol}
              >
                <img
                  src={coin.image}
                  style={{
                    maxWidth: "30px",
                    maxHeight: "30px",
                    minWidth: "30px",
                    minHeight: "30px",
                    marginInlineEnd: "10px",
                  }}
                />
                {coin.symbol}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default Crypto_Select;
