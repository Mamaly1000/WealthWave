import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { currencySymbol } from "../../../features/crypto_slice/crypto_slice";
import { useSelector } from "react-redux";
import { selecttheme } from "../../../features/theme_slice/theme_slice";

const Currenc_select = ({ currencies }: { currencies: currencySymbol[] }) => {
  const [Price, setPrice] = useState("");
  const theme = useSelector(selecttheme);
  const handleChange = (event: SelectChangeEvent) => {
    setPrice(event.target.value as string);
  };

  return (
    <div
      style={{
        minWidth: "45%",
        maxHeight: "200px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBlock: 10,
      }}
    >
      <FormControl style={{ minWidth: "45%" }}>
        <InputLabel
          style={{ color: theme.headerColor }}
          id="demo-simple-select-label"
        >
          Price
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Price}
          label="Price"
          onChange={handleChange}
        >
          {currencies.map((c) => {
            return (
              <MenuItem
                onClick={() => {
                  console.log(c.name);
                }}
                style={{
                  background: theme.modalColor,
                  borderBottom: `1px solid ${theme.btnColor}`,
                  color: theme.headerColor,
                  textTransform: "uppercase",
                }}
                value={c.name}
              >
                {c.symbol + " " + c.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default Currenc_select;
